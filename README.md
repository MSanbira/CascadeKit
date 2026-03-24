# CascadeKit

A modern CSS architecture system using native cascade layers and component co-location.

## Core Principles

- **Native CSS** — No CSS-in-JS, no runtime overhead
- **Co-located CSS** — Each component imports its own CSS file
- **Cascade Layers** — Strict use of `@layer` for predictable cascade control
- **Clear Naming** — `ComponentName--element` convention for readable class names

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
/src
  /components        # Reusable UI components
    /Button
    /Card
    /CodeBlock
    /Heading
    /Layout
    /Navbar
    /Section
    /Sidebar
  /pages             # Documentation pages
  /styles            # Global styles (layers.css, base.css, utils.css)
```

## Layer Order

```css
@layer base, utils, components, pages, overrides;
```

## License

MIT
