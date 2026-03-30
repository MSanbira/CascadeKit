import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Button } from '../../components/Button';
import './MixinPage.css';
import { Box } from '../../components/Box';

const mixinTypeExample = `interface MixinProps {
  // Margin
  m?: number | string;   // all sides
  mt?: number | string;  // top
  mr?: number | string;  // right
  mb?: number | string;  // bottom
  ml?: number | string;  // left
  mx?: number | string;  // horizontal (left + right)
  my?: number | string;  // vertical (top + bottom)
  
  // Padding (same pattern as margin)
  p?, pt?, pr?, pb?, pl?, px?, py?
  
  // Layout
  display?: 'block' | 'flex' | 'grid' | 'none' | ...
  position?: 'relative' | 'absolute' | 'fixed' | ...
  opacity?: number;
  
  // Inset (for positioned elements)
  inset?, top?, right?, bottom?, left?
  
  // Responsive breakpoints
  smallScreen?: MixinBaseProps;
  mediumScreen?: MixinBaseProps;
  bigScreen?: MixinBaseProps;
  
  // Container queries
  smallContainer?: MixinBaseProps;
  mediumContainer?: MixinBaseProps;
  bigContainer?: MixinBaseProps;
}`;

const basicUsageExample = `<Text mixin={{ mb: 2, px: 1 }}>
  Spacing with base units
</Text>

<Text mixin={{ mb: '16px', px: '8px' }}>
  Spacing with raw CSS values
</Text>`;

const responsiveExample = `<Text 
  mixin={{ 
    mb: 2,
    smallScreen: { mb: 4 },
    bigScreen: { mb: 1 }
  }}
>
  Mobile-first responsive margin
</Text>`;

const mobileFirstExample = `// Input:
mixin={{ smallScreen: { mb: 2 } }}

// Mobile-first cascade fills in:
// smallScreen: { mb: 2 }
// mediumScreen: { mb: 2 }  ← auto-filled
// bigScreen: { mb: 2 }     ← auto-filled`;

const outputExample = `// getMixin({ mb: 2, smallScreen: { mb: 4 } })

// Returns:
{
  className: "MixinPage--margin MixinPage--margin-small-screen ...",
  style: {
    "--mixin-margin": "0 calc(var(--base-size) * 2) 0 0",
    "--mixin-margin-small-screen": "0 calc(var(--base-size) * 4) 0 0",
    ...
  }
}`;

const cssLayerExample = `@layer component-overrides {
  .MixinPage--margin { margin: var(--mixin-margin); }
  
  @media (max-width: 639px) {
    .MixinPage--margin-small-screen { 
      margin: var(--mixin-margin-small-screen); 
    }
  }
}`;

const containerExample = `<Text 
  mixin={{ 
    p: 2,
    smallContainer: { p: 1 },
    bigContainer: { p: 4 }
  }}
>
  Padding changes based on container width
</Text>`;

