import { Link } from 'react-router-dom';
import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { LayerStack } from '../../components/LayerStack/LayerStack';
import { HomePagePrinciple } from './HomePagePrinciple';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="HomePage--root">
      {/* Hero */}
      <Section className="d-flex ali-center dir-col" mixin={{ py: 3 }}>
        <Text variant="h1" alignText="center">
          CascadeKit
        </Text>
        <Text variant="h5" tag="p" alignText="center" muted className="HomePage--tagline" mixin={{ mb: 8 }} isPretty>
          A CSS architecture built on native cascade layers.
          <br />No runtime. No inline styles. Just CSS that scales.
        </Text>
        <Box className="d-flex gap-4 jc-center f-wrap">
          <Link to="/how">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="/example">
            <Button variant="secondary" size="lg">Live Example</Button>
          </Link>
        </Box>
      </Section>

      {/* Pitch */}
      <Section>
        <Text variant="body1" alignText="center" className="HomePage--pitch" isPretty>
          Modern browsers support <code>@layer</code>, CSS variables, and container queries natively.
          CascadeKit is an architecture that uses these features directly — giving you predictable
          overrides, co-located styles, and zero runtime cost.
        </Text>
      </Section>

      {/* Core Principles */}
      <Section>
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

      {/* Feature: Cascade Layers */}
      <Section className="HomePage--feature HomePage--feature-stacked">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Cascade Layers</Text>
          <Text muted>
            Six ordered layers replace specificity wars. Components always override base styles,
            pages override components, and user overrides always win — predictably.
          </Text>
          <Link to="/layers" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Layers explained →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <LayerStack />
        </div>
      </Section>

      {/* Feature: Component Model */}
      <Section className="HomePage--feature HomePage--feature-reverse">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Component Model</Text>
          <Text muted>
            Each component owns its styles in a co-located CSS file. Tree-shaking means
            unused components = unused CSS. Delete a folder, delete everything.
          </Text>
          <Link to="/components" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Component model →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="text">{`/Button
  Button.tsx   ← import './Button.css'
  Button.css   ← @layer components { }
  index.ts     ← public export`}</CodeBlock>
        </div>
      </Section>

      {/* Feature: Layout Utilities */}
      <Section className="HomePage--feature">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Layout Utilities</Text>
          <Text muted>
            Composable utility classes for flex, grid, alignment, and gaps —
            all in the <code>utils</code> layer with low specificity via <code>:where()</code>.
          </Text>
          <Link to="/layout-utils" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Layout utilities →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{`<div className="d-flex gap-2 ali-center jc-sb">
  <Badge>Status</Badge>
  <Button variant="ghost" size="sm">Edit</Button>
</div>`}</CodeBlock>
        </div>
      </Section>

      {/* Feature: Mixin System */}
      <Section className="HomePage--feature HomePage--feature-reverse">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Mixin System</Text>
          <Text muted>
            Responsive, per-component spacing and layout — without inline styles.
            Mixins generate classes in the <code>component-overrides</code> layer.
          </Text>
          <Link to="/mixin" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Mixin system →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{`<Card mixin={{
  p: 4,
  gap: 2,
  smallScreen: { p: 2 },
  bigScreen: { gridColTemplate: '1fr 1fr' }
}}>
  ...
</Card>`}</CodeBlock>
        </div>
      </Section>

      {/* Feature: Theming */}
      <Section className="HomePage--feature">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Theming</Text>
          <Text muted>
            Swap design tokens globally via <code>data-theme</code> attributes.
            Themes live in the <code>user-overrides</code> layer — they always win.
          </Text>
          <Link to="/theme" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Theming →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="css">{`@layer user-overrides {
  [data-theme="midnight"] {
    --color-primary: #7c3aed;
    --color-bg: #0f0d1a;
    --color-surface: #1a1730;
  }
}`}</CodeBlock>
        </div>
      </Section>

      {/* Feature: Scoped Styles */}
      <Section className="HomePage--feature HomePage--feature-reverse">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>Scoped Styles</Text>
          <Text muted>
            Per-instance overrides using native CSS <code>@scope</code>.
            Dynamic values stay in the cascade — never inline.
          </Text>
          <Link to="/scoped-styles" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">Scoped styles →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="tsx">{`<Card scopedStyle={{
  '--color-primary': userColor,
  '--color-surface': userBg,
}}>
  Fully custom card instance
</Card>`}</CodeBlock>
        </div>
      </Section>

      {/* Feature: AI Tools */}
      <Section className="HomePage--feature">
        <div className="HomePage--feature-text">
          <Text variant="h3" mixin={{ mb: 2 }}>AI-Integrated Tooling</Text>
          <Text muted>
            An MCP server and prompt guide teach AI assistants the CascadeKit conventions.
            Generate components, look up tokens, and follow the architecture automatically.
          </Text>
          <Link to="/ai-tools" className="HomePage--feature-link">
            <Button variant="secondary" size="sm">AI tools →</Button>
          </Link>
        </div>
        <div className="HomePage--feature-visual">
          <CodeBlock language="json">{`{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`}</CodeBlock>
        </div>
      </Section>

      {/* Why CascadeKit — compact closer */}
      <Section className="d-flex ali-center dir-col">
        <Text variant="h2" alignText="center" mixin={{ mb: 4 }}>Why CascadeKit?</Text>
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
        <Box mixin={{ mt: 6 }}>
          <Link to="/why">
            <Button variant="secondary">Learn more about the philosophy →</Button>
          </Link>
        </Box>
      </Section>
    </div>
  );
}
