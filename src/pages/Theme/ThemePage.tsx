import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { useTheme } from '../../context/ThemeContext';
import './ThemePage.css';

const themeCSS = `@layer user-overrides {
  [data-theme="midnight"] {
    --color-bg: #f5f3ff;
    --color-primary: #7c3aed;
    --color-text: #1e1b4b;
    /* ... other token overrides */
  }

  /* Dark variant respects system preference */
  @media (prefers-color-scheme: dark) {
    [data-theme="midnight"] {
      --color-bg: #0f0d1a;
      --color-primary: #a78bfa;
      --color-text: #e8e4f0;
    }
  }
}`;

const componentOverrides = `/* Component-specific overrides within a theme */
[data-theme="bubblegum"] .Button--root {
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

[data-theme="bubblegum"] .Card--root {
  border-width: 2px;
  border-radius: var(--radius-xl);
}`;

const themeContext = `// ThemeContext.tsx
type Theme = 'default' | 'midnight' | 'bubblegum';

const THEMES: Theme[] = ['default', 'midnight', 'bubblegum'];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem('cascadekit-theme') || 'default';
  });

  useEffect(() => {
    // Set data-theme attribute on <html>
    document.documentElement.dataset.theme = 
      theme === 'default' ? '' : theme;
    localStorage.setItem('cascadekit-theme', theme);
  }, [theme]);

  // ...
}`;

const themeUsage = `// Using the theme hook
import { useTheme } from './context/ThemeContext';

function ThemeSwitcher() {
  const { theme, themeLabel, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Current: {themeLabel}
    </Button>
  );
}`;

export function ThemePage() {
  const { themeLabel, toggleTheme } = useTheme();

  return (
    <div className="ThemePage--root">
      <Section>
        <Text variant="h1">Theming</Text>
        <Text>
          CascadeKit themes work through CSS custom properties and the <code>user-overrides</code> layer.
          Themes override design tokens while respecting the cascade — no JavaScript style computation needed.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">How Themes Work</Text>
        <Text>
          A theme is a set of CSS custom property overrides applied via a <code>data-theme</code> attribute
          on the root element. Because themes live in <code>@layer user-overrides</code>, they always win
          over component and page styles.
        </Text>

        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr 1fr' } }}>
          <Card className="ThemePage--principleCard">
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>1. Token Override</Text>
              <Text variant="body2" muted>
                Themes redefine CSS variables like <code>--color-primary</code> and <code>--color-bg</code>.
                All components using these tokens update automatically.
              </Text>
            </CardContent>
          </Card>

          <Card className="ThemePage--principleCard">
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>2. Layer Priority</Text>
              <Text variant="body2" muted>
                Themes use <code>@layer user-overrides</code> — the highest priority layer.
                Theme values always win without specificity tricks.
              </Text>
            </CardContent>
          </Card>

          <Card className="ThemePage--principleCard">
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>3. Dark Mode Support</Text>
              <Text variant="body2" muted>
                Each theme defines light and dark variants using <code>@media (prefers-color-scheme)</code>.
                System preference is respected automatically.
              </Text>
            </CardContent>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Defining a Theme</Text>
        <Text>
          Themes are defined in <code>theme.css</code> using the <code>[data-theme]</code> attribute selector.
          Override any design tokens from <code>base.css</code> to create your theme's look.
        </Text>
        <CodeBlock language="css" filename="styles/theme.css">{themeCSS}</CodeBlock>
        <Text mixin={{ mt: 3 }}>
          <Strong>Key points:</Strong>
        </Text>
        <ul className="ThemePage--list">
          <li>Use <code>[data-theme="name"]</code> selector to scope theme styles</li>
          <li>Override tokens defined in <code>base.css</code> (colors, spacing, shadows, etc.)</li>
          <li>Wrap dark variants in <code>@media (prefers-color-scheme: dark)</code></li>
          <li>Keep everything in <code>@layer user-overrides</code></li>
        </ul>
      </Section>

      <Section>
        <Text variant="h2">Component Overrides</Text>
        <Text>
          Beyond token changes, themes can modify specific component styles.
          Use the theme selector combined with component class names.
        </Text>
        <CodeBlock language="css" filename="styles/theme.css">{componentOverrides}</CodeBlock>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          This approach lets themes change component structure (radius, weight, borders) — not just colors.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Theme Context</Text>
        <Text>
          A React context manages theme state, persistence, and the <code>data-theme</code> attribute.
        </Text>
        <CodeBlock language="tsx" filename="context/ThemeContext.tsx">{themeContext}</CodeBlock>
        <CodeBlock language="tsx" filename="Usage">{themeUsage}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Live Preview</Text>
        <Text>
          Try the current themes. Notice how components adapt to each theme's personality.
        </Text>
        
        <Card variant="subtle" mixin={{ mt: 4, p: 4 }}>
          <Box className="d-flex ali-center jc-sb f-wrap gap-3">
            <Box className="d-flex ali-center gap-3">
              <Text variant="h5">Current Theme:</Text>
              <Badge variant="primary">{themeLabel}</Badge>
            </Box>
            <Button onClick={toggleTheme} variant="primary">
              Switch Theme
            </Button>
          </Box>
        </Card>

        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr' } }}>
          <Card>
            <CardHeader>Sample Card</CardHeader>
            <CardContent>
              <Text variant="body2" muted mixin={{ mb: 3 }}>
                This card uses theme tokens for colors, borders, and shadows.
              </Text>
              <Box className="d-flex gap-2">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Badge Variants</CardHeader>
            <CardContent>
              <Text variant="body2" muted mixin={{ mb: 3 }}>
                Badges adapt to theme colors and may change shape.
              </Text>
              <Box className="d-flex gap-2 f-wrap">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Creating a New Theme</Text>
        <Box className="d-flex dir-col gap-3" mixin={{ mt: 3 }}>
          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>1. Add theme CSS</Text>
              <Text variant="body2" muted>
                Create a new <code>[data-theme="yourtheme"]</code> block in <code>theme.css</code> with
                light and dark variants.
              </Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>2. Register in context</Text>
              <Text variant="body2" muted>
                Add the theme name to the <code>THEMES</code> array and <code>THEME_LABELS</code> map
                in <code>ThemeContext.tsx</code>.
              </Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>3. Optional: Component overrides</Text>
              <Text variant="body2" muted>
                Add component-specific styles using <code>[data-theme="yourtheme"] .Component--root</code>
                selectors for unique component styling.
              </Text>
            </CardContent>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
