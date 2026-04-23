export const folderStructure = `/src
  /components
    /Button
      Button.tsx      # Component logic
      Button.css      # Component styles
      index.ts        # Public export
    /Card
      Card.tsx
      Card.css
      index.ts`;

export const componentTSX = `import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  mixin?: MixinProps;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  mixin,
  ...props 
}: ButtonProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <button 
      className={classNames('Button--root', [\`Button--\${variant}\`, \`Button--\${size}\`, mixinClassName, className])} 
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      {children}
    </button>
  );
}`;

export const componentCSS = `@layer components {
  .Button--root {
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    /* CSS custom properties with fallbacks */
    background: var(--button-bg-color, var(--color-bg));
    color: var(--button-color, var(--color-text));
    border: 1px solid var(--button-border-color, transparent);
  }

  .Button--root:hover {
    background: var(--button-bg-color-hover, var(--button-bg-color));
  }

  /* Variants only set CSS custom properties */
  .Button--primary {
    --button-bg-color: var(--color-primary);
    --button-color: var(--color-bg);
    --button-bg-color-hover: var(--color-primary-hover);
  }

  .Button--secondary {
    --button-bg-color: var(--color-bg-subtle);
    --button-border-color: var(--color-border);
  }
}

@layer component-overrides {
  /* Sizes live in higher-priority layer */
  .Button--sm { padding: var(--space-0_5) var(--space-1_5); }
  .Button--md { padding: var(--space-1) var(--space-2); }
  .Button--lg { padding: var(--space-1_5) var(--space-3); }

  /* Disabled state resets hover/active to prevent visual feedback */
  .Button--root:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: var(--button-bg-color, var(--color-bg));
    }
    
    &:active {
      border-color: var(--button-border-color, transparent);
    }
  }
}`;

export const namingExamples = `.Card--root { }        /* Container */
.Card--header { }      /* Child element */
.Card--content { }     /* Child element */
.Card--footer { }      /* Child element */
.Card--elevated { }    /* Variant */
.Card--interactive { } /* Behavior modifier */`;
