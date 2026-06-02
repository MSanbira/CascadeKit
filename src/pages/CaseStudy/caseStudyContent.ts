// HERO ────────────────────────────────────────────────────────────────────────

export const heroIntro = `You're shipping the dashboard for a multi-tenant SaaS. Each tenant has its own brand color. Some workspaces are pinned. Three teams ship into the same Card. Tiles show alerts that need their own color. Let's build the tile, hit each wall, and watch CascadeKit get out of the way.`;

export const heroCast = [
  'Per-tenant brand color from the backend',
  'Pinned workspaces with an accent border',
  'A header to lay out without writing CSS',
  'Three product teams sharing one Card',
  'Inline alerts that fight the tenant color',
];

// ACT 1 ── Per-tenant brand color (the inline-style trap) ─────────────────────

export const act1Problem = `Each card needs tenant.brandColor on the primary button, the badge, and a soft hover glow. The color comes from the backend, unknown at build time.`;

export const act1NaiveCode = `function WorkspaceTile({ workspace }) {
  return (
    <Card style={{
      background: workspace.color,
      boxShadow: \`0 0 20px \${workspace.color}\`,
    }}>
      <Text variant="h5">{workspace.name}</Text>
      <Button variant="primary">Open</Button>
    </Card>
  );
}`;

export const act1Walls = [
  'Inline style cannot express :hover, :focus, or @media. The glow is permanent.',
  'Dark mode tokens lose to the inline value. The card looks wrong in dark.',
  'The inner Button still uses the global --color-primary. It misses the tenant color.',
  'Inline styles bypass the cascade. user-overrides cannot patch them.',
];

export const act1SolutionCode = `function WorkspaceTile({ workspace }) {
  return (
    <Card scopedStyle={{
      '--color-primary': workspace.color,
      '&:hover': {
        boxShadow: \`0 0 20px \${workspace.color}\`,
      },
    }}>
      <Text variant="h5">{workspace.name}</Text>
      <Button variant="primary">Open</Button>
    </Card>
  );
}`;

export const act1Lever = `scopedStyle renders a real <style> tag in @layer component-overrides, scoped to this Card. Rebinding --color-primary cascades into every child, so the Button picks it up automatically. Hover, media queries, and dark mode all keep working. user-overrides can still beat it.`;

// ACT 2 ── The pinned state (semantic class + layer separation) ──────────────

export const act2Problem = `Pinned workspaces show a left accent border in the tenant color and lift on hover. "Pinned" is a finite known state of a Card, not a value from the backend. Where does it live?`;

export const act2NaiveCode = `// Attempt 1: reach for scopedStyle (we just learned it!)
<Card scopedStyle={workspace.pinned ? {
  borderLeft: '3px solid var(--color-primary)',
  '&:hover': { transform: 'translateY(-1px)' },
} : undefined}>

// Attempt 2: bake it into the base in @layer components
@layer components {
  .Card--root { /* base identity */ }
  .Card--pinned {
    border-left: 3px solid var(--color-primary);
  }
  .Card--pinned:hover {
    transform: translateY(-1px);
  }
}

// Attempt 3: reach across from the page
@layer pages {
  .DashboardPage--root .Card--root[data-pinned="true"] {
    border-left: 3px solid var(--color-primary);
  }
}`;

export const act2Walls = [
  'Attempt 1: a real <style> tag per pinned card, when a class would do. scopedStyle is for dynamic values, not finite states.',
  'Attempt 2: state mixed with identity in @layer components. A page that wants to disable the lift is back to specificity tricks.',
  'Attempt 3: deep page selectors revive the specificity wars layers were meant to end.',
];

export const act2SolutionTsxCode = `import { classNames } from 'cascade-kit-tools/classNames';

interface CardProps {
  pinned?: boolean;
  children: React.ReactNode;
}

export function Card({ pinned, children }: CardProps) {
  return (
    <div className={classNames('Card--root', [], { 'Card--pinned': pinned })}>
      {children}
    </div>
  );
}`;

