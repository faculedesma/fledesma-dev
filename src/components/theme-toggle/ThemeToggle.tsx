import { useRef } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

import useTheme from '@components/hooks/useTheme';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

import './theme-toggle.scss';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useTheme();
  const toggleRef = useRef<HTMLDivElement>(null);

  useMouseFollow(toggleRef);

  return (
    <div ref={toggleRef} className="theme-container">
      <button
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
        className={`theme-container-toggle ${theme === 'light' ? 'active' : ''}`}
      >
        <Sun />
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
        className={`theme-container-toggle ${theme === 'dark' ? 'active' : ''}`}
      >
        <Moon />
      </button>
      <button
        onClick={() => setTheme('system')}
        aria-label="Switch to system mode"
        className={`theme-container-toggle ${theme === 'system' ? 'active' : ''}`}
      >
        <Monitor />
      </button>
    </div>
  );
};

export default ThemeToggle;
