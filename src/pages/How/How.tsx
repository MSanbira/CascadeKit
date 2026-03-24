import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import './How.css';

const layerOrderCSS = `/* layers.css - Import this FIRST */
@layer base, utils, components, pages, overrides;`;

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

export function How() {
  return (
    <div className="How--root">
      <Section>
        <Heading level={1}>How It Works</Heading>
        <p>
          CascadeKit works by combining three native CSS/JS features:
          import-based CSS loading, cascade layers, and naming conventions.
        </p>
      </Section>

      <Section>
        <Heading level={2}>1. Define Layer Order</Heading>
        <p>
          First, define the cascade layer order in a single file. This file 
          must be imported before any other CSS to establish the hierarchy:
        </p>
        <CodeBlock language="css" filename="styles/layers.css">
          {layerOrderCSS}
        </CodeBlock>
        <p>
          Layers listed later have higher priority. So <code>overrides</code> beats 
          <code>pages</code>, which beats <code>components</code>, and so on.
        </p>
      </Section>

      <Section>
        <Heading level={2}>2. Import CSS in Components</Heading>
        <p>
          Each component imports its own CSS file. Bundlers like Vite handle 
          this automatically — CSS loads when the component is used:
        </p>
        <CodeBlock language="tsx" filename="Button.tsx">
          {componentImportTSX}
        </CodeBlock>
        <CodeBlock language="css" filename="Button.css">
          {componentCSS}
        </CodeBlock>
        <p>
          When <code>Button</code> is imported, its CSS is added to the bundle. 
          If <code>Button</code> is never used, its CSS never loads.
        </p>
      </Section>

      <Section>
        <Heading level={2}>3. Bootstrap in App Root</Heading>
        <p>
          In your app entry point, import global styles first, then components:
        </p>
        <CodeBlock language="tsx" filename="App.tsx">
          {appImportTSX}
        </CodeBlock>
        <p>
          The import order ensures layers are defined before component CSS loads.
        </p>
      </Section>

      <Section>
        <Heading level={2}>4. Use Global-but-Structured Classes</Heading>
        <p>
          Class names are global (no hashing), but structured by convention:
        </p>
        <CodeBlock language="css">
          {globalClassCSS}
        </CodeBlock>
        <div className="How--naming">
          <div className="How--namingItem">
            <code className="font-semibold">ComponentName--element</code>
            <span>Root and child elements</span>
          </div>
          <div className="How--namingItem">
            <code className="font-semibold">ComponentName--variant</code>
            <span>Visual variants</span>
          </div>
          <div className="How--namingItem">
            <code className="font-semibold">ComponentName--state</code>
            <span>State modifiers</span>
          </div>
        </div>
      </Section>

      <Section>
        <Heading level={2}>How the Cascade Works</Heading>
        <p>
          With <code>@layer</code>, specificity within a layer doesn't affect 
          styles in other layers. A simple selector in <code>@layer overrides</code> 
          will always beat a complex selector in <code>@layer components</code>:
        </p>
        <div className="How--layerDiagram">
          <div className="How--layer How--layer-overrides text-sm font-medium">overrides (highest)</div>
          <div className="How--layer How--layer-pages text-sm font-medium">pages</div>
          <div className="How--layer How--layer-components text-sm font-medium">components</div>
          <div className="How--layer How--layer-utils text-sm font-medium">utils</div>
          <div className="How--layer How--layer-base text-sm font-medium">base (lowest)</div>
        </div>
        <p>
          This means you can always override component styles from a page without 
          increasing specificity or using <code>!important</code>.
        </p>
      </Section>
    </div>
  );
}
