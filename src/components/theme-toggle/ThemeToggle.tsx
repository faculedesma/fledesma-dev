import { useRef, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

import useTheme from '@components/hooks/useTheme';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

import './theme-toggle.scss';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  useMouseFollow(toggleRef);

  function handleThemeChange(selectedTheme: 'light' | 'dark' | 'system') {
    setTheme(selectedTheme);
    setIsOpen(false);
  }

  return (
    <div
      ref={toggleRef}
      className={`theme-container ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => handleThemeChange('light')}
        aria-label="Switch to light mode"
        className={`theme-container-toggle ${theme === 'light' ? 'active' : ''}`}
      >
        <Sun />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        aria-label="Switch to dark mode"
        className={`theme-container-toggle ${theme === 'dark' ? 'active' : ''}`}
      >
        <Moon />
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        aria-label="Switch to system mode"
        className={`theme-container-toggle ${theme === 'system' ? 'active' : ''}`}
      >
        <Monitor />
      </button>
    </div>
  );
};

export default ThemeToggle;
