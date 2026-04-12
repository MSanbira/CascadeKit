import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Badge.css';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  mixin?: MixinProps;
}

export function Badge({ children, className = '', variant = 'primary', mixin }: BadgeProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <span 
      className={classNames('Badge--root', [`Badge--${variant}`, mixinClassName, className])} 
      style={mixinStyle}
    >
      {children}
    </span>
  );
}
