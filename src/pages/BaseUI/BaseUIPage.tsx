import { useState } from 'react';
import { Section } from '../../components/Section/Section';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import { Card } from '../../components/Card/Card';
import { Text, Strong } from '../../components/Text/Text';
import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Badge } from '../../components/Badge/Badge';
import { Switch } from '../../components/Switch/Switch';
import { Dialog } from '../../components/Dialog/Dialog';
import {
  installExample,
  switchComponentExample,
  switchCssExample,
  dataAttrExample,
  renderPropExample,
  portalExample,
  portalUsageExample,
} from './baseUiPageContent';
import './BaseUIPage.css';

export function BaseUIPage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="BaseUIPage--root inline-container Section--sections-wrapper">
      <Section>
        <Box className="d-flex ali-center gap-2" mixin={{ mb: 2 }}>
          <Text variant="h1" tag="h1">Base UI + CascadeKit</Text>
          <Badge variant="secondary">Integration</Badge>
        </Box>
        <Text variant="body1" bottomMargin>
          <a href="https://base-ui.com" target="_blank" rel="noreferrer">Base UI</a> and CascadeKit
          occupy opposite, non-overlapping halves of the same problem. Base UI gives you accessible
          behavior with <Strong>zero styles</Strong>; CascadeKit gives you a styling discipline with
          <Strong> zero behavior</Strong>. Pair them and you get accessible primitives wearing
          CascadeKit clothes.
        </Text>

        <Box
          className="BaseUIPage--split d-flex ali-stretch gap-2"
          mixin={{ mt: 4, smallContainer: { flexDirection: 'column' } }}
        >
          <Box className="BaseUIPage--split-side d-flex dir-col gap-2" mixin={{ p: 3 }}>
            <Box className="d-flex ali-center jc-sb gap-2">
              <Text variant="h4" tag="h3">Base UI</Text>
              <Badge variant="primary">Behavior</Badge>
            </Box>
            <ul className="BaseUIPage--list">
              <Text tag="li" variant="body2">Behavior, focus management & accessibility</Text>
              <Text tag="li" variant="body2">Compound parts (<code>Root</code>, <code>Trigger</code>, <code>Popup</code>…)</Text>
              <Text tag="li" variant="body2">State exposed as <code>data-*</code> attributes</Text>
              <Text tag="li" variant="body2">A <code>render</code> prop for composition</Text>
            </ul>
          </Box>

          <Box className="BaseUIPage--split-side d-flex dir-col gap-2" mixin={{ p: 3 }}>
            <Box className="d-flex ali-center jc-sb gap-2">
              <Text variant="h4" tag="h3">CascadeKit</Text>
              <Badge variant="primary">Styling</Badge>
            </Box>
            <ul className="BaseUIPage--list">
              <Text tag="li" variant="body2">Layered cascade & design tokens</Text>
              <Text tag="li" variant="body2">Layout utils + <code>mixin</code> for spacing</Text>
              <Text tag="li" variant="body2"><code>scopedStyle</code> for per-instance theming</Text>
              <Text tag="li" variant="body2">Naming convention & co-located CSS</Text>
            </ul>
          </Box>
        </Box>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="install">Install</Text>
        <Text variant="body1" bottomMargin>
          Base UI ships no CSS, so there's no styling engine to fight and no specificity war. The
          cascade stays entirely yours. See the{' '}
          <a href="https://base-ui.com" target="_blank" rel="noreferrer">Base UI docs</a> for the full
          component catalog.
        </Text>
        <CodeBlock language="bash">{installExample}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="wrapping">Anatomy of a Wrapped Primitive</Text>
        <Text variant="body1" bottomMargin>
          You wrap each Base UI primitive once into a CascadeKit component. Because <code>className</code> is
          just a string, <code>classNames</code> and the <code>--</code> naming convention drop straight in,
          and you keep <code>mixin</code> support for free.
        </Text>
        <CodeBlock language="tsx" filename="components/Switch/Switch.tsx">{switchComponentExample}</CodeBlock>

        <Card mixin={{ mt: 4 }} title="Live: Switch">
          <Text variant="body2" muted bottomMargin>
            Real Base UI behavior (keyboard, ARIA, focus) styled entirely with CascadeKit tokens.
          </Text>
          <Box className="d-flex dir-col gap-3">
            <label className="d-flex ali-center jc-sb gap-2 BaseUIPage--row">
              <Text variant="body2">Enable notifications</Text>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </label>
            <Box className="d-flex ali-center gap-3 f-wrap">
              <Box className="d-flex ali-center gap-2">
                <Switch defaultChecked />
                <Text variant="body2" muted>on by default</Text>
              </Box>
              <Box className="d-flex ali-center gap-2">
                <Switch />
                <Text variant="body2" muted>off</Text>
              </Box>
              <Box className="d-flex ali-center gap-2">
                <Switch defaultChecked disabled />
                <Text variant="body2" muted>disabled</Text>
              </Box>
            </Box>
            <Text variant="body2" muted>
              Controlled value: <Strong>{notifications ? 'on' : 'off'}</Strong>
            </Text>
          </Box>
        </Card>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="state">State Lives in <code>data-*</code>, Styles Live in Layers</Text>
        <Text variant="body1" bottomMargin>
          This is the moment the two libraries click together. Base UI sets state as data attributes;
          CascadeKit's <code>component-overrides</code> layer reacts to them. No JS class toggling, no
          <code> useState</code> for visual state. The cascade does it.
        </Text>
        <CodeBlock language="html">{dataAttrExample}</CodeBlock>
        <Text variant="body1" mixin={{ mt: 2 }} bottomMargin>
          And the CSS only ever flips variables, exactly the CascadeKit component pattern:
        </Text>
        <CodeBlock language="css" filename="components/Switch/Switch.css">{switchCssExample}</CodeBlock>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="compose">Composition via the <code>render</code> Prop</Text>
        <Text variant="body1" bottomMargin>
          Base UI's <code>render</code> prop lets your existing CascadeKit components <em>become</em> Base UI
          parts. The dialog below reuses the project's own <code>Button</code> for both its trigger and its
          close action, with no re-styling and full <code>variant</code> / <code>mixin</code> support intact.
        </Text>
        <CodeBlock language="tsx">{renderPropExample}</CodeBlock>

        <Card mixin={{ mt: 4 }} title="Live: Dialog">
          <Text variant="body2" muted bottomMargin>
            Focus trap, scroll lock, <code>Esc</code> to close, and restore-focus all come from Base UI.
          </Text>
          <Dialog
            trigger={<Button variant="primary">Open dialog</Button>}
            title="Accessible by default"
            description="This dialog's behavior is 100% Base UI. Every pixel of its look is CascadeKit."
          >
            <Text variant="body2">
              The trigger and the close button are the same <code>Button</code> component used everywhere
              else on this site, composed in through <code>render</code>.
            </Text>
          </Dialog>
        </Card>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="portal">The Portal Gotcha (and the Fix)</Text>
        <Text variant="body1" bottomMargin>
          Overlays render through a <Strong>portal</Strong> at the end of <code>&lt;body&gt;</code>, outside
          the trigger's DOM subtree. So <code>scopedStyle</code> on a trigger can't reach the popup, and CSS
          variables won't inherit across the boundary. The fix is to scope the <Strong>popup itself</Strong>.
        </Text>
        <CodeBlock language="tsx" filename="components/Dialog/Dialog.tsx">{portalExample}</CodeBlock>
        <Text variant="body1" mixin={{ mt: 2 }} bottomMargin>
          Done correctly, per-instance theming flows to children inside the popup via variable inheritance:
        </Text>
        <CodeBlock language="tsx">{portalUsageExample}</CodeBlock>

        <Card mixin={{ mt: 4 }} title="Live: themed dialog across the portal">
          <Text variant="body2" muted bottomMargin>
            The dialog is theme-shifted per instance. Notice the primary button <em>inside</em> the popup
            inherits the new color, proof that scoping the popup keeps theming working through the portal.
          </Text>
          <Box className="d-flex gap-2 f-wrap">
            <Dialog
              trigger={<Button variant="primary">Emerald instance</Button>}
              title="CMS-driven theming"
              description="scopedStyle is applied to the portalled popup, not the trigger."
              scopedStyle={{ '--color-primary': '#10b981', '--color-primary-hover': '#059669' }}
            >
              <Box className="d-flex dir-col gap-2">
                <Text variant="body2">This primary button inherits the emerald theme:</Text>
                <Box><Button variant="primary">Inherited primary</Button></Box>
              </Box>
            </Dialog>
            <Dialog
              trigger={<Button variant="secondary">Amber instance</Button>}
              title="A different instance"
              description="Same component, a different per-instance theme."
              scopedStyle={{ '--color-primary': '#f59e0b', '--color-primary-hover': '#d97706' }}
            >
              <Box className="d-flex dir-col gap-2">
                <Text variant="body2">And this one is amber:</Text>
                <Box><Button variant="primary">Inherited primary</Button></Box>
              </Box>
            </Dialog>
          </Box>
        </Card>
      </Section>

      <Section>
        <Text variant="h2" bottomMargin id="verdict">Verdict</Text>
        <Card variant="subtle" mixin={{ p: 4 }}>
          <Text variant="body1" bottomMargin>
            It's close to an ideal pairing, arguably more natural than Base UI + Tailwind, because
            CascadeKit's token-driven, layered, <code>data-*</code>-reactive CSS matches Base UI's
            state-as-data-attributes philosophy line for line, with no styling runtime in between.
          </Text>
          <Text variant="body1">
            The whole app's shape becomes: a small folder of Base-UI-backed primitives styled entirely in
            CSS-variable layers, consumed by near-CSS-free pages. The only architectural decision needing
            real thought is the portal boundary: design overlays to be <Strong>self-theming</Strong> rather
            than inheritance-themed.
          </Text>
        </Card>
      </Section>
    </div>
  );
}
