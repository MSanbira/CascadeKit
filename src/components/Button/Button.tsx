import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import { ScopedStyle, type ScopedStylesObj, type LayerOptions } from 'cascade-kit-tools/scopedStyle';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
  isIcon?: boolean;
}

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = (LinkButtonProps | ActionButtonProps) & ButtonBaseProps;

export function Button(props: ButtonProps) {
  const isLink = 'href' in props;
  const { 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    mixin, 
    scopedStyle, 
    scopedLayer, 
    isIcon = false,
    ...restProps 
  } = props ;

  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  const calculatedClassName = classNames(
    'Button--root', 
    [
      `Button--${variant}`, 
      `Button--${size}`, 
      mixinClassName, 
      className,
    ],
    {
      'Button--is-icon': isIcon,
    }
  );

  if (isLink) {
    return (
      <a 
        className={calculatedClassName}
        style={{...mixinStyle, ...restProps.style}}
        {...restProps as LinkButtonProps}
      >
        <ScopedStyle style={scopedStyle} layer={scopedLayer} />
        {restProps.children}
      </a>
    );
  }
  
  return (
    <button 
      className={calculatedClassName} 
      style={{...mixinStyle, ...restProps.style}}
      {...restProps as ActionButtonProps}
    >
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {restProps.children}
    </button>
  );
}
