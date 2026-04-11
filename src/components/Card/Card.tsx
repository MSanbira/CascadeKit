import { classNames } from '../../helpers/classNameHelper';
import { getMixin, type MixinProps } from '../../helpers/mixinHelper';
import { ScopedStyle } from '../ScopedStyle/ScopedStyle';
import { type ScopedStylesObj, type LayerOptions } from '../../helpers/scopedStyle';
import { Text } from '../Text/Text';
import './Card.css';

type CardVariant = 'default' | 'subtle';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  title?: React.ReactNode;
  mixin?: MixinProps;
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Card({ children, className = '', variant = 'default', title, mixin, scopedStyle, scopedLayer }: CardProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);
  const variantClass = variant !== 'default' ? `Card--${variant}` : '';

  const renderTitle = () => {
    if (!title) return null;
    if (typeof title === 'string') {
      return <Text variant="h5" className="Card--title">{title}</Text>;
    }
    return <div className="Card--title">{title}</div>;
  };
  
  return (
    <div className={classNames('Card', [variantClass, mixinClassName, className])} style={mixinStyle}>
      <ScopedStyle style={scopedStyle} layer={scopedLayer} />
      {renderTitle()}
      <div className="Card--content">{children}</div>
    </div>
  );
}
