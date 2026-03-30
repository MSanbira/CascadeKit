import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import './Text.css';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'inline';
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'label' | 'a' | 'strong' | 'em' | 'code' | 'li';
type TextAlign = 'left' | 'center' | 'right';
type TextColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  tag?: TextTag;
  children: React.ReactNode;
  muted?: boolean;
  isBold?: boolean;
  isUnderline?: boolean;
  alignText?: TextAlign;
  color?: TextColor;
  mixin?: MixinProps;
}

const defaultTagMap: Record<TextVariant, TextTag> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  inline: 'span',
};

export function Text({ 
  variant = 'body1', 
  tag,
  children, 
  className = '',
  muted = false,
  isBold = false,
  isUnderline = false,
  alignText,
  color,
  mixin,
  ...props 
}: TextProps) {
  const Tag = tag ?? defaultTagMap[variant];
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <Tag 
      className={classNames('Text', [
        `Text--variant-${variant}`,
        mixinClassName,
        className
      ], { 
        'Text--muted': muted,
        'Text--bold': isBold,
        'Text--underline': isUnderline,
        [`Text--align-${alignText}`]: !!alignText,
        [`Text--color-${color}`]: !!color,
      })}
      style={{...mixinStyle, ...props.style}}
      {...props}
    >
      {children}
    </Tag>
  );
}

export const Strong = ({ children, ...props }: TextProps) => {
  return (
    <Text {...props} isBold tag="span">
      {children}
    </Text>
  );
};
