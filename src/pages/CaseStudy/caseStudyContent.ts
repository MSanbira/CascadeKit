// HERO ────────────────────────────────────────────────────────────────────────

export const heroIntro = `You're shipping the dashboard for a multi-tenant SaaS. Each tenant has its own brand color. Some workspaces are pinned. Three teams ship into the same Card. Some buttons need to break out of the tenant theme. Let's build the tile, hit each wall, and watch CascadeKit get out of the way.`;

export const heroCast = [
  'Per-tenant brand color from the backend',
  'Pinned workspaces with an accent border',
  'A header to lay out without writing CSS',
  'Three product teams sharing one Card',
  'A red Retry button inside a tenant-tinted tile',
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

// ACT 5 ── Breaking out of ambient theming (variants + scopedLayer) ─────────

export const act5Problem = `Inside a tenant-tinted Card from Act 1, a "Retry" button needs to be red. Errors must read as errors regardless of brand. The Card already rebound --color-primary to the tenant color, and a default Button would happily inherit it. How does red win?`;

export const act5NaiveCode = `// Attempt 1: wrap in an Alert that rebinds --color-primary for its subtree
<Alert variant="error">
  <Button variant="primary">Retry</Button>
</Alert>

// Attempt 2: !important on the button
.Button--retry { background: red !important; }

// Attempt 3: inline style (Act 1 already debunked this)
<Button style={{ background: 'red' }}>Retry</Button>`;

export const act5Walls = [
  'Attempt 1: a primitive that exists only for theming. The count grows every time a region needs a different palette.',
  'Attempt 2: !important poisons every future override (Act 4).',
  'Attempt 3: inline styles bypass the cascade (Act 1).',
];

export const act5SolutionTsxCode = `<Card scopedStyle={{ '--color-primary': tenant.color }}>
  <Button variant="primary">Open</Button>     {/* tenant color via inheritance */}
  <Button variant="error">Retry</Button>       {/* red via direct rule */}
</Card>`;

export const act5SolutionCssCode = `// Button.css
@layer component-overrides {
  /*
   * Errors must read as errors regardless of ambient page theming.
   * Layer choice encodes intent: high enough to beat @layer pages.
   */
  .Button--error {
    --button-bg-color: var(--color-error);
    --button-bg-color-hover: color-mix(in srgb, var(--color-error) 85%, var(--color-contrast));
    --button-color: var(--color-bg);
  }
}`;

export const act5MainExplanation = `The Card sets --color-primary on .Card--root; descendants inherit it. Button--primary reads it via inheritance and renders tenant-colored. Button--error rebinds --button-bg-color directly on the Button, and direct rules always beat inheritance. The variant wins, no wrapper needed.`;

// ── Sub-section: scopedLayer as altitude ─────────────────────────────────────

export const act5SubTitle = `When scopedLayer actually matters`;

export const act5SubIntro = `The story above works because variants directly target their element. But scopedStyle has another mode: nested selectors targeting descendants directly. There, scopedLayer is a real lever.`;

export const act5SubProblemCode = `{/* Nested selector: this rule directly targets every Button
    inside the Card, just like Button--error does. */}
<Card scopedStyle={{
  '.Button--root': { '--button-bg-color': tenant.color },
}}>
  <Button variant="error">Retry</Button>
</Card>`;

export const act5SubProblemExplanation = `With the default scopedLayer (component-overrides), the Card's :scope .Button--root rule competes with Button--error at the same layer. The Card wins on specificity (0,2,0 vs 0,1,0). Retry comes out tenant-colored. Wrong.`;

export const act5SubSolutionCode = `<Card
  scopedStyle={{
    '.Button--root': { '--button-bg-color': tenant.color },
  }}
  scopedLayer="pages"
>
  <Button variant="error">Retry</Button>
</Card>`;

export const act5SubSolutionExplanation = `Card's rule now lives in @layer pages. Button--error lives in @layer component-overrides. Higher layer wins regardless of specificity. Retry is red. Layer choice matched intent.`;

export const act5Lever = `Two levers, one principle. (1) Variants are escape hatches. They directly target their element, so they beat ambient theming through inheritance. Reach for a variant before a wrapper. (2) scopedLayer is altitude. Tenant theming is page context, component states are component-state. Match layer to intent and the cascade resolves what you meant, even when scope and variant target the same property.`;

export const act5Insight = `Every theming tool sits at a cascade altitude. Variants in component-overrides are intentional break-outs. Variants in components are default styling. scopedStyle at component-overrides is component-level; at pages, ambient context. Layer choice encodes how authoritative a rule is and what's allowed to override it.`;

export const act5Footnote = `When does the wrapper still earn its place? When a whole region needs a coordinated alternative theme: an alert with heading, body, action, and badge all sharing the alert color. Four children with four variants is noise; a wrapper that rebinds tokens once is cleaner. Variants for one element, wrappers for a context.`;

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
