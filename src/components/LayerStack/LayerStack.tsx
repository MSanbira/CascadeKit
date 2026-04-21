import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import './LayerStack.css';

type LayerName = 'user-overrides' | 'component-overrides' | 'pages' | 'components' | 'utils' | 'base';

interface LayerItem {
  name: LayerName;
  label: string;
  description?: string;
}

interface LayerStackProps {
  layers?: LayerItem[];
  className?: string;
  mixin?: MixinProps;
}

const defaultLayers: LayerItem[] = [
  { name: 'user-overrides', label: 'user-overrides', description: 'Highest priority' },
  { name: 'component-overrides', label: 'component-overrides', description: '↑' },
  { name: 'pages', label: 'pages', description: '↑' },
  { name: 'components', label: 'components', description: '↑' },
  { name: 'utils', label: 'utils', description: '↑' },
  { name: 'base', label: 'base', description: 'Lowest priority' },
];

export function LayerStack({ layers = defaultLayers, className = '', mixin }: LayerStackProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);

  return (
    <Box 
      className={classNames('LayerStack--root', ['d-flex dir-col gap-2', mixinClassName, className])} 
      style={mixinStyle}
    >
      {layers.map((layer) => (
        <div key={layer.name} className={`LayerStack--item LayerStack--item-${layer.name}`}>
          <Text variant="body2" tag="span">{layer.label}</Text>
          {layer.description && <Text variant="body2" tag="span">{layer.description}</Text>}
        </div>
      ))}
    </Box>
  );
}
