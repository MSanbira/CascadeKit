import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card, CardHeader, CardContent } from '../../components/Card';
import './Layers.css';

const layerDefinition = `/* This MUST be first CSS import */
@layer base, utils, components, pages, overrides;`;

const baseLayerExample = `@layer base {
  :root {
    --color-primary: #6366f1;
    --space-4: 1rem;
    --radius-md: 8px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
}`;

const utilsLayerExample = `@layer utils {
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .flex { display: flex; }
  .gap-4 { gap: var(--space-4); }
  .text-center { text-align: center; }
}`;

const componentsLayerExample = `@layer components {
  .Button--root {
    padding: var(--space-2) var(--space-4);
    background: var(--color-primary);
    border-radius: var(--radius-md);
  }

  .Card--root {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
  }
}`;

const pagesLayerExample = `@layer pages {
  .HomePage--hero {
    padding-block: var(--space-16);
    text-align: center;
  }

  /* Override component in page context */
  .HomePage--hero .Button--root {
    font-size: var(--text-lg);
  }
}`;

const overridesLayerExample = `@layer overrides {
  /* Emergency fixes, A/B tests, etc. */
  .Button--root[data-experiment="new-cta"] {
    background: var(--color-accent);
  }

  /* Third-party component overrides */
  .DatePicker--input {
    border-color: var(--color-border);
  }
}`;

export function Layers() {
  return (
    <div className="Layers--root">
      <Section>
        <Heading level={1}>Layers Explained</Heading>
        <p>
          CSS Cascade Layers (<code>@layer</code>) let you control which styles 
          win when there are conflicts — without resorting to specificity tricks 
          or <code>!important</code>.
        </p>
      </Section>

      <Section>
        <Heading level={2}>Layer Order</Heading>
        <p>
          CascadeKit uses five layers, ordered from lowest to highest priority:
        </p>
        <CodeBlock language="css" filename="layers.css">
          {layerDefinition}
        </CodeBlock>
        
        <div className="Layers--diagram">
          <div className="Layers--stack">
            <div className="Layers--stackItem Layers--stackItem-overrides text-sm">
              <span className="font-semibold">overrides</span>
              <span className="text-xs">Highest priority</span>
            </div>
            <div className="Layers--stackItem Layers--stackItem-pages text-sm">
              <span className="font-semibold">pages</span>
              <span className="text-xs">↑</span>
            </div>
            <div className="Layers--stackItem Layers--stackItem-components text-sm">
              <span className="font-semibold">components</span>
              <span className="text-xs">↑</span>
            </div>
            <div className="Layers--stackItem Layers--stackItem-utils text-sm">
              <span className="font-semibold">utils</span>
              <span className="text-xs">↑</span>
            </div>
            <div className="Layers--stackItem Layers--stackItem-base text-sm">
              <span className="font-semibold">base</span>
              <span className="text-xs">Lowest priority</span>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Heading level={2}>Layer Purposes</Heading>
        
        <Card className="Layers--card">
          <CardHeader>
            <code>@layer base</code>
          </CardHeader>
          <CardContent>
            <p><strong>Purpose:</strong> CSS reset, design tokens, typography defaults</p>
            <p><strong>Contains:</strong> Variables, reset styles, element defaults</p>
            <CodeBlock language="css">{baseLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="Layers--card">
          <CardHeader>
            <code>@layer utils</code>
          </CardHeader>
          <CardContent>
            <p><strong>Purpose:</strong> Reusable utility classes</p>
            <p><strong>Contains:</strong> Layout helpers, visibility, spacing shortcuts</p>
            <CodeBlock language="css">{utilsLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="Layers--card">
          <CardHeader>
            <code>@layer components</code>
          </CardHeader>
          <CardContent>
            <p><strong>Purpose:</strong> Reusable UI components</p>
            <p><strong>Contains:</strong> Button, Card, Input, Modal, etc.</p>
            <CodeBlock language="css">{componentsLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="Layers--card">
          <CardHeader>
            <code>@layer pages</code>
          </CardHeader>
          <CardContent>
            <p><strong>Purpose:</strong> Page-specific styles and component overrides</p>
            <p><strong>Contains:</strong> Page layouts, contextual component tweaks</p>
            <CodeBlock language="css">{pagesLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="Layers--card">
          <CardHeader>
            <code>@layer overrides</code>
          </CardHeader>
          <CardContent>
            <p><strong>Purpose:</strong> Last-resort overrides, experiments, third-party fixes</p>
            <p><strong>Contains:</strong> A/B test styles, vendor overrides, hotfixes</p>
            <CodeBlock language="css">{overridesLayerExample}</CodeBlock>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Heading level={2}>Key Insight</Heading>
        <p>
          With layers, a <strong>simple selector</strong> in a higher layer always 
          beats a <strong>complex selector</strong> in a lower layer:
        </p>
        <div className="Layers--insight">
          <div className="Layers--insightItem">
            <code className="text-sm">.Button--root</code>
            <span className="text-sm text-muted">in @layer overrides</span>
            <span className="Layers--insightResult Layers--insightResult-wins text-sm font-semibold">WINS ✓</span>
          </div>
          <div className="Layers--insightItem">
            <code className="text-sm">body main .Card--root .Button--root:hover</code>
            <span className="text-sm text-muted">in @layer components</span>
            <span className="Layers--insightResult Layers--insightResult-loses text-sm font-semibold">loses</span>
          </div>
        </div>
        <p>
          This makes overriding predictable. No more fighting specificity.
        </p>
      </Section>
    </div>
  );
}
