import { Section } from '../../components/Section';
import { Card, CardHeader, CardContent } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Box } from '../../components/Box';
import './WhyPage.css';

export function WhyPage() {
  return (
    <div className="WhyPage--root">
      <Section>
        <Text variant="h1">Why CascadeKit?</Text>
        <Text>
          CSS has evolved. Native features like <code>@layer</code>, CSS variables, and container queries 
          solve problems that once required tooling. CascadeKit is an architecture that uses these features directly.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">The Problem</Text>
        <Text>
          Most CSS approaches trade one problem for another:
        </Text>
        <ul>
          <li><Strong>CSS-in-JS</Strong> — Runtime overhead, generated class names, library lock-in</li>
          <li><Strong>Utility-first</Strong> — Verbose markup, specificity issues, proprietary syntax</li>
          <li><Strong>CSS Modules</Strong> — Hash names, no cascade control, awkward global styles</li>
          <li><Strong>Global CSS</Strong> — Specificity conflicts, unpredictable overrides</li>
        </ul>
      </Section>

      <Section>
        <Text variant="h2">The Solution</Text>
        <Text>
          CascadeKit solves these with native CSS features and clear conventions:
        </Text>

        <Box className="d-grid" mixin={{gap: 4, mt: 4, smallScreen: {gridColTemplate: '1fr'}, mediumScreen: {gridColTemplate: '1fr 1fr'}}}>
          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>Layers eliminate specificity wars</Text>
              <Text variant="body2" muted>
                <code>@layer</code> defines cascade order explicitly. 
                Components always override base styles, pages override components — predictably.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>Tokens create consistency</Text>
              <Text variant="body2" muted>
                CSS variables in <code>base.css</code> define spacing, colors, and typography once. 
                Every component uses the same values.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>Co-location keeps styles with components</Text>
              <Text variant="body2" muted>
                Each component imports its own CSS file. Tree-shaking means 
                unused CSS never ships. Delete a component, its styles go with it.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Text variant="h6" mixin={{ mb: 1 }}>Naming makes debugging easy</Text>
              <Text variant="body2" muted>
                <code>ComponentName--element</code> is readable in DevTools, 
                greppable in code, and requires no source maps.
              </Text>
            </CardContent>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">What You Get</Text>
        <Box className="d-grid" mixin={{gap: 4, smallScreen: {gridColTemplate: '1fr'}, mediumScreen: {gridColTemplate: '1fr 1fr'}}}>
          <Card>
            <CardHeader>Benefits</CardHeader>
            <CardContent>
              <ul className="WhyPage--list WhyPage--list-positive">
                <li>Zero runtime — native CSS only</li>
                <li>Predictable cascade — layers define order</li>
                <li>Debuggable — real class names</li>
                <li>Tree-shakeable — unused CSS doesn't ship</li>
                <li>SSR-friendly — no hydration issues, CSS load order doesn't matter</li>
                <li>Future-proof — native features, no abstractions</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>What You Avoid</CardHeader>
            <CardContent>
              <ul className="WhyPage--list WhyPage--list-negative">
                <li>Runtime style computation</li>
                <li>Generated hash names</li>
                <li>Proprietary syntax</li>
                <li>Specificity conflicts</li>
                <li>Library dependencies</li>
              </ul>
            </CardContent>
          </Card>
        </Box>
      </Section>
    </div>
  );
}
