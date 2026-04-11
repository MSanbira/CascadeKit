import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { LayerStack } from '../../components/LayerStack/LayerStack';
import './HowPage.css';

const layerOrderCSS = `/* layers.css - Import this FIRST */
@layer base, utils, components, pages, component-overrides, user-overrides;`;

const componentImportTSX = `// Button.tsx
import './Button.css';  // CSS loads when component loads

export function Button({ children }) {
  return <button className="Button--root">{children}</button>;
}`;

const componentCSS = `/* Button.css */
@layer components {
  .Button--root {
    background: var(--color-primary);
    padding: var(--space-2) var(--space-4);
  }
}`;

const appImportTSX = `// App.tsx
import './styles/layers.css';  // Layer order (first!)
import './styles/base.css';    // Resets, variables
import './styles/utils.css';   // Utility classes

// Component CSS loads automatically via imports
import { Button } from './components/Button';
import { Card } from './components/Card';`;

const globalClassCSS = `/* Global but structured */
.Button--root { }      /* Unique by convention */
.Button--icon { }      /* Component-scoped */
.Button--label { }     /* No hash needed */`;

const classNamesHelper = `import { classNames } from '../../helpers/classNameHelper';

// classNames auto-adds --root and joins classes
<button className={classNames('Button', [\`Button--\${variant}\`, className])}>
  {children}
</button>

// Output: "Button--root Button--primary custom-class"`;

const inlineStyleBad = `/* ❌ Inline styles bypass the cascade */
<Button style={{ margin: '16px' }}>
  Click me
</Button>

/* user-overrides cannot override this! */
@layer user-overrides {
  .Button--root { margin: 0; }  /* ignored */
}`;

const cssVarsGood = `/* ✓ CSS vars preserve the cascade */
<Button mixin={{ m: 2 }}>
  Click me
</Button>

/* Generates: style="--mixin-margin: ..." */
/* user-overrides CAN override this! */
@layer user-overrides {
  .Button--root { margin: 0; }  /* works! */
}`;

export function HowPage() {
  return (
    <div className="HowPage--root">
      <Section>
        <Text variant="h1">How It Works</Text>
        <Text>
          CascadeKit works by combining three native CSS/JS features:
          import-based CSS loading, cascade layers, and naming conventions.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">1. Define Layer Order</Text>
        <Text>
          First, define the cascade layer order in a single file. This file 
          must be imported before any other CSS to establish the hierarchy:
        </Text>
        <CodeBlock language="css" filename="styles/layers.css">
          {layerOrderCSS}
        </CodeBlock>
        <Text>
          Layers listed later have higher priority. So <code>user-overrides</code> beats 
          <code>component-overrides</code>, which beats <code>pages</code>, and so on.
        </Text>
        <Text>
          Notice that <code>component-overrides</code> comes <em>after</em> <code>pages</code>. 
          This ensures that component modifiers (like <code>:disabled</code> or <code>--active</code> states) 
          always work as intended, even when pages apply custom styling to components.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">2. Import CSS in Components</Text>
        <Text>
          Each component imports its own CSS file. Bundlers like Vite handle 
          this automatically — CSS loads when the component is used:
        </Text>
        <CodeBlock language="tsx" filename="Button.tsx">
          {componentImportTSX}
        </CodeBlock>
        <CodeBlock language="css" filename="Button.css">
          {componentCSS}
        </CodeBlock>
        <Text>
          When <code>Button</code> is imported, its CSS is added to the bundle. 
          If <code>Button</code> is never used, its CSS never loads.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">3. Bootstrap in App Root</Text>
        <Text>
          In your app entry point, import global styles first, then components:
        </Text>
        <CodeBlock language="tsx" filename="App.tsx">
          {appImportTSX}
        </CodeBlock>
        <Text>
          The import order ensures layers are defined before component CSS loads.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">4. Use Global-but-Structured Classes</Text>
        <Text>
          Class names are global (no hashing), but structured by convention:
        </Text>
        <CodeBlock language="css">
          {globalClassCSS}
        </CodeBlock>
        <Text>
          The <code>classNames</code> helper enforces this convention automatically:
        </Text>
        <CodeBlock language="tsx">{classNamesHelper}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">How the Cascade Works</Text>
        <Text>
          With <code>@layer</code>, specificity within a layer doesn't affect 
          styles in other layers. A simple selector in <code>@layer user-overrides</code> 
          will always beat a complex selector in <code>@layer components</code>:
        </Text>
        <LayerStack mixin={{ my: 3 }} />
        <Text>
          This means you can always override component styles from a page without 
          increasing specificity or using <code>!important</code>.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Why All Tools Must Respect Layers</Text>
        <Text>
          The layering system only works when <Strong>all styling tools respect it</Strong>. 
          Any feature that applies styles — whether built-in props, mixins, or utilities — 
          must integrate with the cascade to preserve override capabilities.
        </Text>
        <Text>
          <Strong>The problem with inline styles:</Strong> When you write CSS properties 
          directly into the <code>style</code> attribute, those values bypass the cascade 
          entirely. Inline styles have the highest specificity and cannot be overridden 
          by any layer — not even <code>user-overrides</code>.
        </Text>
        <CodeBlock language="tsx">{inlineStyleBad}</CodeBlock>
        <Text>
          <Strong>The solution — CSS custom properties:</Strong> Instead of setting values 
          directly, we set CSS variables. The actual styling happens in CSS classes that 
          live within the layer system. This means user overrides still work.
        </Text>
        <CodeBlock language="tsx">{cssVarsGood}</CodeBlock>
        <Text>
          This principle applies to any dynamic styling feature: spacing props, responsive 
          mixins, theme toggles, etc. Always use CSS vars + classes, never raw inline styles.
        </Text>
      </Section>
    </div>
  );
}
