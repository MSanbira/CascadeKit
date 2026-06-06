import { Section } from '../../components/Section/Section';
import { Button } from '../../components/Button/Button';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Text } from '../../components/Text/Text';
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
  baseUiExample,
} from './homePageCodeExamples';
import './HomePage.css';
import { routes } from '../../constants/routes';
import { MainIcon } from '../../components/Icons/Icons';
import { HomePageWhySection } from './HomePageWhySection';

export function HomePage() {
  return (
    <div className="HomePage--root">
      <Section
        className="d-flex ali-center dir-col"
        scopedStyle={{ '--section-background': 'var(--color-section-bg-dotted-gradient)', '--section-border': 'var(--color-section-border-medium)' }}
      >
        <Box className="d-flex jc-center">
          <MainIcon />
        </Box>
        <Text variant="h3" tag="h1" alignText="center">
          CascadeKit
        </Text>
        <Text variant="main-header" tag="h2" alignText="center" className='Section--full-width'>
          CSS, without the fight.
        </Text>
        <Box className="d-flex gap-4 jc-center f-wrap" mixin={{ my: 6 }}>
          <Button size="lg" href={routes.how}>Cut the fluff and get started</Button>
        </Box>
        <Text variant="body1" alignText="center" className="HomePage--pitch" isPretty>
          CSS-in-JS gave us co-location but added runtime. Utility-first gave us consistency but cluttered markup.
          CascadeKit gives you both: predictable cascade via native @layer, and styles that tree-shake with your components,
          and zero runtime cost. Just CSS.
        </Text>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-section-bg-light)' }}>
        <Text variant="h2" alignText="center" mixin={{ mb: 4 }}>Core principles</Text>
        <div className="HomePage--principles d-flex gap-3 f-wrap jc-center ali-stretch Section--full-width">
          <HomePagePrinciple
            title="Ordered Cascade Layers"
            description="All CSS lives in layer blocks with a defined order. Later layers override earlier ones, no specificity wars."
          />
          <HomePagePrinciple
            title="Unified Design Tokens"
            description="Colors, spacing, typography defined once in a base file. Every component references the same CSS token values."
          />
          <HomePagePrinciple
            title="CSS Classes, Not Inline Styles"
            description="Styling happens in CSS files via classes. Utilities and mixins generate classes — keeping styles in the cascade, not on elements."
          />
          <HomePagePrinciple
            title="Co-located Component CSS"
            description="Each component imports its own CSS file. Tree-shaking means unused components = unused CSS. Delete a component, delete its CSS."
          />
          <HomePagePrinciple
            title="Consistent Class Naming"
            description="All classes follow 'ComponentName--element' convention. Readable in DevTools, greppable in code, no generated hashes."
          />
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-section-bg-dark)' }}>
        <div className='HomePage--feature Section--full-width HomePage--layers-feature'>
          <div className="HomePage--feature-text">
            <Text variant="h2" bottomMargin color="on-dark-subtle">Cascade layers</Text>
            <Text color="on-dark-subtle" isPretty>
              Six ordered layers replace specificity wars. Components always override base styles,
              pages override components, and user overrides always win predictably.
            </Text>
            <Button href={routes.layers} variant="outline-on-dark" mixin={{ mt: 4 }}>Layers explained →</Button>
          </div>
          <LayerStack className="HomePage--feature-visual" />
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <div className='HomePage--feature HomePage--feature-reverse'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Component Model</Text>
            <Text>
              Each component owns its styles in a co-located CSS file. Tree-shaking means
              unused components = unused CSS. Delete a folder, delete everything.
            </Text>
            <Button variant="secondary" size="sm" href={routes.components} className="HomePage--feature-link">Component model →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="text">{componentModelExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <div className='HomePage--feature'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Layout Utilities</Text>
            <Text >
              Composable utility classes for flex, grid, alignment, and gaps —
              all in the <code>utils</code> layer with low specificity via <code>:where()</code>.
            </Text>
            <Button variant="secondary" size="sm" href={routes.layoutUtils} className="HomePage--feature-link">Layout utilities →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="tsx">{layoutUtilsExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <div className='HomePage--feature HomePage--feature-reverse'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Mixin System</Text>
            <Text>
              Responsive, per-component spacing and layout — without inline styles.
              Mixins generate classes in the <code>component-overrides</code> layer.
            </Text>
            <Button variant="secondary" size="sm" href={routes.mixin} className="HomePage--feature-link">Mixin system →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="tsx">{mixinExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <div className='HomePage--feature'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Theming</Text>
            <Text>
              Swap design tokens globally via <code>data-theme</code> attributes.
              Themes live in the <code>user-overrides</code> layer — they always win.
            </Text>
            <Button variant="secondary" size="sm" href={routes.theme} className="HomePage--feature-link">Theming →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="css">{themingExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <div className='HomePage--feature HomePage--feature-reverse'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Scoped Styles</Text>
            <Text>
              Per-instance overrides using native CSS <code>@scope</code>.
              Dynamic values stay in the cascade — never inline.
            </Text>
            <Button variant="secondary" size="sm" href={routes.scopedStyles} className="HomePage--feature-link">Scoped styles →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="tsx">{scopedStylesExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <div className='HomePage--feature'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>AI-Integrated Tooling</Text>
            <Text>
              An MCP server and prompt guide teach AI assistants the CascadeKit conventions.
              Generate components, look up tokens, and follow the architecture automatically.
            </Text>
            <Button variant="secondary" size="sm" href={routes.aiTools} className="HomePage--feature-link">AI tools →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="json">{aiToolsExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <div className='HomePage--feature HomePage--feature-reverse'>
          <div className="HomePage--feature-text">
            <Text variant="h3" bottomMargin>Base UI Integration</Text>
            <Text>
              Pair CascadeKit with <a href="https://base-ui.com" target="_blank" rel="noreferrer">Base UI</a> for
              accessible behavior. Base UI brings focus management and state via <code>data-*</code> attributes;
              CascadeKit styles them in the cascade. No styling runtime in between.
            </Text>
            <Button variant="secondary" size="sm" href={routes.baseUi} className="HomePage--feature-link">Base UI integration →</Button>
          </div>
          <div className="HomePage--feature-visual">
            <CodeBlock language="tsx">{baseUiExample}</CodeBlock>
          </div>
        </div>
      </Section>

      <HomePageWhySection />
    </div>
  );
}
