export const themeCSS = `@layer user-overrides {
  [data-theme="bubblegum"] {
    --color-bg: #fdf2f8;
    --color-primary: #ec4899;
    --color-text: #500724;
    /* ... other token overrides */
  }

  /* Dark variant respects system preference */
  @media (prefers-color-scheme: dark) {
    [data-theme="bubblegum"] {
      --color-bg: #1a0a14;
      --color-primary: #f472b6;
      --color-text: #fdf2f8;
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
type Theme = 'default' | 'bubblegum' | 'unicorn';

const THEMES: Theme[] = ['default', 'bubblegum', 'unicorn'];

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
