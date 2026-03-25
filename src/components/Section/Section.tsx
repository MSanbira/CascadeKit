import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  mixin?: MixinProps;
}

export function Section({ children, className = '', mixin }: SectionProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <section className={classNames('Section', [mixinClassName, className])} style={mixinStyle}>
      {children}
    </section>
  );
}
