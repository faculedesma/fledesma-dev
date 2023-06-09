import { useContext } from 'react';
import { ThemeContext } from '@components/contexts/ThemeContext';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider'
    );
  }
  return context;
};
