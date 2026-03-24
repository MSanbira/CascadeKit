import { useState } from 'react';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { CodeBlock } from '../../components/CodeBlock';
import './Example.css';

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

export function Example() {
  const [count, setCount] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'secondary' | 'ghost'>('primary');

  return (
    <div className="Example--root">
      <Section>
        <Heading level={1}>Live Example</Heading>
        <p>
          This page showcases CascadeKit components working together. 
          Everything you see here follows the CascadeKit architecture — 
          inspect the elements to see real class names!
        </p>
      </Section>

      <Section>
        <Heading level={2}>Button Component</Heading>
        <p>
          Buttons support multiple variants and sizes. Try them out:
        </p>
        
        <div className="Example--showcase">
          <Card>
            <CardHeader>Button Variants</CardHeader>
            <CardContent>
              <div className="Example--buttonGrid">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Button Sizes</CardHeader>
            <CardContent>
              <div className="Example--buttonGrid">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <CodeBlock language="tsx" filename="Button.tsx">
          {buttonCode}
        </CodeBlock>
      </Section>

      <Section>
        <Heading level={2}>Card Component</Heading>
        <p>
          Cards provide a surface for grouping related content:
        </p>
        
        <div className="Example--cardShowcase">
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
              <div className="Example--cardActions">
                <Button variant="primary" size="sm">Confirm</Button>
                <Button variant="ghost" size="sm">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <CodeBlock language="tsx" filename="Card.tsx">
          {cardCode}
        </CodeBlock>
      </Section>

      <Section>
        <Heading level={2}>Interactive Demo</Heading>
        <p>
          Components work with React state like any other component:
        </p>

        <Card>
          <CardHeader>Counter Example</CardHeader>
          <CardContent>
            <div className="Example--counter">
              <span className="Example--counterValue">{count}</span>
              <div className="Example--counterControls">
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
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Heading level={2}>Variant Selector</Heading>
        <p>
          Switch between button variants dynamically:
        </p>

        <Card>
          <CardContent>
            <div className="Example--variantSelector">
              <div className="Example--variantOptions">
                {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
                  <button
                    key={variant}
                    className={`Example--variantOption ${selectedVariant === variant ? 'Example--variantOption-active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
              <div className="Example--variantPreview">
                <Button variant={selectedVariant} size="lg">
                  {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Button
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <Heading level={2}>Inspect the CSS</Heading>
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