export function MixinPage() {
  return (
    <div className="MixinPage--root container-query">
      <Section>
        <Text variant="h1">Mixin System</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          The mixin system provides a flexible way to apply spacing, layout, and
          responsive styles directly through component props.
        </Text>
        <Card mixin={{ mt: 4 }}>
          <CardHeader>Why Not Just Use Inline Styles?</CardHeader>
          <CardContent>
            <Text variant="body2" mixin={{ mb: 2 }}>
              In CascadeKit, <Strong>every styling tool must respect the layer system</Strong>.
              If we wrote CSS values directly into inline styles, they would bypass the cascade
              entirely — making it impossible for <code>user-overrides</code> to override them.
            </Text>
            <Text variant="body2" mixin={{ mb: 2 }}>
              Instead, the mixin system uses <Strong>CSS custom properties</Strong> (variables)
              combined with <Strong>CSS classes</Strong> that live in the <code>component-overrides</code> layer.
              This preserves the cascade: users can still override mixin-applied styles from higher layers.
            </Text>
            <Text variant="body2">
              <code>mixin={'{{ m: 2 }}'}</code> → sets <code>--mixin-margin</code> variable + adds <code>.MixinPage--margin</code> class
            </Text>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">How It Works</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Components with mixin support accept a <code>mixin</code> prop. This prop
          is processed into CSS classes and custom properties that are applied to
          the element.
        </Text>
        <CodeBlock language="typescript">{outputExample}</CodeBlock>
        <Text variant="body1" mixin={{ mt: 2 }}>
          The CSS classes reference these variables within the <code>component-overrides</code> layer:
        </Text>
        <CodeBlock language="css">{cssLayerExample}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Available Properties</Text>
        <CodeBlock language="typescript">{mixinTypeExample}</CodeBlock>

        <Card mixin={{ mt: 4 }}>
          <CardHeader>Spacing Values</CardHeader>
          <CardContent>
            <Text variant="body2" mixin={{ mb: 1 }}>
              <Strong>Numbers</Strong> are multiplied by <code>--base-size</code> (e.g., <code>2</code> → <code>calc(var(--base-size) * 2)</code>)
            </Text>
            <Text variant="body2">
              <Strong>Strings</Strong> are used as-is (e.g., <code>"16px"</code>, <code>"1rem"</code>)
            </Text>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Basic Usage</Text>
        <CodeBlock language="tsx">{basicUsageExample}</CodeBlock>

        <Box className="d-flex-gap-4" mixin={{ mt: 4 }}>
          <Box className="d-flex-dir-col">
            <Text variant="body2" muted mixin={{ mb: 1 }}>With base units (mb: 2):</Text>
            <Text mixin={{ mb: 2, p: 1 }} className="MixinPage--exampleBox">
              This text has margin-bottom: 2 units
            </Text>
          </Box>

          <Box className="d-flex-dir-col">
            <Text variant="body2" muted mixin={{ mb: 1 }}>With raw values (mb: '24px'):</Text>
            <Text mixin={{ mb: '24px', p: '8px' }} className="MixinPage--exampleBox">
              This text has margin-bottom: 24px
            </Text>
          </Box>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Responsive Breakpoints</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Use <code>smallScreen</code>, <code>mediumScreen</code>, and <code>bigScreen</code> to
          apply different values at different viewport sizes.
        </Text>
        <CodeBlock language="tsx">{responsiveExample}</CodeBlock>

        <Card mixin={{ mt: 4 }}>
          <CardHeader>Breakpoint Ranges</CardHeader>
          <CardContent>
            <Text variant="body2" mixin={{ mb: 1 }}><code>smallScreen</code>: max-width: 639px</Text>
            <Text variant="body2" mixin={{ mb: 1 }}><code>mediumScreen</code>: 640px – 1023px</Text>
            <Text variant="body2"><code>bigScreen</code>: min-width: 1024px</Text>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Mobile-First Cascade</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          The mixin system automatically cascades values from smaller to larger breakpoints.
          If you set a value for <code>smallScreen</code> but not <code>mediumScreen</code>,
          the small screen value will be used for medium screens too.
        </Text>
        <CodeBlock language="typescript">{mobileFirstExample}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Container Queries</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Use <code>smallContainer</code>, <code>mediumContainer</code>, and <code>bigContainer</code> for
          styles based on the container size rather than viewport.
        </Text>
        <Text variant="body2" muted mixin={{ mb: 2 }}>
          <Strong>Note:</Strong> Container queries require the parent element to have <code>container-type: inline-size</code> defined in CSS.
          The mixin system provides the responsive classes, but the container context must be set separately.
        </Text>
        <CodeBlock language="tsx">{containerExample}</CodeBlock>

        <Card mixin={{ mt: 4 }}>
          <CardHeader>Container Breakpoints</CardHeader>
          <CardContent>
            <Text variant="body2" mixin={{ mb: 1 }}><code>smallContainer</code>: max-width: 400px</Text>
            <Text variant="body2" mixin={{ mb: 1 }}><code>mediumContainer</code>: 401px – 800px</Text>
            <Text variant="body2"><code>bigContainer</code>: min-width: 801px</Text>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Live Examples</Text>

        <Box className="d-grid-gap-4" mixin={{ my: 4, smallContainer: { gridColTemplate: '1fr' }, mediumContainer: { gridColTemplate: '1fr 1fr' } }}>
          <Box className="d-flex-dir-col">
            <Text variant="h4" mixin={{ mb: 1 }}>Spacing</Text>
            <Text variant="body2" muted mixin={{ mb: 2 }}>Padding with different spacing values</Text>
            <Card variant="subtle" mixin={{ p: 4 }} className="container-query">
              <div className="d-flex-f-wrap-gap-3-ali-start">
                <Text
                  mixin={{ m: 0, p: 2 }}
                  className="MixinPage--demoItem"
                >
                  p: 2
                </Text>
                <Text
                  mixin={{ m: 0, p: 4 }}
                  className="MixinPage--demoItem"
                >
                  p: 4
                </Text>
                <Text
                  mixin={{ m: 0, px: 4, py: 1 }}
                  className="MixinPage--demoItem"
                >
                  px: 4, py: 1
                </Text>
              </div>
            </Card>
          </Box>

          <Box className="d-flex-dir-col">
            <Text variant="h4" mixin={{ mb: 1 }}>Opacity</Text>
            <Text variant="body2" muted mixin={{ mb: 2 }}>Control element transparency</Text>
            <Card variant="subtle" mixin={{ p: 4 }} className="container-query">
              <Box className="d-flex-f-wrap-gap-2">
                <Button mixin={{ opacity: 1 }}>100%</Button>
                <Button mixin={{ opacity: 0.7 }}>70%</Button>
                <Button mixin={{ opacity: 0.4 }}>40%</Button>
              </Box>
            </Card>
          </Box>

          <Box className="d-flex-dir-col">
            <Text variant="h4" mixin={{ mb: 1 }}>Responsive (resize viewport)</Text>
            <Text variant="body2" muted mixin={{ mb: 2 }}>Padding changes based on screen size</Text>
            <Card variant="subtle" mixin={{ p: 4 }} className="container-query">
              <Text
                mixin={{
                  p: 2,
                  smallScreen: { p: 1 },
                  bigScreen: { p: 4 }
                }}
                className="MixinPage--demoItem d-flex-dir-col-gap-1"
              >
                <Text tag="span" mixin={{ display: 'block', mediumScreen: { display: 'none' } }}>Small: p:1</Text>
                <Text tag="span" mixin={{ display: 'none', mediumScreen: { display: 'block' }, bigScreen: { display: 'none' } }}>Medium: p:2</Text>
                <Text tag="span" mixin={{ display: 'none', bigScreen: { display: 'block' } }}>Large: p:4</Text>
              </Text>
            </Card>
          </Box>

          <Box className="d-flex-dir-col">
            <Text variant="h4" mixin={{ mb: 1 }}>Flex Layout</Text>
            <Text variant="body2" muted mixin={{ mb: 2 }}>Direction switches from column to row</Text>
            <Card
              variant="subtle"
              className="d-flex-gap-1"
              mixin={{
                p: 4,
                display: 'flex',
                smallScreen: { flexDirection: 'column' },
                mediumScreen: { flexDirection: 'row' }
              }}
            >
              <Text mixin={{ p: 1 }} className="MixinPage--demoItem">1</Text>
              <Text mixin={{ p: 1 }} className="MixinPage--demoItem">2</Text>
              <Text mixin={{ p: 1 }} className="MixinPage--demoItem">3</Text>
            </Card>
          </Box>

          <Box className="d-flex-dir-col" mixin={{ gridColumn: '1 / -1' }}>
            <Text variant="h4" mixin={{ mb: 1 }}>Container Query (resize panel)</Text>
            <Text variant="body2" muted mixin={{ mb: 2 }}>Styles change based on container width</Text>
            <Card variant="subtle" mixin={{ p: 4 }} className="container-query MixinPage--resizable">
              <Text
                mixin={{
                  p: 2,
                  smallContainer: { p: 1, opacity: 0.6 },
                  mediumContainer: { p: 4, opacity: 1 }
                }}
                className="MixinPage--demoItem d-flex-dir-col-gap-1"
              >
                <Text tag="span" mixin={{ display: 'block', mediumContainer: { display: 'none' } }}>Small: p:1, dim</Text>
                <Text tag="span" mixin={{ display: 'none', mediumContainer: { display: 'block' }, bigContainer: { display: 'none' } }}>Medium: p:2</Text>
                <Text tag="span" mixin={{ display: 'none', bigContainer: { display: 'block' } }}>Large: p:4, bright</Text>
              </Text>
            </Card>
          </Box>
        </Box>

        <Box className="d-flex-dir-col" mixin={{ mt: 4 }}>
          <Text variant="h4" mixin={{ mb: 1 }}>Card with Mixin</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Cards accept mixin props for padding and opacity</Text>
          <Box className="d-grid-gap-4" mixin={{ smallContainer: { gridColTemplate: '1fr' }, mediumContainer: { gridColTemplate: '1fr 1fr' } }}>
            <Card mixin={{ p: 2 }}>
              <CardHeader>Default padding</CardHeader>
              <CardContent>
                <Text variant="body2">Card with p: 2</Text>
              </CardContent>
            </Card>
            <Card mixin={{ p: 4, opacity: 0.8 }}>
              <CardHeader>More padding, dimmed</CardHeader>
              <CardContent>
                <Text variant="body2">Card with p: 4, opacity: 0.8</Text>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box className="d-flex-dir-col" mixin={{ mt: 4 }}>
          <Text variant="h4" mixin={{ mb: 1 }}>Heading & Section</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Structural components also support mixins</Text>
          <Card variant="subtle" mixin={{ p: 3 }}>
            <Text variant="h3" mixin={{ mb: 2 }}>Heading with mb: 2</Text>
            <Text variant="body2">Section with p: 3 containing a heading and text.</Text>
          </Card>
        </Box>

        <Box className="d-flex-dir-col" mixin={{ mt: 4 }}>
          <Text variant="h4" mixin={{ mb: 2 }}>Buttons</Text>
          <Card variant="subtle" mixin={{ p: 4 }}>
            <Box className="d-flex-f-wrap-ali-center">
              <Button mixin={{ mr: 2 }}>Normal</Button>
              <Button mixin={{ mr: 2, p: 3 }} variant="secondary">Large padding</Button>
              <Button mixin={{ opacity: 0.5 }} variant="ghost">Dimmed</Button>
            </Box>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
