import { Section } from '../../components/Section/Section';
import { routes } from '../../constants/routes';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text, Strong } from '../../components/Text/Text';
import { Button } from '../../components/Button/Button';
import { Box } from '../../components/Box/Box';
import { LayerStack } from '../../components/LayerStack/LayerStack';
import {
  layerOrderCSS,
  componentImportTSX,
  componentCSS as howComponentCSS,
  appImportTSX,
  globalClassCSS,
  classNamesHelper,
  inlineStyleBad,
  cssVarsGood,
} from './howPageContent';
import './HowPage.css';

export function HowPage() {
  return (
    <div className="HowPage--root">
      <Section>
        <Text variant="h1" bottomMargin>How It Works</Text>
        <Text>
          CascadeKit works by combining three native CSS/JS features:
          import-based CSS loading, cascade layers, and naming conventions.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>AI-Integrated Tooling</Text>
        <Text>
          CascadeKit ships with tools that help AI coding assistants understand and follow these
          conventions automatically. A <Strong>PROMPT_GUIDE.md</Strong> teaches any AI the rules,
          and an <Strong>MCP server</Strong> gives compatible editors direct access to component
          generation, token lookups, and documentation.
        </Text>
        <Box mixin={{ mt: 3 }}>
          <Button variant="secondary" href={routes.aiTools}>Learn about AI tools →</Button>
        </Box>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>1. Define Layer Order</Text>
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
        <Text variant="h2" bottomMargin>2. Import CSS in Components</Text>
        <Text>
          Each component imports its own CSS file. Bundlers like Vite handle 
          this automatically — CSS loads when the component is used:
        </Text>
        <CodeBlock language="tsx" filename="Button.tsx">
          {componentImportTSX}
        </CodeBlock>
        <CodeBlock language="css" filename="Button.css">
          {howComponentCSS}
        </CodeBlock>
        <Text>
          When <code>Button</code> is imported, its CSS is added to the bundle. 
          If <code>Button</code> is never used, its CSS never loads.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>3. Bootstrap in App Root</Text>
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
        <Text variant="h2" bottomMargin>4. Use Global-but-Structured Classes</Text>
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
        <Text variant="h2" bottomMargin>How the Cascade Works</Text>
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
        <Text variant="h2" bottomMargin>Why All Tools Must Respect Layers</Text>
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
