export const themeCSS = `@layer user-overrides {
  [data-theme="midnight"] {
    --color-bg: #f5f3ff;
    --color-primary: #7c3aed;
    --color-text: #1e1b4b;
    /* ... other token overrides */
  }

  /* Dark variant respects system preference */
  @media (prefers-color-scheme: dark) {
    [data-theme="midnight"] {
      --color-bg: #0f0d1a;
      --color-primary: #a78bfa;
      --color-text: #e8e4f0;
    }
  }
}`;

export const componentOverrides = `/* Component-specific overrides within a theme */
[data-theme="bubblegum"] .Button--root {
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

[data-theme="bubblegum"] .Card--root {
  border-width: 2px;
  border-radius: var(--radius-xl);
}`;

export const themeContext = `// ThemeContext.tsx
type Theme = 'default' | 'midnight' | 'bubblegum';

const THEMES: Theme[] = ['default', 'midnight', 'bubblegum'];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return localStorage.getItem('cascadekit-theme') || 'default';
  });

  useEffect(() => {
    // Set data-theme attribute on <html>
    document.documentElement.dataset.theme = 
      theme === 'default' ? '' : theme;
    localStorage.setItem('cascadekit-theme', theme);
  }, [theme]);

  // ...
}`;

export const themeUsage = `// Using the theme hook
import { useTheme } from './context/ThemeContext';

function ThemeSwitcher() {
  const { theme, themeLabel, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Current: {themeLabel}
    </Button>
  );
}`;
