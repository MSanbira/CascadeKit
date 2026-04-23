export const buttonSectionDescription = 'The Button component demonstrates CascadeKit\'s variant and size system.';

export const buttonPrinciples = `CascadeKit principles: The base class defines all behavior (hover, active, transitions) 
using CSS variables with sensible fallbacks. Variant classes only set variable values — 
they don't repeat property declarations. This keeps the code DRY and makes adding new variants simple. 
Size and state overrides live in a higher-priority layer to ensure they always win.`;

export const buttonVariantsCode = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`;

export const buttonVariantsCss = `.Button--root {
  background: var(--button-bg-color, var(--color-bg));
  color: var(--button-color, var(--color-text));
  border: 1px solid var(--button-border-color, transparent);
}

.Button--root:hover {
  background: var(--button-bg-color-hover, var(--button-bg-color));
}

.Button--primary {
  --button-bg-color: var(--color-primary);
  --button-color: var(--color-bg);
  --button-bg-color-hover: var(--color-primary-hover);
}`;

export const buttonSizesCode = `<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`;

export const buttonDisabledCss = `@layer component-overrides {
  .Button--root:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: var(--button-bg-color, var(--color-bg));
    }
  }
}`;

export const userProfileDescription = 'A common pattern for displaying user information with actions.';

export const userProfilePrinciples = `CascadeKit principles: Component composition (Card + Badge + Button), 
utility classes for layout (d-flex gap-4 ali-center), 
responsive grid via mixin (smallScreen/mediumScreen), 
page-specific CSS for avatar styling.`;

export const notificationsDescription = 'Dismissible alerts with different severity levels.';

export const notificationsPrinciples = `CascadeKit principles: BEM-style variant classes 
(--notification-success, --notification-warning), 
design tokens for colors (var(--color-success)), 
CSS color-mix() for computed backgrounds.`;

export const pricingDescription = 'Interactive pricing comparison with selection state.';

export const pricingPrinciples = `CascadeKit principles: Layer cascade for state overrides 
(@layer pages overrides @layer components), 
responsive breakpoints via mixin (bigScreen: gridColTemplate), 
dynamic className for selected state without runtime CSS.`;

export const pricingPlans = [
  { id: 'starter' as const, name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Email Support'] },
  { id: 'pro' as const, name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Analytics'] },
  { id: 'enterprise' as const, name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Dedicated Account', 'Custom Integrations', 'SLA'] },
];

export const contactFormDescription = 'Form layout with validation states and responsive design.';

export const contactFormPrinciples = `CascadeKit principles: Page-specific form styles in @layer pages, 
focus states using design tokens (var(--color-primary)), 
utility classes for form layout (d-flex dir-col gap-4), 
no CSS-in-JS — pure native CSS transitions.`;

export const statsDashboardDescription = 'Data visualization cards with responsive grid layout.';

export const statsDashboardPrinciples = `CascadeKit principles: Component variants via props (Card variant="subtle"), 
conditional Badge variants for positive/negative states, 
4-column responsive grid demonstrating mixin breakpoints, 
all styling defined in component CSS — zero inline styles.`;

export const statsData = [
  { label: 'Total Users', value: '12,345', change: '+12%', positive: true },
  { label: 'Revenue', value: '$54,321', change: '+8%', positive: true },
  { label: 'Orders', value: '1,234', change: '-3%', positive: false },
  { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
];

export const scopedStylesDescription = 'Override CSS custom properties and regular CSS properties per-component instance using CSS @scope.';

export const scopedStylesPrinciples = `CascadeKit principles: The scopedStyle prop accepts both CSS custom properties 
(design tokens like --color-primary) and regular CSS properties (boxShadow, background). 
It injects a scoped <style> element within @layer component-overrides — 
per-instance styling that respects the cascade without inline styles.`;

export const scopedStylesUsageCode = `<Card scopedStyle={{ 
  '--color-primary': '#8b5cf6',
  transition: 'transform 0.2s',
  
  '&:hover': {
    transform: 'translateY(-4px)'
  },
  
  '@media (prefers-color-scheme: dark)': {
    '--color-primary': '#a78bfa',
    '&:hover': {
      boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)'
    }
  }
}}>
  <Button variant="primary">Action</Button>
</Card>`;

export const scopedStylesExplanation = 'Object values are nested CSS rules — use & for pseudo-selectors, nest infinitely.';
