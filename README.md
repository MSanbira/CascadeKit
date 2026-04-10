# CascadeKit

CSS architecture using native cascade layers, co-located styles, and zero runtime.

## Layer Order

```css
@layer base, utils, components, pages, component-overrides, user-overrides;
```

Higher layers always win—no specificity wars.

## Principles

1. **Layers over specificity** — `@layer` controls cascade order, not selector complexity
2. **Classes over inline** — All styling through CSS classes, CSS vars for dynamic values
3. **Co-located CSS** — Components import their own `.css` files (tree-shakeable)
4. **Token-driven** — Values derive from `--base-size` and design tokens
5. **Readable names** — `ComponentName--element` convention, no generated hashes

## Quick Start

```bash
npm install && npm run dev
```

## Key Patterns

### Layout Utilities
```tsx
<div className="d-flex gap-2 ali-center">...</div>
<div className="col-container col-num-3 gap-4">...</div>
<div className="inline-container">...</div>  // for container queries
```

### Mixin (responsive styles without inline)
```tsx
<Box mixin={{ p: 2, smallScreen: { p: 1 } }}>...</Box>
<Card mixin={{ mediumContainer: { gridColTemplate: '1fr 1fr' } }}>...</Card>
```

### Scoped Styles (per-instance overrides)
```tsx
<Card scopedStyle={{ '--color-primary': userColor }}>...</Card>
```

### Naming Convention
All classes: `ComponentName--element`, `ComponentName--variant`

## Structure

```
src/
  styles/       # layers.css, base.css, layoutUtils.css, mixin.css
  components/   # Each imports its own .css file
  helpers/      # classNames, getMixin, scopedStyle
```

## License

MIT
