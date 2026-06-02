import type { ReactNode } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { Badge } from '../../components/Badge/Badge';
import { Button } from '../../components/Button/Button';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import {
  heroIntro,
  heroCast,
  act1Problem,
  act1NaiveCode,
  act1Walls,
  act1SolutionCode,
  act1Lever,
  act2Problem,
  act2NaiveCode,
  act2Walls,
  act2SolutionTsxCode,
  act2SolutionCssCode,
  act2SolutionUsageCode,
  act2Lever,
  act2Footnote,
  act3Problem,
  act3NaiveCode,
  act3Walls,
  act3SolutionCode,
  act3Lever,
  act4Problem,
  act4NaiveCode,
  act4Walls,
  act4SolutionCode,
  act4Lever,
  act5Problem,
  act5NaiveCode,
  act5Walls,
  act5SolutionTsxCode,
  act5SolutionCssCode,
  act5SolutionUsageCode,
  act5Lever,
  act5Insight,
  act5Footnote,
  closingTitle,
  closingIntro,
  closingTradeoffs,
} from './caseStudyContent';
import './CaseStudyPage.css';

interface ActHeaderProps {
  number: number;
  title: string;
  subtitle: string;
}

function ActHeader({ number, title, subtitle }: ActHeaderProps) {
  return (
    <Box className="CaseStudyPage--act-header" mixin={{ mb: 4 }}>
      <Box className="d-flex ali-center gap-2" mixin={{ mb: 2 }}>
        <span className="CaseStudyPage--act-number">Act {number}</span>
      </Box>
      <Text variant="h2" bottomMargin id={`act-${number}`}>{title}</Text>
      <Text variant="body1" muted isPretty>{subtitle}</Text>
    </Box>
  );
}

interface ProblemBlockProps {
  children: ReactNode;
}

function ProblemBlock({ children }: ProblemBlockProps) {
  return (
    <Card variant="subtle" mixin={{ mb: 4 }} className="CaseStudyPage--problem">
      <Text variant="body2" muted>
        <Strong>The problem:</Strong> {children}
      </Text>
    </Card>
  );
}

interface NaiveSolutionPairProps {
  naiveCode: string;
  naiveLanguage?: string;
  walls: string[];
  solutionCode: string;
  solutionLanguage?: string;
}

function NaiveSolutionPair({
  naiveCode,
  naiveLanguage = 'tsx',
  walls,
  solutionCode,
  solutionLanguage = 'tsx',
}: NaiveSolutionPairProps) {
  return (
    <>
      <Box mixin={{ mt: 4 }}>
        <Text variant="h5" bottomMargin>The naive approach</Text>
        <CodeBlock language={naiveLanguage} filename="Naive">{naiveCode}</CodeBlock>
        <Box mixin={{ mt: 3 }}>
          <Text variant="body2" muted bottomMargin>
            <Strong>Walls you hit:</Strong>
          </Text>
          <ul className="CaseStudyPage--walls-list">
            {walls.map(wall => <li key={wall}>{wall}</li>)}
          </ul>
        </Box>
      </Box>

      <Box mixin={{ mt: 4 }}>
        <Text variant="h5" bottomMargin>The CascadeKit solution</Text>
        <CodeBlock language={solutionLanguage} filename="CascadeKit">{solutionCode}</CodeBlock>
      </Box>
    </>
  );
}

interface LeverCardProps {
  children: ReactNode;
}

function LeverCard({ children }: LeverCardProps) {
  return (
    <Card mixin={{ mt: 4 }} className="CaseStudyPage--lever">
      <Text variant="body2">
        <Strong>Lever:</Strong> {children}
      </Text>
    </Card>
  );
}

interface LiveDemoProps {
  description: ReactNode;
  children: ReactNode;
  caption?: ReactNode;
}

function LiveDemo({ description, children, caption }: LiveDemoProps) {
  return (
    <Box mixin={{ mt: 5 }}>
      <Text variant="h5" bottomMargin>Live</Text>
      <Text variant="body2" muted bottomMargin>{description}</Text>
      <Box mixin={{ mt: 3 }}>{children}</Box>
      {caption && (
        <Text variant="body2" muted mixin={{ mt: 3 }}>{caption}</Text>
      )}
    </Box>
  );
}

const tenants = [
  { id: 'acme', name: 'Acme Robotics', color: '#10b981' },
  { id: 'orbit', name: 'Orbit Studio', color: '#8b5cf6' },
  { id: 'flux', name: 'Flux Energy', color: '#f59e0b' },
];

