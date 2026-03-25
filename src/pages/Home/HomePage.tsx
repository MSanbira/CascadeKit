import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card, CardContent } from '../../components/Card';
import { CodeBlock } from '../../components/CodeBlock';
import { Text } from '../../components/Text';
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="HomePage--root">
      <Section className='d-flex-ali-center-dir-col' mixin={{ py: 8 }}>
          <Badge mixin={{ mb: 4 }}>CSS Architecture</Badge>
          <Text variant="h1" alignText='center'>
            CascadeKit
          </Text>
          <Text variant="h5" tag="p" alignText='center' muted className="HomePage--tagline" mixin={{ mb: 8 }}>
            A holistic CSS system built on native cascade layers, unified design tokens, 
            and co-located styles. No inline styles, no runtime — just CSS that scales.
          </Text>
          <Box className="d-flex-gap-4-jc-center-f-wrap">
            <Link to="/how">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/example">
              <Button variant="secondary" size="lg">View Examples</Button>
            </Link>
          </Box>
      </Section>

      <Section>
        <Text variant="h2">Core Principles</Text>

        <Box className="d-flex-dir-col-gap-3" mixin={{ mt: 4 }}>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">1</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>Ordered Cascade Layers</Text>
              <Text variant="body2" muted>
                All CSS lives in <code>@layer</code> blocks with a defined order. 
                Later layers override earlier ones — no specificity wars.
              </Text>
            </div>
          </div>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">2</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>Unified Design Tokens</Text>
              <Text variant="body2" muted>
                Colors, spacing, typography defined once in <code>base.css</code>. 
                Every component references the same <code>var(--token)</code> values.
              </Text>
            </div>
          </div>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">3</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>CSS Classes, Not Inline Styles</Text>
              <Text variant="body2" muted>
                Styling happens in CSS files via classes. Utilities and mixins 
                generate classes — keeping styles in the cascade, not on elements.
              </Text>
            </div>
          </div>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">4</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>Co-located Component CSS</Text>
              <Text variant="body2" muted>
                Each component imports its own CSS file. Styles travel with 
                components through the module graph. Delete a component, delete its CSS.
              </Text>
            </div>
          </div>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">5</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>Consistent Class Naming</Text>
              <Text variant="body2" muted>
                All classes follow <code>ComponentName--element</code> convention. 
                Readable in DevTools, greppable in code, no generated hashes.
              </Text>
            </div>
          </div>
          <div className="HomePage--principle">
            <Text variant="h6" className="HomePage--principleNumber">6</Text>
            <div>
              <Text variant="h6" mixin={{ mb: 1 }}>Utility Classes for Recurring Patterns</Text>
              <Text variant="body2" muted>
                Common layout patterns (flex, grid, gaps) live in a <code>utils</code> layer. 
                Composable classes that don't bloat component CSS.
              </Text>
            </div>
          </div>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">The Layer Stack</Text>
        <p>
          Layers are declared once and define the cascade order. Each layer has a clear purpose:
        </p>

        <CodeBlock language="css">{`@layer base, utils, components, pages, component-overrides, user-overrides;`}</CodeBlock>

        <Box className="d-flex-dir-col-gap-1" mixin={{ mt: 4 }}>
          <div className="HomePage--layer HomePage--layer--base">
            <Text variant="h6">base</Text>
            <Text variant="body2" muted>Design tokens, resets, typography defaults</Text>
          </div>
          <div className="HomePage--layer HomePage--layer--utils">
            <Text variant="h6">utils</Text>
            <Text variant="body2" muted>Layout utilities, spacing helpers</Text>
          </div>
          <div className="HomePage--layer HomePage--layer--components">
            <Text variant="h6">components</Text>
            <Text variant="body2" muted>Button, Card, Text — all component styles</Text>
          </div>
          <div className="HomePage--layer HomePage--layer--pages">
            <Text variant="h6">pages</Text>
            <Text variant="body2" muted>Page-specific layouts and overrides</Text>
          </div>
          <div className="HomePage--layer HomePage--layer--component-overrides">
            <Text variant="h6">component-overrides</Text>
            <Text variant="body2" muted>Component variant overrides, state modifiers</Text>
          </div>
          <div className="HomePage--layer HomePage--layer--user-overrides">
            <Text variant="h6">user-overrides</Text>
            <Text variant="body2" muted>Final user customizations, theme adjustments</Text>
          </div>
        </Box>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          ↑ Higher layers always win, regardless of selector specificity.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">File Structure</Text>
        <p>
          Components are self-contained: a TSX file imports its CSS file. 
          Global styles live in <code>src/styles/</code>.
        </p>

        <CodeBlock language="text">{`src/
├── styles/
│   ├── layers.css      # @layer order declaration
│   ├── base.css        # Design tokens & resets
│   ├── utils.css       # General utilities
│   └── layoutUtils.css # Flex, grid, gap utilities
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx  # import './Button.css'
│   │   └── Button.css  # @layer components { .Button--root { } }
│   └── Card/
│       ├── Card.tsx
│       └── Card.css
│
└── pages/
    └── Home/
        ├── HomePage.tsx
        └── HomePage.css  # @layer pages { .HomePage--root { } }`}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Example Patterns</Text>
        <p>
          This repo includes two patterns that demonstrate how to build tools within the layer system. 
          Adopt them as-is or expand them for your needs — both work through CSS classes, not inline styles.
        </p>

        <Box className="d-grid-gap-4" mixin={{ mt: 4, smallContainer: { gridColTemplate: '1fr' }, mediumContainer: { gridColTemplate: '1fr 1fr' } }}>
          <Card className="d-flex-dir-col">
            <CardContent>
              <Text variant="h5" tag="h3" mixin={{ mb: 1 }}>Layout Utilities</Text>
              <Text variant="body2" muted mixin={{ mb: 2 }}>
                Example utility classes in the <code>utils</code> layer for flex, grid, 
                alignment, and gaps. Shows how to handle recurring layout patterns.
              </Text>
              <CodeBlock language="tsx">{`<div className="d-flex-gap-2-ali-center">
  ...
</div>`}</CodeBlock>
              <Link to="/layout-utils" className="mt-auto" style={{ paddingBlockStart: 'var(--space-3)' }}>
                <Button variant="ghost" size="sm">Layout utilities →</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="d-flex-dir-col">
            <CardContent>
              <Text variant="h5" tag="h3" mixin={{ mb: 1 }}>Mixin System</Text>
              <Text variant="body2" muted mixin={{ mb: 2 }}>
                Example pattern for per-component responsive styling. 
                Shows how to handle breakpoints and container queries dynamically.
              </Text>
              <CodeBlock language="tsx">{`<Box mixin={{ 
  p: 2, 
  smallScreen: { p: 1 } 
}}>...</Box>`}</CodeBlock>
              <Link to="/mixin" className="mt-auto" style={{ paddingBlockStart: 'var(--space-3)' }}>
                <Button variant="ghost" size="sm">Mixin system →</Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          Both patterns can be combined — use utilities for static layout, mixins for responsive behavior.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Why CascadeKit?</Text>
        <ul>
          <li><strong>Zero Runtime</strong> — Native CSS, no JavaScript overhead</li>
          <li><strong>Predictable Cascade</strong> — Layers eliminate specificity conflicts</li>
          <li><strong>Debuggable</strong> — Real class names, visible in DevTools</li>
          <li><strong>Tree-shakeable</strong> — Unused component CSS never ships</li>
          <li><strong>Future-proof</strong> — Uses native CSS features that browsers already support</li>
        </ul>
        <Box mixin={{ mt: 6 }}>
          <Link to="/why">
            <Button variant="ghost">Learn more about the philosophy →</Button>
          </Link>
        </Box>
      </Section>
    </div>
  );
}
