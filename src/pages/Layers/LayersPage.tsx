import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Box } from '../../components/Box';
import { LayerStack } from '../../components/LayerStack';
import './LayersPage.css';

const layerDefinition = `/* This MUST be first CSS import */
@layer base, utils, components, pages, component-overrides, user-overrides;`;

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

const componentOverridesLayerExample = `@layer component-overrides {
  /* Component modifiers that need to override variants */
  .Text--bold {
    font-weight: var(--font-weight-bold);
  }

  .Text--muted {
    color: var(--color-text-muted);
  }

  .Button--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}`;

const userOverridesLayerExample = `@layer user-overrides {
  /* Emergency fixes, A/B tests, etc. */
  .Button--root[data-experiment="new-cta"] {
    background: var(--color-accent);
  }

  /* Third-party component overrides */
  .DatePicker--input {
    border-color: var(--color-border);
  }
}`;

export function LayersPage() {
  return (
    <div className="LayersPage--root">
      <Section>
        <Text variant="h1">Layers Explained</Text>
        <p>
          CSS Cascade Layers (<code>@layer</code>) let you control which styles 
          win when there are conflicts — without resorting to specificity tricks 
          or <code>!important</code>.
        </p>
      </Section>

      <Section>
        <Text variant="h2">Layer Order</Text>
        <p>
          CascadeKit uses six layers, ordered from lowest to highest priority:
        </p>
        <CodeBlock language="css" filename="layers.css">
          {layerDefinition}
        </CodeBlock>
        
        <LayerStack mixin={{ my: 6 }} />
      </Section>

      <Section>
        <Text variant="h2">Layer Purposes</Text>
        
        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer base</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> CSS reset, design tokens, typography defaults</p>
            <p><Strong>Contains:</Strong> Variables, reset styles, element defaults</p>
            <CodeBlock language="css">{baseLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer utils</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> Reusable utility classes</p>
            <p><Strong>Contains:</Strong> Layout helpers, visibility, spacing shortcuts</p>
            <CodeBlock language="css">{utilsLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer components</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> Reusable UI components</p>
            <p><Strong>Contains:</Strong> Button, Card, Input, Modal, etc.</p>
            <CodeBlock language="css">{componentsLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer pages</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> Page-specific styles and component overrides</p>
            <p><Strong>Contains:</Strong> Page layouts, contextual component tweaks</p>
            <CodeBlock language="css">{pagesLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer component-overrides</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> Component modifiers that need to override variant styles</p>
            <p><Strong>Contains:</Strong> Modifier classes like bold, muted, disabled states</p>
            <p>
              <Strong>Why after pages?</Strong> Placing this layer after <code>pages</code> ensures 
              that granular component behavior (like disabled buttons or active links) always works 
              as intended — even when pages apply custom styling to those components.
            </p>
            <CodeBlock language="css">{componentOverridesLayerExample}</CodeBlock>
          </CardContent>
        </Card>

        <Card className="LayersPage--card">
          <CardHeader>
            <code>@layer user-overrides</code>
          </CardHeader>
          <CardContent>
            <p><Strong>Purpose:</Strong> Last-resort overrides, experiments, third-party fixes</p>
            <p><Strong>Contains:</Strong> A/B test styles, vendor overrides, hotfixes</p>
            <CodeBlock language="css">{userOverridesLayerExample}</CodeBlock>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Key Insight</Text>
        <p>
          With layers, a <Strong>simple selector</Strong> in a higher layer always 
          beats a <Strong>complex selector</Strong> in a lower layer:
        </p>
        <Box className="d-flex-dir-col-gap-3 LayersPage--insight">
          <div className="LayersPage--insightItem">
            <Text variant="body2" tag="code">.Button--root</Text>
            <Text variant="body2" muted>in @layer user-overrides</Text>
            <Text variant="body2" tag="span" className="LayersPage--insightResult LayersPage--insightResult-wins">WINS ✓</Text>
          </div>
          <div className="LayersPage--insightItem">
            <Text variant="body2" tag="code">body main .Card--root .Button--root:hover</Text>
            <Text variant="body2" muted>in @layer components</Text>
            <Text variant="body2" tag="span" className="LayersPage--insightResult LayersPage--insightResult-loses">loses</Text>
          </div>
        </Box>
        <p>
          This makes overriding predictable. No more fighting specificity.
        </p>
      </Section>
    </div>
  );
}