export function CaseStudyPage() {
  return (
    <div className="CaseStudyPage--root">
      {/* HERO ──────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <Text variant="body2" muted mixin={{ mb: 2 }}>Case study</Text>
        <Text variant="h1" bottomMargin>
          Building Workspace Tiles for a Multi-Tenant Dashboard
        </Text>
        <Text isPretty mixin={{ mb: 4 }}>{heroIntro}</Text>
        <Card variant="subtle">
          <Text variant="body2" muted bottomMargin>
            <Strong>The cast:</Strong>
          </Text>
          <ul className="CaseStudyPage--cast-list">
            {heroCast.map(item => <li key={item}>{item}</li>)}
          </ul>
        </Card>
      </Section>

      {/* ACT 1 ─────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <ActHeader
          number={1}
          title="Per-tenant brand color"
          subtitle="The inline-style trap, and why dynamic values still belong in the cascade."
        />

        <ProblemBlock>{act1Problem}</ProblemBlock>

        <NaiveSolutionPair
          naiveCode={act1NaiveCode}
          walls={act1Walls}
          solutionCode={act1SolutionCode}
        />

        <LiveDemo
          description={
            <>
              Three tenants, three brand colors. Hover any card. The inner Button picks up
              the tenant color because <code>--color-primary</code> rebinds.
            </>
          }
        >
          <Box
            className="d-grid gap-3"
            mixin={{
              smallScreen: { gridColTemplate: '1fr' },
              mediumScreen: { gridColTemplate: '1fr 1fr 1fr' },
            }}
          >
            {tenants.map(tenant => (
              <Card
                key={tenant.id}
                scopedStyle={{
                  '--color-primary': tenant.color,
                  '--color-border': tenant.color,
                  transition: 'box-shadow var(--transition-base)',
                  '&:hover': {
                    boxShadow: `0 0 24px ${tenant.color}55`,
                  },
                }}
              >
                <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 3 }}>
                  <Text variant="h5" tag="span">{tenant.name}</Text>
                  <Badge variant="primary">Live</Badge>
                </Box>
                <Text variant="body2" muted>Tenant brand cascades to every child.</Text>
                <Box mixin={{ mt: 3 }}>
                  <Button variant="primary" size="sm">Open</Button>
                </Box>
              </Card>
            ))}
          </Box>
        </LiveDemo>

        <LeverCard>{act1Lever}</LeverCard>
      </Section>

      {/* ACT 2 ─────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <ActHeader
          number={2}
          title="The pinned state"
          subtitle="A semantic class, the classNames helper, and why component-overrides exists as its own layer."
        />

        <ProblemBlock>{act2Problem}</ProblemBlock>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" bottomMargin>The naive approaches</Text>
          <CodeBlock language="tsx" filename="Three tempting wrong turns">{act2NaiveCode}</CodeBlock>
          <Box mixin={{ mt: 3 }}>
            <Text variant="body2" muted bottomMargin>
              <Strong>Walls you hit:</Strong>
            </Text>
            <ul className="CaseStudyPage--walls-list">
              {act2Walls.map(wall => <li key={wall}>{wall}</li>)}
            </ul>
          </Box>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" bottomMargin>The CascadeKit solution</Text>
          <Text variant="body2" muted bottomMargin>
            <Strong>One:</Strong> the Card accepts a <code>pinned</code> prop and toggles a class with the <code>classNames</code> helper.
          </Text>
          <CodeBlock language="tsx" filename="Card.tsx">{act2SolutionTsxCode}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="body2" muted bottomMargin>
            <Strong>Two:</Strong> identity in <code>@layer components</code>, state in <code>@layer component-overrides</code>.
          </Text>
          <CodeBlock language="css" filename="Card.css">{act2SolutionCssCode}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="body2" muted bottomMargin>
            <Strong>Three:</Strong> the consumer just passes a boolean.
          </Text>
          <CodeBlock language="tsx" filename="DashboardPage.tsx">{act2SolutionUsageCode}</CodeBlock>
        </Box>

        <LiveDemo
          description={
            <>
              Two cards, one pinned. The accent border and hover lift come from{' '}
              <code>.Card--pinned</code> in <code>@layer component-overrides</code>.
            </>
          }
        >
          <Box
            className="d-grid gap-3"
            mixin={{
              smallScreen: { gridColTemplate: '1fr' },
              mediumScreen: { gridColTemplate: '1fr 1fr' },
            }}
          >
            <Card>
              <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 2 }}>
                <Text variant="h5" tag="span">Acme Robotics</Text>
                <Badge variant="secondary">Idle</Badge>
              </Box>
              <Text variant="body2" muted>Default state, no modifier.</Text>
            </Card>
            <Card className="Card--pinned">
              <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 2 }}>
                <Text variant="h5" tag="span">Orbit Studio</Text>
                <Badge variant="primary">Pinned</Badge>
              </Box>
              <Text variant="body2" muted>Hover me. Same Card, one extra class.</Text>
            </Card>
          </Box>
        </LiveDemo>

        <LeverCard>{act2Lever}</LeverCard>

        <Card variant="subtle" mixin={{ mt: 3 }}>
          <Text variant="body2" muted>
            <Strong>When does scopedStyle still belong here?</Strong> {act2Footnote}
          </Text>
        </Card>
      </Section>

      {/* ACT 3 ─────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <ActHeader
          number={3}
          title="The layout reflex"
          subtitle="The hardest CascadeKit habit: not reaching for CSS when a utility class is already there."
        />

        <ProblemBlock>{act3Problem}</ProblemBlock>

        <NaiveSolutionPair
          naiveCode={act3NaiveCode}
          naiveLanguage="css"
          walls={act3Walls}
          solutionCode={act3SolutionCode}
        />

        <LiveDemo
          description={
            <>
              The exact JSX from the solution above, rendered. Zero new CSS.
              Inspect any element and you'll see <code>d-flex</code>, <code>jc-sb</code>,{' '}
              <code>gap-2</code> from <code>@layer utils</code>.
            </>
          }
        >
          <Card>
            <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 3 }}>
              <Text variant="h3" tag="span">Workspaces</Text>
              <Button variant="primary">New workspace</Button>
            </Box>
            <Text variant="body2" muted>
              Title left, button right, vertically centered. Tokenized gap, tokenized margin.
            </Text>
          </Card>
        </LiveDemo>

        <LeverCard>{act3Lever}</LeverCard>
      </Section>

      {/* ACT 4 ─────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <ActHeader
          number={4}
          title="Three teams, one Card"
          subtitle="Why the user-overrides layer is the feature design-system veterans nod at."
        />

        <ProblemBlock>{act4Problem}</ProblemBlock>

        <NaiveSolutionPair
          naiveCode={act4NaiveCode}
          naiveLanguage="css"
          walls={act4Walls}
          solutionCode={act4SolutionCode}
          solutionLanguage="css"
        />

        <LiveDemo
          description={
            <>
              Same Card primitive, two contexts. The right one is wrapped in{' '}
              <code>&lt;div className="MarketingLanding--root"&gt;</code>. The override
              lives in <code>@layer user-overrides</code>. No <code>!important</code>,
              no fork.
            </>
          }
          caption={
            <>
              Inspect the right Card. You'll see the override rule attached at{' '}
              <code>@layer user-overrides</code>, sitting on top of the cascade.
            </>
          }
        >
          <Box
            className="d-grid gap-3"
            mixin={{
              smallScreen: { gridColTemplate: '1fr' },
              mediumScreen: { gridColTemplate: '1fr 1fr' },
            }}
          >
            <Box>
              <Text variant="body2" muted mixin={{ mb: 2 }}>Default</Text>
              <Card>
                <Text variant="h5" tag="span">Workspace tile</Text>
                <Text variant="body2" muted mixin={{ mt: 1 }}>
                  Stock Card from the design system.
                </Text>
              </Card>
            </Box>
            <Box className="MarketingLanding--root">
              <Text variant="body2" muted mixin={{ mb: 2 }}>Marketing landing</Text>
              <Card>
                <Text variant="h5" tag="span">Workspace tile</Text>
                <Text variant="body2" muted mixin={{ mt: 1 }}>
                  Same Card. Rounder. Gradient. Marketing-owned.
                </Text>
              </Card>
            </Box>
          </Box>
        </LiveDemo>

        <LeverCard>{act4Lever}</LeverCard>
      </Section>

      {/* ACT 5 ─────────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg)' }}>
        <ActHeader
          number={5}
          title="The clashing theme"
          subtitle="Two contexts, one token name. Theme islands fall out of CSS. CascadeKit just makes the pattern intentional."
        />

        <ProblemBlock>{act5Problem}</ProblemBlock>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" bottomMargin>The naive approaches</Text>
          <CodeBlock language="tsx" filename="Three tempting wrong turns">{act5NaiveCode}</CodeBlock>
          <Box mixin={{ mt: 3 }}>
            <Text variant="body2" muted bottomMargin>
              <Strong>Walls you hit:</Strong>
            </Text>
            <ul className="CaseStudyPage--walls-list">
              {act5Walls.map(wall => <li key={wall}>{wall}</li>)}
            </ul>
          </Box>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" bottomMargin>The CascadeKit solution</Text>
          <Text variant="body2" muted bottomMargin>
            <Strong>One:</Strong> the Alert primitive is plain class composition. No scopedStyle, no theming props.
          </Text>
          <CodeBlock language="tsx" filename="Alert.tsx">{act5SolutionTsxCode}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="body2" muted bottomMargin>
            <Strong>Two:</Strong> the Alert <em>rebinds</em> <code>--color-primary</code> inside its own subtree. Every descendant Button, Badge, and Link picks it up automatically.
          </Text>
          <CodeBlock language="css" filename="Alert.css">{act5SolutionCssCode}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="body2" muted bottomMargin>
            <Strong>Three:</Strong> the consumer just nests them. No coordination, no shared state.
          </Text>
          <CodeBlock language="tsx" filename="DashboardPage.tsx">{act5SolutionUsageCode}</CodeBlock>
        </Box>

        <LiveDemo
          description={
            <>
              Two tenants, two brand colors. Each tile's Open button uses the tenant color.
              Each alert inside picks up its own color. Closer DOM ancestor wins.
            </>
          }
          caption={
            <>
              Inspect a Retry button. <code>--color-primary</code> resolves to{' '}
              <code>--color-error</code> on the closest <code>.Alert--root</code> ancestor,
              not the tenant value on the outer <code>.Card--root</code>.
            </>
          }
        >
          <Box
            className="d-grid gap-3"
            mixin={{
              smallScreen: { gridColTemplate: '1fr' },
              mediumScreen: { gridColTemplate: '1fr 1fr' },
            }}
          >
            <Card scopedStyle={{ '--color-primary': '#10b981', '--color-border': '#10b981' }}>
              <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 3 }}>
                <Text variant="h5" tag="span">Acme Robotics</Text>
                <Badge variant="primary">Live</Badge>
              </Box>
              <Box mixin={{ mb: 3 }}>
                <Button variant="primary" size="sm">Open</Button>
              </Box>
              <div className="Alert--root Alert--error">
                <Text variant="body2" mixin={{ mb: 2 }}>Build failed on commit abc123.</Text>
                <Button variant="primary" size="sm">Retry</Button>
              </div>
            </Card>

            <Card scopedStyle={{ '--color-primary': '#f59e0b', '--color-border': '#f59e0b' }}>
              <Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 3 }}>
                <Text variant="h5" tag="span">Flux Energy</Text>
                <Badge variant="primary">Live</Badge>
              </Box>
              <Box mixin={{ mb: 3 }}>
                <Button variant="primary" size="sm">Open</Button>
              </Box>
              <div className="Alert--root Alert--warning">
                <Text variant="body2" mixin={{ mb: 2 }}>Storage 80% full. Upgrade soon.</Text>
                <Button variant="primary" size="sm">Upgrade</Button>
              </div>
            </Card>
          </Box>
        </LiveDemo>

        <LeverCard>{act5Lever}</LeverCard>

        <Card mixin={{ mt: 3 }} className="CaseStudyPage--insight">
          <Text variant="body2">
            <Strong>The deeper insight:</Strong> {act5Insight}
          </Text>
        </Card>

        <Card variant="subtle" mixin={{ mt: 3 }}>
          <Text variant="body2" muted>
            <Strong>Where this stops being free:</Strong> {act5Footnote}
          </Text>
        </Card>
      </Section>

      {/* CLOSING ───────────────────────────────────────────────────────── */}
      <Section scopedStyle={{ '--section-background': 'var(--color-bg-subtle)' }}>
        <Text variant="h2" bottomMargin>{closingTitle}</Text>
        <Text isPretty mixin={{ mb: 4 }}>{closingIntro}</Text>

        <Box
          className="d-grid gap-3"
          mixin={{
            smallScreen: { gridColTemplate: '1fr' },
            mediumScreen: { gridColTemplate: '1fr 1fr' },
          }}
        >
          {closingTradeoffs.map(tradeoff => (
            <Card key={tradeoff.title} title={tradeoff.title}>
              <Text variant="body2" muted>{tradeoff.body}</Text>
            </Card>
          ))}
        </Box>
      </Section>
    </div>
  );
}
