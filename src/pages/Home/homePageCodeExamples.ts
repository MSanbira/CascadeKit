export const componentModelExample = `/Button
  Button.tsx   ← import './Button.css'
  Button.css   ← @layer components { }
  index.ts     ← public export`;

export const layoutUtilsExample = `<div className="d-flex gap-2 ali-center jc-sb">
  <Badge>Status</Badge>
  <Button variant="ghost" size="sm">Edit</Button>
</div>`;

export const mixinExample = `<Card mixin={{
  p: 4,
  gap: 2,
  smallScreen: { p: 2 },
  bigScreen: { gridColTemplate: '1fr 1fr' }
}}>
  ...
</Card>`;

export const themingExample = `@layer user-overrides {
  [data-theme="midnight"] {
    --color-primary: #7c3aed;
    --color-bg: #0f0d1a;
    --color-surface: #1a1730;
  }
}`;

export const scopedStylesExample = `<Card scopedStyle={{
  '--color-primary': userColor,
  '--color-surface': userBg,
}}>
  Fully custom card instance
</Card>`;

export const aiToolsExample = `{
  "mcpServers": {
    "cascadekit": {
      "command": "cascade-kit-mcp"
    }
  }
}`;
