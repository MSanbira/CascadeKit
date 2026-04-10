import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import { ScopedStyle, type ScopedStylesObj, type LayerOptions } from '../ScopedStyle';
import './Section.css';


interface SectionProps {
  children: React.ReactNode;
  className?: string;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Section({ children, className = '', mixin, scopedStyle, scopedLayer }: SectionProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  return (
    <section className={classNames('Section', [mixinClassName, className])} style={mixinStyle}>
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {children}
    </section>
  );
}
