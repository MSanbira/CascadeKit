import { useState } from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { CodeBlock } from '../../components/CodeBlock';
import { Text } from '../../components/Text';
import { Box } from '../../components/Box';
import './ExamplePage.css';

const buttonCode = `import './Button.css';

export function Button({ variant, size, children }) {
  return (
    <button className={\`Button--root Button--\${variant} Button--\${size}\`}>
      {children}
    </button>
  );
}`;

const cardCode = `import './Card.css';

export function Card({ children }) {
  return <div className="Card--root">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="Card--header">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="Card--content">{children}</div>;
}`;

export function ExamplePage() {
  const [count, setCount] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'secondary' | 'ghost'>('primary');

  return (
    <div className="ExamplePage--root container-query">
      <Section>
        <Text variant="h1">Live Example</Text>
        <p>
          This page showcases CascadeKit components working together. 
          Everything you see here follows the CascadeKit architecture — 
          inspect the elements to see real class names!
        </p>
      </Section>

      <Section>
        <Text variant="h2">Button Component</Text>
        <p>
          Buttons support multiple variants and sizes. Try them out:
        </p>
        
        <div className="ExamplePage--showcase">
          <Card>
            <CardHeader>Button Variants</CardHeader>
            <CardContent>
              <Box className="d-flex-f-wrap-gap-3-ali-center container-query">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Button Sizes</CardHeader>
            <CardContent>
              <Box className="d-flex-f-wrap-gap-3-ali-center container-query">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <CodeBlock language="tsx" filename="Button.tsx">
          {buttonCode}
        </CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Card Component</Text>
        <p>
          Cards provide a surface for grouping related content:
        </p>
        
        <div className="ExamplePage--cardShowcase">
          <Card>
            <CardHeader>Simple Card</CardHeader>
            <CardContent>
              <p>Cards can contain any content — text, buttons, forms, or other components.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Card with Actions</CardHeader>
            <CardContent>
              <p>Combine cards with other components:</p>
              <Box className="d-flex-gap-2" mixin={{ mt: 4 }}>
                <Button variant="primary" size="sm">Confirm</Button>
                <Button variant="ghost" size="sm">Cancel</Button>
              </Box>
            </CardContent>
          </Card>
        </div>

        <CodeBlock language="tsx" filename="Card.tsx">
          {cardCode}
        </CodeBlock>
      </Section>

      <Section>
        <Text variant="h2">Interactive Demo</Text>
        <p>
          Components work with React state like any other component:
        </p>

        <Card>
          <CardHeader>Counter Example</CardHeader>
          <CardContent>
            <Box className="d-flex-dir-col-ali-center-gap-4" mixin={{ p: 6 }}>
              <Text variant="h1" tag="span" className="ExamplePage--counterValue">{count}</Text>
              <Box className="d-flex-gap-2">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setCount(c => c - 1)}
                >
                  −
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setCount(0)}
                >
                  Reset
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setCount(c => c + 1)}
                >
                  +
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Variant Selector</Text>
        <p>
          Switch between button variants dynamically:
        </p>

        <Card>
          <CardContent>
            <div className="ExamplePage--variantSelector">
              <div className="ExamplePage--variantOptions">
                {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
                  <button
                    key={variant}
                    className={`ExamplePage--variantOption ${selectedVariant === variant ? 'ExamplePage--variantOption-active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
              <div className="d-flex-jc-center">
                <Button variant={selectedVariant} size="lg">
                  {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Button
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Inspect the CSS</Text>
        <p>
          Open your browser's DevTools and inspect any element on this page. 
          You'll see:
        </p>
        <ul>
          <li><strong>Real class names</strong> like <code>.Button--primary</code></li>
          <li><strong>Layer annotations</strong> in the Styles panel</li>
          <li><strong>CSS custom properties</strong> for theming</li>
          <li><strong>No generated hashes</strong> — everything is readable</li>
        </ul>
        <p>
          This is the power of CascadeKit: debuggable, predictable, native CSS.
        </p>
      </Section>
    </div>
  );
}
