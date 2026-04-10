import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'default' | 'midnight' | 'bubblegum';

const THEMES: Theme[] = ['default', 'midnight', 'bubblegum'];

const THEME_LABELS: Record<Theme, string> = {
  default: 'Default',
  midnight: 'Midnight',
  bubblegum: 'Bubblegum',
};

interface ThemeContextValue {
  theme: Theme;
  themeLabel: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('cascadekit-theme');
    return (saved as Theme) || 'default';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'default' ? '' : theme;
    localStorage.setItem('cascadekit-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const currentIndex = THEMES.indexOf(prev);
      return THEMES[(currentIndex + 1) % THEMES.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeLabel: THEME_LABELS[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
