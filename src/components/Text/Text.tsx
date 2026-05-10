import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import './Text.css';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'inline' | 'main-header';
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'label' | 'a' | 'strong' | 'em' | 'code' | 'li';
type TextAlign = 'left' | 'center' | 'right';
type TextColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'on-dark' | 'on-dark-subtle' | 'on-dark-highlight';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  tag?: TextTag;
  children: React.ReactNode;
  muted?: boolean;
  isBold?: boolean;
  isUnderline?: boolean;
  isPretty?: boolean;
  alignText?: TextAlign;
  color?: TextColor;
  mixin?: MixinProps;
  topMargin?: boolean;
  bottomMargin?: boolean;
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
  'main-header': 'h1',
};

export function Text({ 
  variant = 'body1', 
  tag,
  children, 
  className = '',
  muted = false,
  isBold = false,
  isUnderline = false,
  isPretty = false,
  alignText,
  color,
  mixin,
  topMargin = false,
  bottomMargin = false,
  id,
  ...props 
}: TextProps) {
  const Tag = tag ?? defaultTagMap[variant];
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  
  return (
    <Tag 
      className={classNames('Text--root', [
        `Text--variant-${variant}`,
        mixinClassName,
        className
      ], { 
        'Text--muted': muted,
        'Text--bold': isBold,
        'Text--underline': isUnderline,
        'Text--pretty': isPretty,
        [`Text--align-${alignText}`]: !!alignText,
        [`Text--color-${color}`]: !!color,
        'Text--top-margin': topMargin,
        'Text--bottom-margin': bottomMargin,
      })}
      style={{...mixinStyle, ...props.style}}
      id={id}
      {...props}
    >
      {id && <a href={`#${id}`} className='Text--hash-link'>🔗</a>}
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
