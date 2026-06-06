import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { classNames } from 'cascade-kit-tools/classNames';
import { getMixin, type MixinProps } from 'cascade-kit-tools/mixin';
import './Switch.css';

type BaseSwitchRootProps = React.ComponentProps<typeof BaseSwitch.Root>;

interface SwitchProps extends Omit<BaseSwitchRootProps, 'className' | 'style'> {
  className?: string;
  mixin?: MixinProps;
}

export function Switch({ className = '', mixin, ...props }: SwitchProps) {
  const { className: mixinClassName, style: mixinStyle } = getMixin(mixin);

  return (
    <BaseSwitch.Root
      className={classNames('Switch--root', [mixinClassName, className])}
      style={mixinStyle}
      {...props}
    >
      <BaseSwitch.Thumb className="Switch--thumb" />
    </BaseSwitch.Root>
  );
}
