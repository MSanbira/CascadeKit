import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Card } from '../../components/Card/Card';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { LayerStack } from '../../components/LayerStack/LayerStack';
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
  /* Component modifiers, mixin styles, scoped styles */
  .Text--bold {
    font-weight: var(--font-weight-bold);
  }

  .Button--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

/* Scoped styles also inject here by default */
@layer component-overrides {
  @scope { :scope { --color-primary: #10b981; } }
}`;

const userOverridesLayerExample = `@layer user-overrides {
  /* Themes override tokens globally */
  [data-theme="midnight"] {
    --color-primary: #7c3aed;
    --color-bg: #0f0d1a;
  }

  /* Emergency fixes, A/B tests */
  .Button--root[data-experiment="new-cta"] {
    background: var(--color-accent);
  }
}`;

export function LayersPage() {
  return (
    <div className="LayersPage--root">
      <Section>
        <Text variant="h1">Layers Explained</Text>
        <Text>
          CSS Cascade Layers (<code>@layer</code>) let you control which styles 
          win when there are conflicts — without resorting to specificity tricks 
          or <code>!important</code>.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Layer Order</Text>
        <Text>
          CascadeKit uses six layers, ordered from lowest to highest priority:
        </Text>
        <CodeBlock language="css" filename="layers.css">
          {layerDefinition}
        </CodeBlock>
        
        <LayerStack mixin={{ my: 6 }} />
      </Section>

      <Section>
        <Text variant="h2">Layer Purposes</Text>
        
        <Card className="LayersPage--card" title={<code>@layer base</code>}>
          <Text><Strong>Purpose:</Strong> CSS reset, design tokens, typography defaults</Text>
          <Text><Strong>Contains:</Strong> Variables, reset styles, element defaults</Text>
          <CodeBlock language="css">{baseLayerExample}</CodeBlock>
        </Card>

        <Card className="LayersPage--card" title={<code>@layer utils</code>}>
          <Text><Strong>Purpose:</Strong> Reusable utility classes</Text>
          <Text><Strong>Contains:</Strong> Layout helpers, visibility, spacing shortcuts</Text>
          <CodeBlock language="css">{utilsLayerExample}</CodeBlock>
        </Card>

        <Card className="LayersPage--card" title={<code>@layer components</code>}>
          <Text><Strong>Purpose:</Strong> Reusable UI components</Text>
          <Text><Strong>Contains:</Strong> Button, Card, Input, Modal, etc.</Text>
          <CodeBlock language="css">{componentsLayerExample}</CodeBlock>
        </Card>

        <Card className="LayersPage--card" title={<code>@layer pages</code>}>
          <Text><Strong>Purpose:</Strong> Page-specific styles and component overrides</Text>
          <Text><Strong>Contains:</Strong> Page layouts, contextual component tweaks</Text>
          <CodeBlock language="css">{pagesLayerExample}</CodeBlock>
        </Card>

        <Card className="LayersPage--card" title={<code>@layer component-overrides</code>}>
          <Text><Strong>Purpose:</Strong> Component modifiers, mixin styles, and scoped styles</Text>
          <Text><Strong>Contains:</Strong> Modifier classes, responsive mixins, per-instance <code>scopedStyle</code> overrides</Text>
          <Text>
            <Strong>Why after pages?</Strong> Ensures granular component behavior (disabled states, 
            scoped overrides) always works — even when pages apply custom styling.
          </Text>
          <CodeBlock language="css">{componentOverridesLayerExample}</CodeBlock>
        </Card>

        <Card className="LayersPage--card" title={<code>@layer user-overrides</code>}>
          <Text><Strong>Purpose:</Strong> Themes, last-resort overrides, experiments</Text>
          <Text><Strong>Contains:</Strong> Theme token overrides via <code>data-theme</code>, A/B tests, hotfixes</Text>
          <CodeBlock language="css">{userOverridesLayerExample}</CodeBlock>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Key Insight</Text>
        <Text>
          With layers, a <Strong>simple selector</Strong> in a higher layer always 
          beats a <Strong>complex selector</Strong> in a lower layer:
        </Text>
        <Box className="d-flex dir-col gap-3 LayersPage--insight">
          <div className="d-flex jc-sb ali-center">
            <Text><code>.Button--root</code> in <code>@layer user-overrides</code></Text>
            <Text variant="body2" tag="span" className="LayersPage--insightResult LayersPage--insightResult-wins">Wins ✓</Text>
          </div>
          <div className="d-flex jc-sb ali-center">
            <Text><code>body main .Card--root .Button--root:hover</code> in <code>@layer components</code></Text>
            <Text variant="body2" tag="span" className="LayersPage--insightResult LayersPage--insightResult-loses">Loses ✗</Text>
          </div>
        </Box>
        <Text>
          This makes overriding predictable. No more fighting specificity.
        </Text>
      </Section>
    </div>
  );
}
