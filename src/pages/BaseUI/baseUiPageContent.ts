export const installExample = `# Base UI ships behavior + a11y, zero CSS.
# Install it as the primitive layer:
npm install @base-ui/react`;

export const switchComponentExample = `import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import './Switch.css';

type BaseSwitchRootProps = React.ComponentProps<typeof BaseSwitch.Root>;

interface SwitchProps extends Omit<BaseSwitchRootProps, 'className' | 'style'> {
  className?: string;
  mixin?: MixinProps;
}

export function Switch({ className = '', mixin, ...props }: SwitchProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);

  return (
    <BaseSwitch.Root
      className={classNames('Switch--root', [mixinClassName, className])}
      style={mixinStyle}
      {...props}
    >
      <BaseSwitch.Thumb className="Switch--thumb" />
    </BaseSwitch.Root>
  );
}`;

export const switchCssExample = `@layer components {
  .Switch--root {
    --switch-track-bg: var(--color-bg-muted);
    --switch-thumb-bg: var(--color-bg);
    /* ...track box, padding, radius... */
    background: var(--switch-track-bg);
  }
  .Switch--thumb {
    background: var(--switch-thumb-bg);
    transition: transform var(--transition-base);
  }
}

@layer component-overrides {
  /* Base UI exposes state as data-attributes.
     CascadeKit just reacts to them in the cascade. */
  .Switch--root[data-checked] {
    --switch-track-bg: var(--color-primary);
  }
  .Switch--root[data-checked] .Switch--thumb {
    transform: translateX(/* track - thumb */);
  }
  .Switch--root[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}`;

export const renderPropExample = `import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Button } from '../Button/Button';

// Your fully-styled CascadeKit Button BECOMES the trigger.
// No re-styling: variant, mixin and scopedStyle all still work,
// and Base UI injects the click handler, ref, and ARIA wiring.
<BaseDialog.Trigger render={<Button variant="primary">Open dialog</Button>} />

// Same trick for the close button:
<BaseDialog.Close render={<Button variant="secondary" />}>Close</BaseDialog.Close>`;

export const portalExample = `// The popup is PORTALLED to the end of <body>, outside the trigger's
// DOM subtree. So @scope and CSS-variable inheritance can't reach it
// from the trigger. The fix: scope the popup itself.

<BaseDialog.Portal>
  <BaseDialog.Backdrop className="Dialog--backdrop" />
  <BaseDialog.Popup className="Dialog--popup">
    {/* ScopedStyle lives INSIDE the popup -> :scope === the popup,
        so theming + var inheritance work across the portal. */}
    <ScopedStyle style={scopedStyle} layer={scopedLayer} />
    {children}
  </BaseDialog.Popup>
</BaseDialog.Portal>`;

export const portalUsageExample = `// Theme a single dialog instance. The green cascades to the
// primary Button INSIDE the popup via CSS-variable inheritance,
// because the styles are scoped to the popup, not the trigger.
<Dialog
  trigger={<Button variant="primary">Themed dialog</Button>}
  title="CMS-driven theming"
  scopedStyle={{ '--color-primary': '#10b981' }}
>
  <Button variant="primary">I inherit the green</Button>
</Dialog>`;

export const dataAttrExample = `<!-- What Base UI renders. CascadeKit styles the data-* hooks. -->
<button class="Switch--root" data-checked role="switch" aria-checked="true">
  <span class="Switch--thumb" data-checked></span>
</button>`;
