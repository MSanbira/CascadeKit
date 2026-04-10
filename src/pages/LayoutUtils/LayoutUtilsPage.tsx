import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Box } from '../../components/Box';
import './LayoutUtilsPage.css';

const flexExample = `<div className="d-flex gap-2 ali-center">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>

<div className="d-flex dir-col gap-1">
  <span>Stacked 1</span>
  <span>Stacked 2</span>
</div>`;

const gridExample = `<div className="d-grid gap-3">
  <div>Cell 1</div>
  <div>Cell 2</div>
</div>

<div className="col-container col-num-3 gap-2">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`;

const combinedExample = `{/* Static layout with utility classes */}
<div className="d-flex gap-2 ali-center">
  {/* Dynamic spacing with mixin */}
  <Text mixin={{ p: 2, smallScreen: { p: 1 } }}>
    Responsive padding
  </Text>
</div>

{/* Grid layout + responsive mixin */}
<Box 
  className="col-container col-num-2 gap-3"
  mixin={{ smallScreen: { gridColTemplate: '1fr' } }}
>
  <Card>Column 1</Card>
  <Card>Column 2</Card>
</Box>`;

const classReference = {
  flex: [
    { class: 'd-flex', desc: 'display: flex' },
    { class: 'dir-col', desc: 'flex-direction: column' },
    { class: 'f-wrap', desc: 'flex-wrap: wrap' },
    { class: 'min-0', desc: 'min-width: 0 (prevent overflow)' },
  ],
  grid: [
    { class: 'd-grid', desc: 'display: grid' },
    { class: 'col-container', desc: 'Grid with 1 column' },
    { class: 'col-num-2', desc: 'Grid with 2 equal columns' },
    { class: 'col-num-3', desc: 'Grid with 3 equal columns' },
    { class: 'col-num-4', desc: 'Grid with 4 equal columns' },
    { class: 'col-num-auto', desc: 'Auto-fill columns (use --auto-col-min-width)' },
    { class: 'with-divider', desc: 'Add dividers between columns' },
  ],
  alignment: [
    { class: 'ali-start', desc: 'align-items: flex-start' },
    { class: 'ali-center', desc: 'align-items: center' },
    { class: 'ali-end', desc: 'align-items: flex-end' },
    { class: 'ali-baseline', desc: 'align-items: baseline' },
    { class: 'ali-stretch', desc: 'align-items: stretch' },
    { class: 'jc-start', desc: 'justify-content: flex-start' },
    { class: 'jc-center', desc: 'justify-content: center' },
    { class: 'jc-end', desc: 'justify-content: flex-end' },
    { class: 'jc-sb', desc: 'justify-content: space-between' },
    { class: 'jc-se', desc: 'justify-content: space-evenly' },
  ],
  gap: [
    { class: 'gap-0_25', desc: '2px' },
    { class: 'gap-0_5', desc: '4px' },
    { class: 'gap-1', desc: '8px' },
    { class: 'gap-1_5', desc: '12px' },
    { class: 'gap-2', desc: '16px' },
    { class: 'gap-2_5', desc: '20px' },
    { class: 'gap-3', desc: '24px' },
    { class: 'gap-4', desc: '32px' },
    { class: 'gap-5', desc: '40px' },
    { class: 'gap-6', desc: '48px' },
    { class: 'gap-8', desc: '64px' },
    { class: 'gap-10', desc: '80px' },
    { class: 'no-gap', desc: '0' },
  ],
};

