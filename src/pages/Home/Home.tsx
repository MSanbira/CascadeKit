import { Link } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card, CardContent } from '../../components/Card';
import { CodeBlock } from '../../components/CodeBlock';
import './Home.css';

const exampleCSS = `@layer components {
  .Button--root {
    background: var(--color-primary);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
  }
}`;

const exampleTSX = `import './Button.css';

export function Button({ children }) {
  return (
    <button className="Button--root">
      {children}
    </button>
  );
}`;

export function Home() {
  return (
    <div className="Home--root">
      <Section>
        <div className="Home--hero">
          <span className="Home--badge text-sm font-semibold">CSS Architecture</span>
          <Heading level={1}>
            CSS via Imports + Layers
          </Heading>
          <p className="Home--tagline text-xl text-muted">
            A modern CSS architecture that combines the simplicity of global CSS 
            with the power of native cascade layers. No build-time magic, 
            no runtime overhead — just CSS.
          </p>
          <div className="Home--actions">
            <Link to="/how">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link to="/example">
              <Button variant="secondary" size="lg">View Examples</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <Heading level={2}>The Core Idea</Heading>
        <p>
          CascadeKit is built on three simple principles that work together 
          to create a predictable, scalable CSS architecture:
        </p>
        
        <div className="Home--features">
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">📦 Co-located CSS</h3>
              <p className="text-sm text-muted">
                Each component imports its own CSS file. Styles travel 
                with components through the module graph.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">🎯 Layer Control</h3>
              <p className="text-sm text-muted">
                All CSS lives inside <code>@layer</code> blocks. 
                The cascade is explicit, predictable, and debuggable.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">🏷️ Clear Naming</h3>
              <p className="text-sm text-muted">
                Components use <code>ComponentName--element</code> naming. 
                No generated hashes, no runtime, no magic.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <Heading level={2}>What It Looks Like</Heading>
        <p>
          A complete component is just two files: a React component that imports 
          its CSS, and a CSS file that uses <code>@layer</code>:
        </p>
        
        <div className="Home--codeExample">
          <CodeBlock language="tsx" filename="Button.tsx">
            {exampleTSX}
          </CodeBlock>
          <CodeBlock language="css" filename="Button.css">
            {exampleCSS}
          </CodeBlock>
        </div>
      </Section>

      <Section>
        <Heading level={2}>Why CascadeKit?</Heading>
        <ul>
          <li><strong>Zero Runtime</strong> — No CSS-in-JS overhead, just native CSS</li>
          <li><strong>Predictable Cascade</strong> — <code>@layer</code> makes specificity explicit</li>
          <li><strong>Tree-shakeable</strong> — Unused component CSS never loads</li>
          <li><strong>Debuggable</strong> — Real class names in DevTools</li>
          <li><strong>Future-proof</strong> — Uses native CSS features, not abstractions</li>
        </ul>
        <div className="Home--cta">
          <Link to="/why">
            <Button variant="ghost">Learn more about why →</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
