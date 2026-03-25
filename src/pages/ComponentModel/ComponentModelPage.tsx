import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card, CardContent } from '../../components/Card';
import { Text } from '../../components/Text';
import './ComponentModelPage.css';
import { Box } from '../../components/Box';

const folderStructure = `/src
  /components
    /Button
      Button.tsx      # Component logic
      Button.css      # Component styles
      index.ts        # Public export
    /Card
      Card.tsx
      Card.css
      index.ts`;

const componentTSX = `import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={\`Button--root Button--\${variant}\`}>
      {children}
    </button>
  );
}`;

const componentCSS = `@layer components {
  /* Root element - always required */
  .Button--root {
    display: inline-flex;
    align-items: center;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: background-color 150ms ease;
  }

  /* Variants */
  .Button--primary {
    background-color: var(--color-primary);
    color: white;
  }

  .Button--secondary {
    background-color: var(--color-bg-muted);
    color: var(--color-text);
  }

  .Button--ghost {
    background-color: transparent;
  }

  /* States */
  .Button--root:hover {
    filter: brightness(1.1);
  }

  .Button--root:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`;

const namingExamples = `.Card--root { }        /* Container */
.Card--header { }      /* Child element */
.Card--content { }     /* Child element */
.Card--footer { }      /* Child element */
.Card--elevated { }    /* Variant */
.Card--interactive { } /* Behavior modifier */`;

export function ComponentModelPage() {
  return (
    <div className="ComponentModelPage--root">
      <Section>
        <Text variant="h1">Component Model</Text>
        <p>
          CascadeKit components follow a simple pattern: each component owns
          its styles through co-located CSS files and consistent naming.
        </p>
      </Section>

      <Section>
        <Text variant="h2">Folder Structure</Text>
        <p>
          Each component lives in its own folder with its TSX and CSS files:
        </p>
        <CodeBlock language="text" filename="Project Structure">
          {folderStructure}
        </CodeBlock>
        <p>
          This co-location means styles always travel with their component.
          When you move a component, you move its styles too.
        </p>
      </Section>

      <Section>
        <Text variant="h2">The Root Class Pattern</Text>
        <p>
          Every component must have a root class: <code>.ComponentName--root</code>.
          This provides a reliable anchor for all component styles:
        </p>
        <CodeBlock language="css">
          {namingExamples}
        </CodeBlock>

        <div className="ComponentModelPage--rules">
          <Card>
            <CardContent>
              <h4>Naming Rules</h4>
              <ul>
                <li><strong>PascalCase</strong> component name</li>
                <li><strong>Double dash</strong> separator</li>
                <li><strong>camelCase</strong> element/modifier name</li>
                <li>Always start with <code>--root</code></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <Text variant="h2">Complete Example</Text>
        <p>
          Here's a complete Button component showing the full pattern:
        </p>
        <CodeBlock language="tsx" filename="Button.tsx">
          {componentTSX}
        </CodeBlock>
        <CodeBlock language="css" filename="Button.css">
          {componentCSS}
        </CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Why This Pattern?</Text>
        <Box className="d-grid" mixin={{gap: 4, smallScreen: {gridColTemplate: '1fr'}, mediumScreen: {gridColTemplate: '1fr 1fr'}}}>
          <Card>
            <CardContent>
              <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🔍 Debuggable</Text>
              <Text variant="body2" muted>
                Real class names in DevTools. See <code>.Button--primary</code>,
                not <code>.sc-bdnylx</code>.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>📦 Portable</Text>
              <Text variant="body2" muted>
                Copy a component folder and you have everything.
                No hunting for scattered styles.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🎯 Predictable</Text>
              <Text variant="body2" muted>
                Know exactly where styles are defined.
                Component name → folder → CSS file.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" tag="h4" mixin={{ mb: 2 }}>🤝 Collaborative</Text>
              <Text variant="body2" muted>
                Teams can work on components independently.
                No merge conflicts on shared style files.
              </Text>
            </CardContent>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