export function LayoutUtilsPage() {
  return (
    <div className="LayoutUtilsPage--root">
      <Section>
        <Text variant="h1">Layout Utilities</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Layout utilities provide quick, composable CSS classes for common layout patterns.
          They live in the <code>utils</code> layer and use class selectors for composable styling.
        </Text>
        <Card className="LayoutUtilsPage--card" title="Key Concept">
          <Text variant="body2" mixin={{ mb: 2 }}>
            Classes can be <Strong>combined freely</Strong> as space-separated values.
            Each utility is a separate class that can be mixed and matched.
          </Text>
          <Text variant="body2">
            Example: <code>d-flex gap-2 ali-center</code> applies flex, gap, and alignment.
          </Text>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Flexbox</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Use <code>d-flex</code> as the base, then add modifiers for direction, wrapping, and alignment.
        </Text>
        <CodeBlock language="tsx">{flexExample}</CodeBlock>

        <div className="LayoutUtilsPage--demo">
          <Text variant="h4" mixin={{ mb: 1 }}>Live Demo</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Flex row with gap and center alignment</Text>
          <div className="LayoutUtilsPage--demo-box">
            <div className="d-flex gap-2 ali-center">
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>Item 1</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Item 2</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>Item 3</Text>
            </div>
          </div>
        </div>

        <Card className="LayoutUtilsPage--card" title="Flex Classes">
          {classReference.flex.map(({ class: cls, desc }) => (
            <Text key={cls} variant="body2" mixin={{ mb: 1 }}>
              <code>{cls}</code> — {desc}
            </Text>
          ))}
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Grid & Columns</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Use <code>d-grid</code> for basic grid or <code>col-container</code> for predefined column layouts.
        </Text>
        <CodeBlock language="tsx">{gridExample}</CodeBlock>

        <div className="LayoutUtilsPage--demo">
          <Text variant="h4" mixin={{ mb: 1 }}>Live Demo</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>3-column grid with gap</Text>
          <div className="LayoutUtilsPage--demo-box">
            <div className="col-container col-num-3 gap-2">
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Column 1</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Column 2</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Column 3</Text>
            </div>
          </div>
        </div>

        <Card className="LayoutUtilsPage--card" title="Grid Classes">
          {classReference.grid.map(({ class: cls, desc }) => (
            <Text key={cls} variant="body2" mixin={{ mb: 1 }}>
              <code>{cls}</code> — {desc}
            </Text>
          ))}
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Alignment</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Alignment classes work with both flex and grid layouts.
        </Text>

        <div className="LayoutUtilsPage--demo">
          <Text variant="h4" mixin={{ mb: 1 }}>Live Demo</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Space-between with center alignment</Text>
          <div className="LayoutUtilsPage--demo-box">
            <div className="d-flex jc-sb ali-center LayoutUtilsPage--align-demo">
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>Left</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Center</Text>
              <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>Right</Text>
            </div>
          </div>
        </div>

        <Card className="LayoutUtilsPage--card" title="Alignment Classes">
          {classReference.alignment.map(({ class: cls, desc }) => (
            <Text key={cls} variant="body2" mixin={{ mb: 1 }}>
              <code>{cls}</code> — {desc}
            </Text>
          ))}
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Gap</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Gap classes follow the spacing scale from <code>base.css</code>.
        </Text>

        <div className="LayoutUtilsPage--demo">
          <Text variant="h4" mixin={{ mb: 1 }}>Live Demo</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Comparing different gap sizes</Text>
          <div className="LayoutUtilsPage--demo-box">
            <div className="d-flex dir-col gap-3">
              <div className="d-flex gap-1">
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-1</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-1</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-1</Text>
              </div>
              <div className="d-flex gap-3">
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-3</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-3</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-3</Text>
              </div>
              <div className="d-flex gap-6">
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-6</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-6</Text>
                <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 1 }}>gap-6</Text>
              </div>
            </div>
          </div>
        </div>

        <Card className="LayoutUtilsPage--card" title="Gap Classes">
          <div className="d-flex f-wrap gap-2">
            {classReference.gap.map(({ class: cls, desc }) => (
              <Text key={cls} variant="body2">
                <code>{cls}</code> {desc}
              </Text>
            ))}
          </div>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Combining with Mixin</Text>
        <Text variant="body1" mixin={{ mb: 2 }}>
          Layout utilities handle <Strong>static structure</Strong>, while the mixin system handles 
          <Strong> dynamic and responsive</Strong> properties. They work together seamlessly.
        </Text>
        <CodeBlock language="tsx">{combinedExample}</CodeBlock>

        <Card className="LayoutUtilsPage--card" title="When to Use Each">
          <Text variant="body2" mixin={{ mb: 2 }}>
            <Strong>Use layout utilities when:</Strong>
          </Text>
          <ul className="LayoutUtilsPage--list">
            <li>Layout structure is static (always flex, always 3 columns)</li>
            <li>You want quick, composable layout classes</li>
            <li>Gap and alignment don't need to change responsively</li>
          </ul>
          <Text variant="body2" mixin={{ mb: 2, mt: 3 }}>
            <Strong>Use mixin when:</Strong>
          </Text>
          <ul className="LayoutUtilsPage--list">
            <li>Properties need to change at breakpoints</li>
            <li>You need container query support</li>
            <li>Spacing/opacity/display varies by screen size</li>
          </ul>
          <Text variant="body2" mixin={{ mt: 3 }}>
            <Strong>Combine both:</Strong> Use utility classes for base layout, mixin for responsive overrides.
          </Text>
        </Card>

        <div className="LayoutUtilsPage--demo inline-container">
          <Text variant="h4" mixin={{ mb: 1 }}>Live Demo</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>Grid layout with responsive column override</Text>
          <Box
            className="d-grid gap-2 LayoutUtilsPage--demo-box"
            mixin={{ smallScreen: { gridColTemplate: '1fr' }, mediumContainer: { gridColTemplate: '1fr 1fr'} }}
          >
            <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Column 1</Text>
            <Text className="LayoutUtilsPage--demo-item" mixin={{ p: 2 }}>Column 2</Text>
          </Box>
          <Text variant="body2" muted mixin={{ mt: 1 }}>
            ↑ 2 columns on medium+, 1 column on small container
          </Text>
        </div>
      </Section>
    </div>
  );
}
