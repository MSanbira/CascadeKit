import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import { ScopedStyle } from '../ScopedStyle/ScopedStyle';
import { type ScopedStylesObj, type LayerOptions } from '../../helpers/scopedStyle';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  mixin,
  scopedStyle,
  scopedLayer,
  ...props 
}: ButtonProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <button 
      className={classNames('Button', [`Button--${variant}`, `Button--${size}`, mixinClassName, className])} 
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {children}
    </button>
  );
}
