import { Section } from '../../components/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { Card } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
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

const componentTSX = `import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  mixin?: MixinProps;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  mixin,
  ...props 
}: ButtonProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <button 
      className={classNames('Button', [\`Button--\${variant}\`, \`Button--\${size}\`, mixinClassName, className])} 
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      {children}
    </button>
  );
}`;

const componentCSS = `@layer components {
  .Button--root {
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    /* CSS custom properties with fallbacks */
    background: var(--button-bg-color, var(--color-bg));
    color: var(--button-color, var(--color-text));
    border: 1px solid var(--button-border-color, transparent);
  }

  .Button--root:hover {
    background: var(--button-bg-color-hover, var(--button-bg-color));
  }

  /* Variants only set CSS custom properties */
  .Button--primary {
    --button-bg-color: var(--color-primary);
    --button-color: var(--color-bg);
    --button-bg-color-hover: var(--color-primary-hover);
  }

  .Button--secondary {
    --button-bg-color: var(--color-bg-subtle);
    --button-border-color: var(--color-border);
  }
}

@layer component-overrides {
  /* Sizes live in higher-priority layer */
  .Button--sm { padding: var(--space-0_5) var(--space-1_5); }
  .Button--md { padding: var(--space-1) var(--space-2); }
  .Button--lg { padding: var(--space-1_5) var(--space-3); }

  /* Disabled state resets hover/active to prevent visual feedback */
  .Button--root:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: var(--button-bg-color, var(--color-bg));
    }
    
    &:active {
      border-color: var(--button-border-color, transparent);
    }
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
        <Text>
          CascadeKit components follow a simple pattern: each component owns
          its styles through co-located CSS files and consistent naming.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Folder Structure</Text>
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
        <Text variant="h2">The Root Class Pattern</Text>
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
        <Text variant="h2">Complete Example</Text>
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
        <Text variant="h2">Why This Pattern?</Text>
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