export const act2SolutionCssCode = `@layer components {
  .Card--root {
    /* identity: what a Card always is */
    padding: var(--space-3);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
  }
}

@layer component-overrides {
  /* state that layers on top of identity */
  .Card--pinned {
    border-left: 3px solid var(--color-primary);
    transition: transform var(--transition-base);
  }

  .Card--pinned:hover {
    transform: translateY(-1px);
  }
}`;

export const act2SolutionUsageCode = `<Card pinned={workspace.isPinned}>
  <Text variant="h5">{workspace.name}</Text>
</Card>`;

export const act2Lever = `Three things at once. (1) classNames toggles classes from a boolean via its third argument. (2) .Card--pinned is greppable, readable in DevTools, no source maps. (3) @layer components holds identity (what a Card always is). @layer component-overrides holds state that layers on top: pinned, disabled, loading. Higher layer wins, so a page can still beat a state without fighting specificity.`;

export const act2Footnote = `When does scopedStyle still make sense for state? When the value is dynamic: a tenant color, a progress percentage, a CMS accent. "Pinned" has one defined visual. Use a class. Rule of thumb: known set of states, use a class; value from data, use scopedStyle.`;

// ACT 3 ── The layout reflex (consumer-side discipline) ──────────────────────

export const act3Problem = `Header: title left, button right, vertically centered, 16px between, 24px below.`;

export const act3NaiveCode = `// DashboardPage.css
@layer pages {
  .DashboardPage--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }
}`;

export const act3Walls = [
  'DashboardPage.css quietly grows past 200 lines as you keep composing.',
  'Spacing values are hardcoded and drift from the token scale.',
  'The same pattern reappears as .Settings--header, .Billing--header, .Reports--header. Twelve copies.',
  'Naming a wrapper "Dashboard--header" is a smell. There\'s no reusable concept here, just flex and gap.',
];

export const act3SolutionCode = `<Box className="d-flex ali-center jc-sb gap-2" mixin={{ mb: 3 }}>
  <Text variant="h3">Workspaces</Text>
  <Button variant="primary">New workspace</Button>
</Box>`;

export const act3Lever = `Layout utilities live in @layer utils with :where(), so they never fight specificity. mixin generates a class in component-overrides for the per-instance margin. Spacing comes from the token scale. Zero new CSS. "Page CSS stays ~20 lines" isn't a guideline. It falls out of the architecture.`;

// ACT 4 ── Three teams, one Card (the user-overrides payoff) ─────────────────

export const act4Problem = `The Card is shared across the product. Marketing wants it rounder and gradient-backed on their landing page only. They don't own Card.tsx.`;

export const act4NaiveCode = `// MarketingLanding.css: escalating force
.MarketingLanding--root .Card--root {
  border-radius: 16px !important;
  background: linear-gradient(...) !important;
}

// Or: fork the primitive
function MarketingCard(props) {
  return <Card {...props} className="MarketingCard" />;
}
.MarketingCard.Card--root.Card--root {
  /* doubled-up class to win specificity */
}`;

export const act4Walls = [
  '!important works once, then poisons every future override.',
  'Forking the Card means tracking two components forever. Bug fixes diverge.',
  'Doubling class names for specificity is unreadable and brittle.',
  'None of it survives a Card internal refactor.',
];

export const act4SolutionCode = `// MarketingLanding.css
@layer user-overrides {
  .MarketingLanding--root .Card--root {
    border-radius: var(--radius-xl);
    background: linear-gradient(
      135deg,
      var(--color-bg) 0%,
      var(--color-bg-subtle) 100%
    );
  }
}`;

export const act4Lever = `user-overrides sits at the top of the cascade by definition. No !important needed, ever. Marketing polishes. Card team refactors. Both keep moving without coordination. This is the moment design-system veterans nod at.`;

// ACT 5 ── The clashing theme (theme islands via class-based rebinding) ──────

export const act5Problem = `Tiles show inline status alerts: "Build failed" (red), "Storage 80% full" (amber), "Deploy succeeded" (green). Each alert has an action button that should match its variant. But the Card is already tinted with the tenant brand from Act 1, so the alert's Retry button renders in tenant color instead of red. Two contexts, one --color-primary. One has to lose.`;

