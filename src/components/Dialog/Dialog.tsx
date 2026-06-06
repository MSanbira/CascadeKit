import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { classNames } from 'cascade-kit-tools/classNames';
import { ScopedStyle, type ScopedStylesObj, type LayerOptions } from 'cascade-kit-tools/scopedStyle';
import { Button } from '../Button/Button';
import './Dialog.css';

interface DialogProps {
  /** The element that opens the dialog. A CascadeKit component (e.g. Button) is composed in via Base UI's `render` prop. */
  trigger: React.ReactElement;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  closeLabel?: string;
  className?: string;
  /**
   * Per-instance styles applied to the PORTALLED popup itself.
   * The popup is rendered through a portal, so scoping it here (not on the trigger)
   * is what keeps @scope / CSS-variable theming working across the portal boundary.
   */
  scopedStyle?: ScopedStylesObj;
  scopedLayer?: LayerOptions;
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  closeLabel = 'Close',
  className = '',
  scopedStyle,
  scopedLayer,
}: DialogProps) {
  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger render={trigger} />
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="Dialog--backdrop" />
        <BaseDialog.Popup className={classNames('Dialog--popup d-flex dir-col gap-2', [className])}>
          <ScopedStyle style={scopedStyle} layer={scopedLayer} />
          {title && <BaseDialog.Title className="Dialog--title">{title}</BaseDialog.Title>}
          {description && (
            <BaseDialog.Description className="Dialog--description">{description}</BaseDialog.Description>
          )}
          {children && <div className="Dialog--content">{children}</div>}
          <div className="d-flex jc-end gap-2" style={{ marginTop: 'var(--space-2)' }}>
            <BaseDialog.Close render={<Button variant="secondary" />}>{closeLabel}</BaseDialog.Close>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
