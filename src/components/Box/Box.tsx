import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import { ScopedStyle, type ScopedStylesObj, type LayerOptions } from 'cascade-kit-tools/scopedStyle';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Box({ 
  children, 
  className = '', 
  mixin, 
  scopedStyle, 
  scopedLayer, 
  ...props 
}: BoxProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);

  return (
    <div
      className={classNames('Box--root', [mixinClassName, className])}
      style={{ ...mixinStyle, ...props.style }}
      {...props}
    >
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {children}
    </div>
  );
}
