import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import { ScopedStyle, type ScopedStylesObj, type LayerOptions } from 'cascade-kit-tools/scopedStyle';
import './Section.css';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Section({ 
  children, 
  className = '', 
  mixin, 
  scopedStyle, 
  scopedLayer,
  ...restProps
}: SectionProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);

  return (
    <section 
      className={classNames('Section--root', [mixinClassName, className])} 
      style={{...mixinStyle, ...restProps.style}}
      {...restProps}
    >
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {children}
    </section>
  );
}