export const act5NaiveCode = `// Attempt 1: prop-drill the color through every nested primitive
<Alert variant="error" themeColor="#ef4444">
  <Button themeColor="#ef4444" onClick={retry}>Retry</Button>
</Alert>

// Attempt 2: !important
.Alert--error .Button--primary {
  background: red !important;
}

// Attempt 3: inline style (Act 1 already debunked this)
<Button style={{ background: 'red' }}>Retry</Button>`;

export const act5Walls = [
  'Attempt 1: every primitive (Button, Badge, Icon, Link) needs a themeColor prop. The rot spreads through the whole library.',
  'Attempt 2: !important poisons every future override and still misses the badge, icon, and link.',
  'Attempt 3: inline styles bypass the cascade. No hover, no media, no user-overrides. We learned this in Act 1.',
];

export const act5SolutionTsxCode = `import { classNames } from 'cascade-kit-tools/classNames';

type AlertVariant = 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  children: React.ReactNode;
}

export function Alert({ variant = 'success', children }: AlertProps) {
  return (
    <div className={classNames('Alert--root', [\`Alert--\${variant}\`])}>
      {children}
    </div>
  );
}`;

export const act5SolutionCssCode = `@layer components {
  .Alert--root {
    --alert-color: var(--color-success);

    border-left: 3px solid var(--alert-color);
    padding: var(--space-2);
    background: var(--color-bg-subtle);

    /* The lever: rebind --color-primary inside the alert's subtree.
       Every descendant Button, Badge, and Link picks it up automatically. */
    --color-primary: var(--alert-color);
    --color-primary-hover: var(--alert-color);
  }
}

@layer component-overrides {
  .Alert--warning { --alert-color: var(--color-warning); }
  .Alert--error   { --alert-color: var(--color-error); }
}`;

export const act5SolutionUsageCode = `<Card scopedStyle={{ '--color-primary': tenant.color }}>
  <Text variant="h5">{tenant.name}</Text>

  {/* Tenant color */}
  <Button variant="primary">Open</Button>

  <Alert variant="error">
    <Text>Build failed on commit abc123</Text>
    {/* Red: Alert is a closer ancestor than Card */}
    <Button variant="primary">Retry</Button>
  </Alert>
</Card>`;

export const act5Lever = `Three things at once. (1) CSS variables resolve through the DOM ancestor chain. The closest binding wins. Alert is closer than Card, so Alert's color reigns inside it. (2) Any element can be a theme island by rebinding tokens via a regular class. No special primitive, no scopedStyle, no props. (3) Composability is automatic. Drop an Alert into any tenant-themed Card and the colors fall out of the cascade.`;

export const act5Insight = `Tokens are inputs to the cascade, not outputs. The cascade resolves them at use site by walking the DOM. Once scopedStyle and class-based rebinding feel like the same idea (place a fresh binding somewhere in the tree), nested theming stops being a problem to solve. It becomes a side effect of how CSS works. CascadeKit just makes the pattern intentional.`;

export const act5Footnote = `This works because the inner Button reads from --color-primary. If alerts must never inherit from buttons, introduce --alert-action-color and have the Alert's Button read from it instead. Choosing which tokens are shared (call to action) versus isolated (signal) is the design-system architect's most consequential decision.`;

// CLOSING ─────────────────────────────────────────────────────────────────────

export const closingTitle = `What CascadeKit asks in return`;

export const closingIntro = `CascadeKit is opinionated. It earns its weight, but it's honest about the cost.`;

export const closingTradeoffs = [
  {
    title: 'A choice every time',
    body: 'variant, CSS class, scopedStyle, mixin, layout utility: there is a right answer for each composition, and you have to think about it. The decision tree is the price of explicit cascade control.',
  },
  {
    title: 'Compounding interest',
    body: 'The discipline pays off at month six, not week one. The first feature feels like more decisions. The fiftieth feels like none, because the architecture already answered them.',
  },
];
