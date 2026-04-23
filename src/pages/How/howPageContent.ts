export const layerOrderCSS = `/* layers.css - Import this FIRST */
@layer base, utils, components, pages, component-overrides, user-overrides;`;

export const componentImportTSX = `// Button.tsx
import './Button.css';  // CSS loads when component loads

export function Button({ children }) {
  return <button className="Button--root">{children}</button>;
}`;

export const componentCSS = `/* Button.css */
@layer components {
  .Button--root {
    background: var(--color-primary);
    padding: var(--space-2) var(--space-4);
  }
}`;

export const appImportTSX = `// App.tsx
import './styles/layers.css';  // Layer order (first!)
import './styles/base.css';    // Resets, variables
import './styles/utils.css';   // Utility classes

// Component CSS loads automatically via imports
import { Button } from './components/Button';
import { Card } from './components/Card';`;

export const globalClassCSS = `/* Global but structured */
.Button--root { }      /* Unique by convention */
.Button--icon { }      /* Component-scoped */
.Button--label { }     /* No hash needed */`;

export const classNamesHelper = `import { classNames } from 'cascade-kit-tools/classNames';

// classNames auto-adds --root and joins classes
<button className={classNames('Button--root', [\`Button--\${variant}\`, className])}>
  {children}
</button>

// Output: "Button--root Button--primary custom-class"`;

export const inlineStyleBad = `/* ❌ Inline styles bypass the cascade */
<Button style={{ margin: '16px' }}>
  Click me
</Button>

/* user-overrides cannot override this! */
@layer user-overrides {
  .Button--root { margin: 0; }  /* ignored */
}`;

export const cssVarsGood = `/* ✓ CSS vars preserve the cascade */
<Button mixin={{ m: 2 }}>
  Click me
</Button>

/* Generates: style="--mixin-margin: ..." */
/* user-overrides CAN override this! */
@layer user-overrides {
  .Button--root { margin: 0; }  /* works! */
}`;
