import { useState, useEffect } from 'react';

export const themes = ['dark', 'light', 'system'] as const;

type Theme = typeof themes[number];

function useTheme(initialTheme: Theme = 'dark'): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    if (initialTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return initialTheme;
  });

  useEffect(() => {
    const applyTheme = (currentTheme: Theme) => {
      if (currentTheme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        document.body.setAttribute('data-theme', currentTheme);
      }
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
