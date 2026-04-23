export const basicUsage = `<Card title="Custom Card" scopedStyle={{
  '--color-primary': '#10b981',
  '--color-border': '#10b981',
  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
}}>
  <Button variant="primary">Action</Button>
</Card>`;

export const nestedSelectors = `<Card scopedStyle={{
  '--color-primary': '#8b5cf6',
  transition: 'transform 0.2s',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(139, 92, 246, 0.3)'
  },
  
  '@media (prefers-color-scheme: dark)': {
    '--color-primary': '#a78bfa',
    '&:hover': {
      boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)'
    }
  }
}}>`;

export const generatedCSS = `/* What scopedStyle generates */
@layer component-overrides {
  @scope {
    :scope {
      --color-primary: #10b981;
      --color-border: #10b981;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
      
      &:hover {
        transform: translateY(-4px);
      }
    }
  }
}`;

export const backendExample = `// Dynamic colors from backend/user preferences
function UserCard({ user }) {
  return (
    <Card title={user.name} scopedStyle={{
      '--color-primary': user.brandColor,
      '--color-bg-subtle': user.backgroundColor,
      borderColor: user.accentColor
    }}>
      ...
    </Card>
  );
}`;

export const customLayerExample = `// Use scopedLayer prop to control cascade priority
<Card 
  scopedStyle={{ '--color-primary': userColor }}
  scopedLayer="user-overrides"  // Highest priority layer
>


// Available layers (lowest to highest priority):
// 'base' | 'utils' | 'components' | 'pages' | 'component-overrides' | 'user-overrides'`;
