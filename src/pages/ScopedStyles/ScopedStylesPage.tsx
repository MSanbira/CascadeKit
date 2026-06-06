import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Card } from '../../components/Card/Card';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Badge } from '../../components/Badge/Badge';
import { useCaniuse } from '../../hooks/useCaniuse';
import {
  basicUsage,
  nestedSelectors,
  generatedCSS,
  backendExample,
  customLayerExample,
} from './scopedStylesPageContent';
import './ScopedStylesPage.css';

const STATUS_VARIANT = {
  y: 'success',
  a: 'warning',
  p: 'secondary',
  n: 'error',
  u: 'secondary',
} as const;

export function ScopedStylesPage() {
  const { browsers, loading, error } = useCaniuse('css-cascade-scope');

  return (
    <div className="ScopedStylesPage--root Section--sections-wrapper">
      <Section>
        <Text variant="h1" bottomMargin>Scoped Styles</Text>
        <Text>
          Per-instance style overrides using CSS <code>@scope</code> — for extreme customizations 
          and dynamic values that can't be handled by design tokens or themes alone.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="whenToUse">When to Use</Text>
        <Text>
          Scoped styles are designed for edge cases where you need per-instance control:
        </Text>

        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr' } }}>
          <Card variant="subtle">
            <Text variant="h6" bottomMargin>Backend/User Inputs</Text>
            <Text variant="body2">
              User-selected brand colors, custom themes from a CMS, or any dynamic values 
              that aren't known at build time.
            </Text>
          </Card>

          <Card variant="subtle">
            <Text variant="h6" bottomMargin>Extreme Customizations</Text>
            <Text variant="body2">
              One-off styling that doesn't fit into your design system — promotional cards, 
              special states, or highly specific UI requirements.
            </Text>
          </Card>

          <Card variant="subtle">
            <Text variant="h6" bottomMargin>Prototype & Experimentation</Text>
            <Text variant="body2">
              Quick iteration on styles without creating new CSS classes or modifying 
              component stylesheets.
            </Text>
          </Card>

          <Card variant="subtle">
            <Text variant="h6" bottomMargin>Third-party Integration</Text>
            <Text variant="body2">
              Styling components to match external brand guidelines or embedded widgets 
              with specific color requirements.
            </Text>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="howToUse">How to Use</Text>
        
        <Text variant="h4" mixin={{ mt: 4, mb: 2 }}>Basic Usage</Text>
        <Text>
          Pass a <code>scopedStyle</code> prop with CSS custom properties and/or regular CSS properties:
        </Text>
        <CodeBlock language="tsx" mixin={{ mt: 3 }}>{basicUsage}</CodeBlock>

        <Text variant="h4" mixin={{ mt: 5, mb: 2 }}>Nested Selectors</Text>
        <Text>
          Use CSS nesting with <code>&</code> for pseudo-selectors and <code>@media</code> for responsive styles:
        </Text>
        <CodeBlock language="tsx" mixin={{ mt: 3 }}>{nestedSelectors}</CodeBlock>

        <Text variant="h4" mixin={{ mt: 5, mb: 2 }}>Dynamic Values</Text>
        <Text>
          Perfect for values from your backend or user preferences:
        </Text>
        <CodeBlock language="tsx" mixin={{ mt: 3 }}>{backendExample}</CodeBlock>

        <Text variant="h4" mixin={{ mt: 5, mb: 2 }}>Custom Layer</Text>
        <Text>
          By default, scoped styles are placed in <code>component-overrides</code>. If you need higher 
          or lower priority in the cascade, use the <code>scopedLayer</code> prop:
        </Text>
        <CodeBlock language="tsx" mixin={{ mt: 3 }}>{customLayerExample}</CodeBlock>
        <Card variant="subtle" mixin={{ mt: 3 }}>
          <Text variant="body2" muted>
            <Strong>Example:</Strong> User-selected colors from a settings page should use 
            <code>user-overrides</code> layer to ensure they always win over component and theme styles.
          </Text>
        </Card>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="whyScopeOverInlineStyles">Why @scope Over Inline Styles?</Text>
        <Text>
          CascadeKit uses CSS <code>@scope</code> instead of inline styles for important reasons:
        </Text>

        <Box mixin={{ mt: 4 }}>
          <Card variant="subtle" mixin={{ mb: 3 }}>
            <Text variant="h6" bottomMargin>Cascade Respect</Text>
            <Text variant="body2">
              Inline styles have the highest specificity and can only be overridden with <code>!important</code>. 
              Scoped styles live in <code>@layer component-overrides</code>, so <code>user-overrides</code> layer 
              naturally wins without specificity hacks. The cascade stays predictable.
            </Text>
          </Card>

          <Card variant="subtle" mixin={{ mb: 3 }}>
            <Text variant="h6" bottomMargin>Full CSS Selector Support</Text>
            <Text variant="body2">
              Inline styles can't use selectors at all. With <code>@scope</code>, you get <code>&:hover</code>, 
              <code>@media</code> queries, and can target children like <code>.Card--header</code> — 
              all with native CSS nesting.
            </Text>
          </Card>

          <Card variant="subtle" mixin={{ mb: 3 }}>
            <Text variant="h6" bottomMargin>Token Inheritance</Text>
            <Text variant="body2">
              When you override <code>--color-primary</code> on a Card, all children (Buttons, Badges) 
              automatically inherit it. Inline styles would require passing the value to every child.
            </Text>
          </Card>

          <Card variant="subtle">
            <Text variant="h6" bottomMargin>DevTools Experience</Text>
            <Text variant="body2">
              Scoped styles appear as proper CSS rules in DevTools with clear layer information, 
              making debugging easier than hunting through inline style attributes.
            </Text>
          </Card>
        </Box>

        <Text variant="h4" mixin={{ mt: 5, mb: 2 }}>Generated CSS</Text>
        <Text>
          Here's what the <code>scopedStyle</code> prop generates:
        </Text>
        <CodeBlock language="css" mixin={{ mt: 3 }}>{generatedCSS}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="liveExample">Live Example</Text>
        <Text>
          Compare the default card with scoped style overrides:
        </Text>

        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr 1fr' } }}>
          <Card title="Default">
            <Text variant="body2" muted>No scoped styles applied.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>

          <Card title="Pink Theme" scopedStyle={{
            '--color-primary': '#ec4899',
            '--color-border': '#ec4899',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)'
            }
          }}>
            <Text variant="body2" muted>Hover for effect!</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>

          <Card title="Teal + Dark Mode" scopedStyle={{
            '--color-primary': '#14b8a6',
            '--color-border': '#14b8a6',
            borderStyle: 'dashed',
            borderWidth: '2px',
            '@media (prefers-color-scheme: dark)': {
              '--color-primary': '#2dd4bf',
              boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)'
            }
          }}>
            <Text variant="body2" muted>Different in dark mode.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="browserSupport">Browser Support</Text>
        <Card variant="subtle" mixin={{ mt: 3 }}>
          <Text variant="body2">
            <Strong>CSS @scope</Strong> browser support data via{' '}
            <a href="https://caniuse.com/css-cascade-scope" target="_blank" rel="noopener noreferrer">caniuse.com</a>.
          </Text>
          <Text variant="body2" muted mixin={{ mt: 2 }}>
            For production apps targeting older browsers, consider using this feature progressively — 
            the base styles will still apply, only the scoped overrides won't work. Alternatively, 
            you can use a PostCSS plugin to transform <code>@scope</code> to equivalent selectors.
          </Text>
          <Box mixin={{ mt: 3 }}>
            {loading && <Text variant="body2" muted>Loading browser support data…</Text>}
            {error && <Text variant="body2" muted>Could not load live data.</Text>}
            {!loading && !error && browsers.map(browser => (
              <Badge
                key={browser.name}
                variant={STATUS_VARIANT[browser.status]}
                mixin={{ mr: 1, mb: 1 }}
              >
                {browser.name}{browser.version ? ` ${browser.version}+` : browser.status === 'p' ? ' (flag)' : ' ✗'}
              </Badge>
            ))}
          </Box>
        </Card>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="bestPractices">Best Practices</Text>
        <ul className="ScopedStylesPage--list">
          <li>
            <Strong>Prefer design tokens</Strong> — Override <code>--color-primary</code> instead of 
            hardcoding <code>backgroundColor</code>. Children will inherit automatically.
          </li>
          <li>
            <Strong>Don't overuse</Strong> — If you're applying the same scoped styles repeatedly, 
            consider creating a component variant or theme instead.
          </li>
          <li>
            <Strong>Use for dynamic values</Strong> — Perfect for user-selected colors or CMS-driven styling 
            that can't be predetermined.
          </li>
          <li>
            <Strong>Combine with mixin</Strong> — Use <code>mixin</code> for spacing/layout and 
            <code>scopedStyle</code> for visual overrides.
          </li>
        </ul>
      </Section>
    </div>
  );
}
