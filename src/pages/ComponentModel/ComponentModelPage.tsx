import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Card } from '../../components/Card/Card';
import { Text, Strong } from '../../components/Text/Text';
import {
  folderStructure,
  componentTSX,
  componentCSS,
  namingExamples,
} from './componentModelPageContent';
import './ComponentModelPage.css';
import { Box } from '../../components/Box/Box';

export function ComponentModelPage() {
  return (
    <div className="ComponentModelPage--root">
      <Section>
        <Text variant="h1" bottomMargin>Component Model</Text>
        <Text>
          CascadeKit components follow a simple pattern: each component owns
          its styles through co-located CSS files and consistent naming.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>Folder Structure</Text>
        <Text>
          Each component lives in its own folder with its TSX and CSS files:
        </Text>
        <CodeBlock language="text" filename="Project Structure">
          {folderStructure}
        </CodeBlock>
        <Text>
          This co-location means styles always travel with their component.
          When you move a component, you move its styles too.
        </Text>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>The Root Class Pattern</Text>
        <Text>
          Every component must have a root class: <code>.ComponentName--root</code>.
          This provides a reliable anchor for all component styles:
        </Text>
        <CodeBlock language="css">
          {namingExamples}
        </CodeBlock>

        <div className="ComponentModelPage--rules">
          <Card title="Naming Rules">
            <ul>
              <li><Strong>PascalCase</Strong> component name</li>
              <li><Strong>Double dash</Strong> separator</li>
              <li><Strong>dash-separated</Strong> element/modifier name</li>
              <li>Always start with <code>--root</code></li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>Complete Example</Text>
        <Text>
          Here's a complete Button component showing the full pattern:
        </Text>
        <CodeBlock language="tsx" filename="Button.tsx">
          {componentTSX}
        </CodeBlock>
        <CodeBlock language="css" filename="Button.css">
          {componentCSS}
        </CodeBlock>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin>Why This Pattern?</Text>
        <Box className="d-grid" mixin={{ gap: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr' } }}>
          <Card>
            <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🔍 Debuggable</Text>
            <Text variant="body2" muted>
              Real class names in DevTools. See <code>.Button--primary</code>,
              not <code>.sc-bdnylx</code>.
            </Text>
          </Card>

          <Card>
            <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>📦 Portable</Text>
            <Text variant="body2" muted>
              Copy a component folder and you have everything.
              No hunting for scattered styles.
            </Text>
          </Card>

          <Card>
            <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🎯 Predictable</Text>
            <Text variant="body2" muted>
              Know exactly where styles are defined.
              Component name → folder → CSS file.
            </Text>
          </Card>

          <Card>
            <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🤝 Collaborative</Text>
            <Text variant="body2" muted>
              Teams can work on components independently.
              No merge conflicts on shared style files.
            </Text>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
