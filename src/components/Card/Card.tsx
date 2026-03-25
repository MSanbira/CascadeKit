import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Card.css';

type CardVariant = 'default' | 'subtle';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  mixin?: MixinProps;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', variant = 'default', mixin }: CardProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  const variantClass = variant !== 'default' ? `Card--${variant}` : '';
  
  return (
    <div className={classNames('Card', [variantClass, mixinClassName, className])} style={mixinStyle}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`Card--header ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`Card--content ${className}`.trim()}>
      {children}
    </div>
  );
}
