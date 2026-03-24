import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { Card, CardHeader, CardContent } from '../../components/Card';
import './Why.css';

export function Why() {
  return (
    <div className="Why--root">
      <Section>
        <Heading level={1}>Why CascadeKit?</Heading>
        <p>
          Modern CSS tooling has solved many problems, but often at significant cost. 
          CascadeKit takes a different approach: use the platform, not abstractions.
        </p>
      </Section>

      <Section>
        <Heading level={2}>The Problem with CSS-in-JS</Heading>
        <p>
          Libraries like styled-components and Emotion brought scoping and 
          co-location to CSS, but they come with trade-offs:
        </p>
        <ul>
          <li><strong>Runtime overhead</strong> — Styles are computed in JavaScript</li>
          <li><strong>Bundle size</strong> — The library itself adds weight</li>
          <li><strong>Debugging</strong> — Generated class names are hard to trace</li>
          <li><strong>SSR complexity</strong> — Requires careful hydration handling</li>
          <li><strong>Tooling fragmentation</strong> — Different syntax, different rules</li>
        </ul>
      </Section>

      <Section>
        <Heading level={2}>The Problem with Utility-First CSS</Heading>
        <p>
          Tailwind and similar utilities offer rapid prototyping, but:
        </p>
        <ul>
          <li><strong>Verbose markup</strong> — Components become hard to read</li>
          <li><strong>Design system coupling</strong> — Hard to deviate from the config</li>
          <li><strong>Specificity issues</strong> — Overriding utilities requires <code>!important</code></li>
          <li><strong>Learning curve</strong> — New syntax to learn, not standard CSS</li>
          <li><strong>Duplication</strong> — Same class combinations repeated everywhere</li>
        </ul>
      </Section>

      <Section>
        <Heading level={2}>The Problem with CSS Modules</Heading>
        <p>
          CSS Modules provide scoping without runtime, but:
        </p>
        <ul>
          <li><strong>Hash-based names</strong> — Makes debugging harder</li>
          <li><strong>Global styles are awkward</strong> — Requires <code>:global()</code> escape hatches</li>
          <li><strong>Composition is limited</strong> — <code>composes</code> has restrictions</li>
          <li><strong>TypeScript friction</strong> — Requires additional tooling for types</li>
          <li><strong>Cascade is hidden</strong> — Still no control over specificity</li>
        </ul>
      </Section>

      <Section>
        <Heading level={2}>The CascadeKit Approach</Heading>
        <p>
          CascadeKit embraces native CSS features that solve these problems 
          without the trade-offs:
        </p>
        
        <div className="Why--comparison">
          <Card>
            <CardHeader>What We Get</CardHeader>
            <CardContent>
              <ul className="Why--list Why--list-positive">
                <li>Zero runtime cost</li>
                <li>Real CSS — DevTools just work</li>
                <li>Predictable cascade via <code>@layer</code></li>
                <li>Component-level CSS loading</li>
                <li>Clear, readable class names</li>
                <li>Native CSS features (variables, :has, etc.)</li>
                <li>No build tool lock-in</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>What We Avoid</CardHeader>
            <CardContent>
              <ul className="Why--list Why--list-negative">
                <li>Runtime style computation</li>
                <li>Library dependencies</li>
                <li>Generated hash names</li>
                <li>Proprietary syntax</li>
                <li>Specificity wars</li>
                <li>Global scope pollution</li>
                <li>Magic and abstraction</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <Heading level={2}>When to Use CascadeKit</Heading>
        <p>CascadeKit is ideal for:</p>
        <ul>
          <li><strong>Design systems</strong> — Clear naming prevents conflicts</li>
          <li><strong>Component libraries</strong> — Consumers see real CSS they can inspect</li>
          <li><strong>Performance-critical apps</strong> — No JS overhead for styling</li>
          <li><strong>Teams who know CSS</strong> — Leverage existing skills, not new abstractions</li>
          <li><strong>Long-term projects</strong> — Native features age better than libraries</li>
        </ul>
      </Section>
    </div>
  );
}
