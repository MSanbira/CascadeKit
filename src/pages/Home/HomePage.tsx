import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { LayerStack } from '../../components/LayerStack/LayerStack';
import { HomePagePrinciple } from './HomePagePrinciple';
import {
  componentModelExample,
  layoutUtilsExample,
  mixinExample,
  themingExample,
  scopedStylesExample,
  aiToolsExample,
} from './homePageCodeExamples';
import './HomePage.css';
import { routes } from '../../constants/routes';

export function HomePage() {
  return (
    <div className="HomePage--root">
      <Section className="d-flex ali-center dir-col" scopedStyle={{ '--section-background-color': 'var(--color-bg)' }}>
        <Text variant="h1" alignText="center" bottomMargin>
          CascadeKit
        </Text>
        <Text variant="h2" alignText="center">
          CSS, without the fight.
        </Text>
        <Box className="d-flex gap-4 jc-center f-wrap" mixin={{ my: 6 }}>
          <Button size="lg" href={routes.how}>Cut the fluff and get started</Button>
        </Box>
        <Text variant="body1" alignText="center" className="HomePage--pitch" isPretty>
          CSS-in-JS gave us co-location but added runtime. Utility-first gave us consistency but cluttered markup.
          CascadeKit gives you both — predictable cascade via native @layer, styles that tree-shake with your components,
          and zero runtime cost. Just CSS.
        </Text>
      </Section>

      <Section scopedStyle={{ '--section-background-color': 'var(--color-surface)' }}>
        <Text variant="h2" alignText="center" mixin={{ mb: 4 }}>Core Principles</Text>
        <Box className="d-flex dir-col gap-3">
          <HomePagePrinciple
            number="1"
            title="Ordered Cascade Layers"
            description={<>All CSS lives in <code>@layer</code> blocks with a defined order. Later layers override earlier ones — no specificity wars.</>}
          />
          <HomePagePrinciple
            number="2"
            title="Unified Design Tokens"
            description={<>Colors, spacing, typography defined once in <code>base.css</code>. Every component references the same <code>var(--token)</code> values.</>}
          />
          <HomePagePrinciple
            number="3"
            title="CSS Classes, Not Inline Styles"
            description="Styling happens in CSS files via classes. Utilities and mixins generate classes — keeping styles in the cascade, not on elements."
          />
          <HomePagePrinciple
            number="4"
            title="Co-located Component CSS"
            description="Each component imports its own CSS file. Tree-shaking means unused components = unused CSS. Delete a component, delete its CSS."
          />
          <HomePagePrinciple
            number="5"
            title="Consistent Class Naming"
            description={<>All classes follow <code>ComponentName--element</code> convention. Readable in DevTools, greppable in code, no generated hashes.</>}
          />
        </Box>
      </Section>

      <Section className="HomePage--feature HomePage--feature-stacked" scopedStyle={{ '--section-background-color': 'var(--color-bg)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Cascade Layers</Text>
          <Text muted>
            Six ordered layers replace specificity wars. Components always override base styles,
            pages override components, and user overrides always win — predictably.
          </Text>
          <Button variant="secondary" size="sm" href={routes.layers} className="HomePage--feature-link">Layers explained →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <LayerStack />
        </div>
      </Section>

      <Section className="HomePage--feature HomePage--feature-reverse" scopedStyle={{ '--section-background-color': 'var(--color-surface)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Component Model</Text>
          <Text muted>
            Each component owns its styles in a co-located CSS file. Tree-shaking means
            unused components = unused CSS. Delete a folder, delete everything.
          </Text>
          <Button variant="secondary" size="sm" href={routes.components} className="HomePage--feature-link">Component model →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="text">{componentModelExample}</CodeBlock>
        </div>
      </Section>

      <Section className="HomePage--feature" scopedStyle={{ '--section-background-color': 'var(--color-bg)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Layout Utilities</Text>
          <Text muted>
            Composable utility classes for flex, grid, alignment, and gaps —
            all in the <code>utils</code> layer with low specificity via <code>:where()</code>.
          </Text>
          <Button variant="secondary" size="sm" href={routes.layoutUtils} className="HomePage--feature-link">Layout utilities →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{layoutUtilsExample}</CodeBlock>
        </div>
      </Section>

      <Section className="HomePage--feature HomePage--feature-reverse" scopedStyle={{ '--section-background-color': 'var(--color-surface)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Mixin System</Text>
          <Text muted>
            Responsive, per-component spacing and layout — without inline styles.
            Mixins generate classes in the <code>component-overrides</code> layer.
          </Text>
          <Button variant="secondary" size="sm" href={routes.mixin} className="HomePage--feature-link">Mixin system →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{mixinExample}</CodeBlock>
        </div>
      </Section>

      <Section className="HomePage--feature" scopedStyle={{ '--section-background-color': 'var(--color-bg)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Theming</Text>
          <Text muted>
            Swap design tokens globally via <code>data-theme</code> attributes.
            Themes live in the <code>user-overrides</code> layer — they always win.
          </Text>
          <Button variant="secondary" size="sm" href={routes.theme} className="HomePage--feature-link">Theming →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="css">{themingExample}</CodeBlock>
        </div>
      </Section>

      <Section className="HomePage--feature HomePage--feature-reverse" scopedStyle={{ '--section-background-color': 'var(--color-surface)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Scoped Styles</Text>
          <Text muted>
            Per-instance overrides using native CSS <code>@scope</code>.
            Dynamic values stay in the cascade — never inline.
          </Text>
          <Button variant="secondary" size="sm" href={routes.scopedStyles} className="HomePage--feature-link">Scoped styles →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{scopedStylesExample}</CodeBlock>
        </div>
      </Section>

      <Section className="HomePage--feature" scopedStyle={{ '--section-background-color': 'var(--color-bg)' }}>
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>AI-Integrated Tooling</Text>
          <Text muted>
            An MCP server and prompt guide teach AI assistants the CascadeKit conventions.
            Generate components, look up tokens, and follow the architecture automatically.
          </Text>
          <Button variant="secondary" size="sm" href={routes.aiTools} className="HomePage--feature-link">AI tools →</Button>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="json">{aiToolsExample}</CodeBlock>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background-color': 'var(--color-surface)' }}>
        <Text variant="h2" alignText="center" mixin={{ mb: 4 }}>Why CascadeKit?</Text>
        <Box className="d-flex ali-center dir-col">
          <Box className="d-grid gap-4 HomePage--why-grid">
            <div className="HomePage--why-item">
              <Strong>Zero Runtime</Strong>
              <Text variant="body2" muted>Native CSS only — no JS overhead</Text>
            </div>
            <div className="HomePage--why-item">
              <Strong>Predictable Cascade</Strong>
              <Text variant="body2" muted>Layers define who wins, always</Text>
            </div>
            <div className="HomePage--why-item">
              <Strong>Debuggable</Strong>
              <Text variant="body2" muted>Real class names in DevTools</Text>
            </div>
            <div className="HomePage--why-item">
              <Strong>Tree-shakeable</Strong>
              <Text variant="body2" muted>Unused CSS never ships</Text>
            </div>
            <div className="HomePage--why-item">
              <Strong>SSR-friendly</Strong>
              <Text variant="body2" muted>No hydration issues</Text>
            </div>
            <div className="HomePage--why-item">
              <Strong>Future-proof</Strong>
              <Text variant="body2" muted>Native features browsers already support</Text>
            </div>
          </Box>
          <Button variant="secondary" href={routes.why} mixin={{ mt: 6 }}>Learn more about the philosophy →</Button>
        </Box>
      </Section>
    </div>
  );
}
