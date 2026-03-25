import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Box.css';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  mixin?: MixinProps;
}

export function Box({ children, className = '', mixin, ...props }: BoxProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <div 
      className={classNames('Box', [mixinClassName, className])} 
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      {children}
    </div>
  );
}
