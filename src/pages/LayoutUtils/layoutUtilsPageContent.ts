export const flexExample = `<div className="d-flex gap-2 ali-center">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>

<div className="d-flex dir-col gap-1">
  <span>Stacked 1</span>
  <span>Stacked 2</span>
</div>`;

export const gridExample = `<div className="d-grid gap-3">
  <div>Cell 1</div>
  <div>Cell 2</div>
</div>

<div className="col-container col-num-3 gap-2">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`;

export const combinedExample = `{/* Static layout with utility classes */}
<div className="d-flex gap-2 ali-center">
  {/* Dynamic spacing with mixin */}
  <Text mixin={{ p: 2, smallScreen: { p: 1 } }}>
    Responsive padding
  </Text>
</div>

{/* Grid layout + responsive mixin */}
<Box 
  className="col-container col-num-2 gap-3"
  mixin={{ smallScreen: { gridColTemplate: '1fr' } }}
>
  <Card>Column 1</Card>
  <Card>Column 2</Card>
</Box>`;

export const classReference = {
  flex: [
    { class: 'd-flex', desc: 'display: flex' },
    { class: 'dir-col', desc: 'flex-direction: column' },
    { class: 'f-wrap', desc: 'flex-wrap: wrap' },
    { class: 'min-0', desc: 'min-width: 0 (prevent overflow)' },
  ],
  grid: [
    { class: 'd-grid', desc: 'display: grid' },
    { class: 'col-container', desc: 'Grid with 1 column' },
    { class: 'col-num-2', desc: 'Grid with 2 equal columns' },
    { class: 'col-num-3', desc: 'Grid with 3 equal columns' },
    { class: 'col-num-4', desc: 'Grid with 4 equal columns' },
    { class: 'col-num-auto', desc: 'Auto-fill columns (use --auto-col-min-width)' },
    { class: 'with-divider', desc: 'Add dividers between columns' },
  ],
  alignment: [
    { class: 'ali-start', desc: 'align-items: flex-start' },
    { class: 'ali-center', desc: 'align-items: center' },
    { class: 'ali-end', desc: 'align-items: flex-end' },
    { class: 'ali-baseline', desc: 'align-items: baseline' },
    { class: 'ali-stretch', desc: 'align-items: stretch' },
    { class: 'jc-start', desc: 'justify-content: flex-start' },
    { class: 'jc-center', desc: 'justify-content: center' },
    { class: 'jc-end', desc: 'justify-content: flex-end' },
    { class: 'jc-sb', desc: 'justify-content: space-between' },
    { class: 'jc-se', desc: 'justify-content: space-evenly' },
  ],
  gap: [
    { class: 'gap-0_25', desc: '2px' },
    { class: 'gap-0_5', desc: '4px' },
    { class: 'gap-1', desc: '8px' },
    { class: 'gap-1_5', desc: '12px' },
    { class: 'gap-2', desc: '16px' },
    { class: 'gap-2_5', desc: '20px' },
    { class: 'gap-3', desc: '24px' },
    { class: 'gap-4', desc: '32px' },
    { class: 'gap-5', desc: '40px' },
    { class: 'gap-6', desc: '48px' },
    { class: 'gap-8', desc: '64px' },
    { class: 'gap-10', desc: '80px' },
    { class: 'no-gap', desc: '0' },
  ],
};
