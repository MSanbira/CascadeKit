# CascadeKit

A modern CSS architecture system using native cascade layers and component co-location.

## Core Principles

1. **Layered Cascade** — All styles live in `@layer` blocks with defined order. Higher layers always win.
2. **No Inline Styles** — Styles via classes, not `style` attributes. Inline breaks cascade control.
3. **Naming Convention** — `ComponentName--element` for all classes. Readable, greppable, no hashes.
4. **Co-located CSS** — Each component imports its own CSS file. Tree-shaking: unused components = unused CSS.
5. **Token-Driven Values** — All values derive from `--base-size` and design tokens.

## Layer Order

```css
@layer base, utils, components, pages, component-overrides, user-overrides;
```

| Layer | Purpose |
|-------|---------|
| `base` | Design tokens, resets, typography |
| `utils` | Layout utilities (flex, grid, gaps) |
| `components` | Component styles + variants |
| `pages` | Page-specific compositions |
| `component-overrides` | Modifiers, sizes, states, mixins |
| `user-overrides` | Final customizations |

## System Tools

- **`classNames` helper** — Auto-adds `--root`, enforces naming convention
- **`mixin` prop** — Layout via CSS vars + classes (not inline styles)
- **Layout utils** — Composable classes: `d-flex-gap-2-ali-center`

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
/src
  /styles            # Global styles (layers.css, base.css, utils.css)
  /components        # Reusable UI components
    /Button
    /Card
    /Text
    /Box
    /Badge
    /CodeBlock
    /Layout
    /Navbar
    /Sidebar
    /Section
  /pages             # Documentation pages
  /helpers           # classNames, mixin helpers
```

## License

MIT
