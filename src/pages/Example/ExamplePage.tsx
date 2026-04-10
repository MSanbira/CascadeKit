import { useState } from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Text, Strong } from '../../components/Text';
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';
import { CodeBlock } from '../../components/CodeBlock';
import './ExamplePage.css';

export function ExamplePage() {
  const [notifications, setNotifications] = useState<Array<{ id: number; type: 'success' | 'warning' | 'error'; message: string }>>([
    { id: 1, type: 'success', message: 'Your changes have been saved successfully.' },
    { id: 2, type: 'warning', message: 'Your session will expire in 5 minutes.' },
  ]);
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'enterprise'>('pro');

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const addNotification = () => {
    const types = ['success', 'warning', 'error'] as const;
    const messages = [
      'Operation completed successfully!',
      'Please review your settings.',
      'Something went wrong. Try again.',
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    setNotifications(prev => [...prev, {
      id: Date.now(),
      type,
      message: messages[types.indexOf(type)],
    }]);
  };

  return (
    <div className="ExamplePage--root">
      <Section>
        <Text variant="h1">Live Examples</Text>
        <Text>
          Real-world UI patterns built with CascadeKit. Inspect any element 
          to see readable class names and CSS layers in action.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Button Component</Text>
        <Text>The Button component demonstrates CascadeKit's variant and size system.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> The base class defines all behavior (hover, active, transitions) 
            using CSS variables with sensible fallbacks. Variant classes only set variable values — 
            they don't repeat property declarations. This keeps the code DRY and makes adding new variants simple. 
            Size and state overrides live in a higher-priority layer to ensure they always win.
          </Text>
        </Card>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" mixin={{ mb: 2 }}>Variants</Text>
          <Box className="d-flex gap-3 ali-center" mixin={{ mb: 3 }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </Box>
          <CodeBlock language="tsx" filename="Usage">{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" mixin={{ mb: 2 }}>How Variants Work (CSS)</Text>
          <Text variant="body2" muted mixin={{ mb: 2 }}>
            Base styles use variables with fallbacks. Variants only set variable values.
          </Text>
          <CodeBlock language="css" filename="Button.css">{`.Button--root {
  background: var(--button-bg-color, var(--color-bg));
  color: var(--button-color, var(--color-text));
  border: 1px solid var(--button-border-color, transparent);
}

.Button--root:hover {
  background: var(--button-bg-color-hover, var(--button-bg-color));
}

.Button--primary {
  --button-bg-color: var(--color-primary);
  --button-color: var(--color-bg);
  --button-bg-color-hover: var(--color-primary-hover);
}`}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" mixin={{ mb: 2 }}>Sizes</Text>
          <Box className="d-flex gap-3 ali-center" mixin={{ mb: 3 }}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </Box>
          <CodeBlock language="tsx" filename="Usage">{`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`}</CodeBlock>
        </Box>

        <Box mixin={{ mt: 4 }}>
          <Text variant="h5" mixin={{ mb: 2 }}>Disabled State</Text>
          <Box className="d-flex gap-3 ali-center" mixin={{ mb: 3 }}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </Box>
          <Text variant="body2" muted mixin={{ mb: 2 }}>
            Disabled styles in <code>@layer component-overrides</code> reset hover/active states.
          </Text>
          <CodeBlock language="css" filename="Button.css">{`@layer component-overrides {
  .Button--root:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: var(--button-bg-color, var(--color-bg));
    }
  }
}`}</CodeBlock>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">User Profile Card</Text>
        <Text>A common pattern for displaying user information with actions.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> Component composition (Card + Badge + Button), 
            utility classes for layout (<code>d-flex gap-4 ali-center</code>), 
            responsive grid via mixin (<code>smallScreen</code>/<code>mediumScreen</code>), 
            page-specific CSS for avatar styling.
          </Text>
        </Card>
        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr' } }}>
          <Card>
            <div className="d-flex gap-4 ali-center">
              <div className="ExamplePage--avatar">JD</div>
              <div className="d-flex dir-col gap-1">
                <Text variant="h5" tag="span">Jane Doe</Text>
                <Text variant="body2" muted>Senior Developer</Text>
                <Box className="d-flex gap-1" mixin={{ mt: 1 }}>
                  <Badge variant="primary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </Box>
              </div>
            </div>
            <Box className="d-flex gap-2" mixin={{ mt: 4 }}>
              <Button variant="primary" size="sm">Message</Button>
              <Button variant="secondary" size="sm">View Profile</Button>
            </Box>
          </Card>

          <Card>
            <div className="d-flex gap-4 ali-center">
              <div className="ExamplePage--avatar ExamplePage--avatar-secondary">AS</div>
              <div className="d-flex dir-col gap-1">
                <Text variant="h5" tag="span">Alex Smith</Text>
                <Text variant="body2" muted>Product Designer</Text>
                <Box className="d-flex gap-1" mixin={{ mt: 1 }}>
                  <Badge variant="success">Figma</Badge>
                  <Badge variant="warning">CSS</Badge>
                </Box>
              </div>
            </div>
            <Box className="d-flex gap-2" mixin={{ mt: 4 }}>
              <Button variant="primary" size="sm">Message</Button>
              <Button variant="secondary" size="sm">View Profile</Button>
            </Box>
          </Card>
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Notifications</Text>
        <Text>Dismissible alerts with different severity levels.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> BEM-style variant classes 
            (<code>--notification-success</code>, <code>--notification-warning</code>), 
            design tokens for colors (<code>var(--color-success)</code>), 
            CSS <code>color-mix()</code> for computed backgrounds.
          </Text>
        </Card>

        <Box className="d-flex dir-col gap-2" mixin={{ mt: 4 }}>
          {notifications.map(notification => (
            <div key={notification.id} className={`ExamplePage--notification ExamplePage--notification-${notification.type}`}>
              <Text variant="body2">{notification.message}</Text>
              <Button 
                className="ExamplePage--notification-close"
                onClick={() => dismissNotification(notification.id)}
                variant="ghost"
              >
                ×
              </Button>
            </div>
          ))}
          {notifications.length === 0 && (
            <Text variant="body2" muted>No notifications. Click below to add one.</Text>
          )}
        </Box>
        <Button variant="secondary" size="sm" onClick={addNotification} mixin={{ mt: 3 }}>
          Add Notification
        </Button>
      </Section>

      <Section>
        <Text variant="h2">Pricing Cards</Text>
        <Text>Interactive pricing comparison with selection state.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> Layer cascade for state overrides 
            (<code>@layer pages</code> overrides <code>@layer components</code>), 
            responsive breakpoints via mixin (<code>bigScreen: gridColTemplate</code>), 
            dynamic className for selected state without runtime CSS.
          </Text>
        </Card>

        <Box className="d-grid" mixin={{ gap: 4, smallScreen: { gridColTemplate: '1fr' }, bigScreen: { gridColTemplate: '1fr 1fr 1fr' } }}>
          {[
            { id: 'starter' as const, name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Email Support'] },
            { id: 'pro' as const, name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Analytics'] },
            { id: 'enterprise' as const, name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Dedicated Account', 'Custom Integrations', 'SLA'] },
          ].map(plan => (
            <Card 
              key={plan.id} 
              className={selectedPlan === plan.id ? 'ExamplePage--pricingCard-selected' : ''}
            >
              <Box className="d-flex dir-col ali-center" mixin={{ p: 2 }}>
                {plan.id === 'pro' && <Badge variant="primary" mixin={{ mb: 2 }}>Popular</Badge>}
                <Text variant="h4">{plan.name}</Text>
                <Text variant="h2" tag="span" mixin={{ my: 2 }}>{plan.price}<Text variant="body2" tag="span" muted>/mo</Text></Text>
                <Box className="d-flex dir-col gap-2" mixin={{ mb: 4 }}>
                  {plan.features.map(feature => (
                    <Text key={feature} variant="body2" muted>✓ {feature}</Text>
                  ))}
                </Box>
                <Button 
                  variant={selectedPlan === plan.id ? 'primary' : 'secondary'} 
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Contact Form</Text>
        <Text>Form layout with validation states and responsive design.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> Page-specific form styles in <code>@layer pages</code>, 
            focus states using design tokens (<code>var(--color-primary)</code>), 
            utility classes for form layout (<code>d-flex dir-col gap-4</code>), 
            no CSS-in-JS — pure native CSS transitions.
          </Text>
        </Card>

        <Card title="Get in Touch">
          <div className="d-flex dir-col gap-4">
            <div className="d-flex dir-col gap-1">
              <label className="ExamplePage--label">Email</label>
              <input 
                type="email" 
                className="ExamplePage--input"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="d-flex dir-col gap-1">
              <label className="ExamplePage--label">Message</label>
              <textarea 
                className="ExamplePage--textarea"
                placeholder="How can we help?"
                rows={4}
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <div className="d-flex jc-end gap-2">
              <Button variant="ghost" onClick={() => setFormData({ email: '', message: '' })}>Clear</Button>
              <Button variant="primary">Send Message</Button>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <Text variant="h2">Stats Dashboard</Text>
        <Text>Data visualization cards with responsive grid layout.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> Component variants via props (<code>Card variant="subtle"</code>), 
            conditional Badge variants for positive/negative states, 
            4-column responsive grid demonstrating mixin breakpoints, 
            all styling defined in component CSS — zero inline styles.
          </Text>
        </Card>

        <Box className="d-grid" mixin={{ gap: 4, smallScreen: { gridColTemplate: '1fr 1fr' }, bigScreen: { gridColTemplate: '1fr 1fr 1fr 1fr' } }}>
          {[
            { label: 'Total Users', value: '12,345', change: '+12%', positive: true },
            { label: 'Revenue', value: '$54,321', change: '+8%', positive: true },
            { label: 'Orders', value: '1,234', change: '-3%', positive: false },
            { label: 'Conversion', value: '3.2%', change: '+0.5%', positive: true },
          ].map(stat => (
            <Card key={stat.label} variant="subtle">
              <Text variant="body2" muted>{stat.label}</Text>
              <Text variant="h3" mixin={{ my: 1 }}>{stat.value}</Text>
              <Badge variant={stat.positive ? 'success' : 'error'}>{stat.change}</Badge>
            </Card>
          ))}
        </Box>
      </Section>

      <Section>
        <Text variant="h2">Scoped Styles</Text>
        <Text>Override CSS custom properties and regular CSS properties per-component instance using CSS <code>@scope</code>.</Text>
        <Card variant="subtle" mixin={{ mt: 3, mb: 4 }}>
          <Text variant="body2" muted>
            <Strong>CascadeKit principles:</Strong> The <code>scopedStyle</code> prop accepts both CSS custom properties 
            (design tokens like <code>--color-primary</code>) and regular CSS properties (<code>boxShadow</code>, <code>background</code>). 
            It injects a scoped <code>&lt;style&gt;</code> element within <code>@layer component-overrides</code> — 
            per-instance styling that respects the cascade without inline styles.
          </Text>
        </Card>

        <Box className="d-grid" mixin={{ gap: 4, mt: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr 1fr' } }}>
          <Card title="Default Card">
            <Text variant="body2" muted>Uses base design tokens.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>

          <Card title="Green Theme" scopedStyle={{ 
            '--color-primary': '#10b981', 
            '--color-primary-hover': '#059669',
            '--color-border': '#10b981',
            '--color-text-muted': '#047857',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
            transform: 'scale(1.02)'
          }}>
            <Text variant="body2" muted>Tokens + boxShadow & transform.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
            <Badge variant="secondary" mixin={{ ml: 1 }}>New</Badge>
          </Card>

          <Card title="Orange Theme" scopedStyle={{ 
            '--color-primary': '#f59e0b', 
            '--color-primary-hover': '#d97706',
            '--color-border': '#f59e0b',
            '--color-text-muted': '#b45309',
            borderStyle: 'dashed',
            borderWidth: '2px',
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            '.Card--title': {
              color: '#000'
            }
          }}>
            <Text variant="body2" muted>Tokens + dashed border & gradient.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
            <Badge variant="secondary" mixin={{ ml: 1 }}>Hot</Badge>
          </Card>
        </Box>

        <Text variant="h4" mixin={{ mt: 5, mb: 2 }}>With Nested Selectors</Text>
        <Text variant="body2" muted mixin={{ mb: 3 }}>
          Use CSS nesting with <code>&</code> for pseudo-selectors and <code>@media</code> for responsive styles.
        </Text>

        <Box className="d-grid" mixin={{ gap: 4, smallScreen: { gridColTemplate: '1fr' }, mediumScreen: { gridColTemplate: '1fr 1fr' } }}>
          <Card title="Hover Effect" scopedStyle={{ 
            '--color-primary': '#8b5cf6',
            '--color-border': '#8b5cf6',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 24px rgba(139, 92, 246, 0.3)'
            }
          }}>
            <Text variant="body2" muted>Hover me! Uses <code>&:hover</code> nesting.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>

          <Card title="Dark Mode Aware" scopedStyle={{ 
            '--color-primary': '#06b6d4',
            '--color-border': '#06b6d4',
            '@media (prefers-color-scheme: dark)': {
              '--color-primary': '#22d3ee',
              '--color-border': '#22d3ee',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
              '&:hover': {
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)'
              }
            }
          }}>
            <Text variant="body2" muted>Nested <code>@media</code> with <code>&:hover</code> inside.</Text>
            <Button variant="primary" size="sm" mixin={{ mt: 2 }}>Action</Button>
          </Card>
        </Box>

        <CodeBlock language="tsx" filename="Usage" mixin={{ mt: 4 }}>{`<Card scopedStyle={{ 
  '--color-primary': '#8b5cf6',
  transition: 'transform 0.2s',
  
  '&:hover': {
    transform: 'translateY(-4px)'
  },
  
  '@media (prefers-color-scheme: dark)': {
    '--color-primary': '#a78bfa',
    '&:hover': {
      boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)'
    }
  }
}}>
  <Button variant="primary">Action</Button>
</Card>`}</CodeBlock>
        <Text variant="body2" muted mixin={{ mt: 2 }}>
          Object values are nested CSS rules — use <code>&</code> for pseudo-selectors, nest infinitely.
        </Text>
      </Section>

      <Section>
        <Text variant="h2">Inspect & Learn</Text>
        <Text>
          Open DevTools and inspect any element above. You'll see:
        </Text>
        <ul>
          <li><Strong>Semantic class names</Strong> — <code>.ExamplePage--avatar</code>, <code>.Button--primary</code></li>
          <li><Strong>CSS layers</Strong> — <code>@layer components</code>, <code>@layer pages</code></li>
          <li><Strong>Design tokens</Strong> — <code>var(--color-primary)</code>, <code>var(--space-4)</code></li>
          <li><Strong>No runtime overhead</Strong> — pure CSS, no JS style computation</li>
        </ul>
      </Section>
    </div>
  );
}
