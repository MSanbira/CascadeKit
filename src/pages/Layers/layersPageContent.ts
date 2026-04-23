export const layerDefinition = `/* This MUST be first CSS import */
@layer base, utils, components, pages, component-overrides, user-overrides;`;

export const baseLayerExample = `@layer base {
  :root {
    --color-primary: #6366f1;
    --space-4: 1rem;
    --radius-md: 8px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
}`;

export const utilsLayerExample = `@layer utils {
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .flex { display: flex; }
  .gap-4 { gap: var(--space-4); }
  .text-center { text-align: center; }
}`;

export const componentsLayerExample = `@layer components {
  .Button--root {
    padding: var(--space-2) var(--space-4);
    background: var(--color-primary);
    border-radius: var(--radius-md);
  }

  .Card--root {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
  }
}`;

export const pagesLayerExample = `@layer pages {
  .HomePage--hero {
    padding-block: var(--space-16);
    text-align: center;
  }

  /* Override component in page context */
  .HomePage--hero .Button--root {
    font-size: var(--text-lg);
  }
}`;

export const componentOverridesLayerExample = `@layer component-overrides {
  /* Component modifiers, mixin styles, scoped styles */
  .Text--bold {
    font-weight: var(--font-weight-bold);
  }

  .Button--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

/* Scoped styles also inject here by default */
@layer component-overrides {
  @scope { :scope { --color-primary: #10b981; } }
}`;

export const userOverridesLayerExample = `@layer user-overrides {
  /* Themes override tokens globally */
  [data-theme="midnight"] {
    --color-primary: #7c3aed;
    --color-bg: #0f0d1a;
  }

  /* Emergency fixes, A/B tests */
  .Button--root[data-experiment="new-cta"] {
    background: var(--color-accent);
  }
}`;
