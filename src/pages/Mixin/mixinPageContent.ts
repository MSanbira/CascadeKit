export const mixinTypeExample = `interface MixinProps {
  // Margin
  m?: number | string;   // all sides
  mt?: number | string;  // top
  mr?: number | string;  // right
  mb?: number | string;  // bottom
  ml?: number | string;  // left
  mx?: number | string;  // horizontal (left + right)
  my?: number | string;  // vertical (top + bottom)
  
  // Padding (same pattern as margin)
  p?, pt?, pr?, pb?, pl?, px?, py?
  
  // Layout
  display?: 'block' | 'flex' | 'grid' | 'none' | ...
  position?: 'relative' | 'absolute' | 'fixed' | ...
  opacity?: number;
  
  // Inset (for positioned elements)
  inset?, top?, right?, bottom?, left?
  
  // Responsive breakpoints
  smallScreen?: MixinBaseProps;
  mediumScreen?: MixinBaseProps;
  bigScreen?: MixinBaseProps;
  
  // Container queries
  smallContainer?: MixinBaseProps;
  mediumContainer?: MixinBaseProps;
  bigContainer?: MixinBaseProps;
}`;

export const basicUsageExample = `<Text mixin={{ mb: 2, px: 1 }}>
  Spacing with base units
</Text>

<Text mixin={{ mb: '16px', px: '8px' }}>
  Spacing with raw CSS values
</Text>`;

export const responsiveExample = `<Text 
  mixin={{ 
    mb: 2,
    smallScreen: { mb: 4 },
    bigScreen: { mb: 1 }
  }}
>
  Mobile-first responsive margin
</Text>`;

export const mobileFirstExample = `// Input:
mixin={{ smallScreen: { mb: 2 } }}

// Mobile-first cascade fills in:
// smallScreen: { mb: 2 }
// mediumScreen: { mb: 2 }  ← auto-filled
// bigScreen: { mb: 2 }     ← auto-filled`;

export const outputExample = `// getMixin({ mb: 2, smallScreen: { mb: 4 } })

// Returns:
{
  className: "MixinPage--margin MixinPage--margin-small-screen ...",
  style: {
    "--mixin-margin": "0 calc(var(--base-size) * 2) 0 0",
    "--mixin-margin-small-screen": "0 calc(var(--base-size) * 4) 0 0",
    ...
  }
}`;

export const cssLayerExample = `@layer component-overrides {
  .MixinPage--margin { margin: var(--mixin-margin); }
  
  @media (max-width: 639px) {
    .MixinPage--margin-small-screen { 
      margin: var(--mixin-margin-small-screen); 
    }
  }
}`;

export const containerExample = `<Text 
  mixin={{ 
    p: 2,
    smallContainer: { p: 1 },
    bigContainer: { p: 4 }
  }}
>
  Padding changes based on container width
</Text>`;
