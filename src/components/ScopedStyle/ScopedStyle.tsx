import { parseStyles, type ScopedStylesObj, type LayerOptions } from '../../helpers/scopedStyle';

interface ScopedStyleProps {
  style?: ScopedStylesObj;
  layer?: LayerOptions;
}

export function ScopedStyle({ 
  style = {}, 
  layer = 'component-overrides' 
}: ScopedStyleProps) {
  const stylesString = parseStyles(style);
  if (!stylesString) return null;
  
  return (
    <style>
      {`@layer ${layer}{ @scope { :scope { ${stylesString} } } }`}
    </style>
  );
}
