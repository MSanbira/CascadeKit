import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  mixin?: MixinProps;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  mixin,
  ...props 
}: ButtonProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <button 
      className={classNames('Button', [`Button--${variant}`, `Button--${size}`, mixinClassName, className])} 
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      {children}
    </button>
  );
}
