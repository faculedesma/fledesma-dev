import { useState, useRef, useEffect } from 'react';

import { Menu } from '@components/menu/Menu';
import { ToggleButton } from '@components/buttons/ToggleButton';
import Logo from '@components/logo/Logo';
import { useMouseFollow } from '@components/hooks/useMouseFollow';
import ThemeToggle from '@components/theme-toggle/ThemeToggle';

import './header.scss';

type Link = {
  id: string;
  label: string;
  href: string;
};

interface ILinkProps {
  link: Link;
}

export const links: Link[] = [
  {
    id: 'about',
    label: 'About',
    href: '/about'
  },
  {
    id: 'work',
    label: 'Projects',
    href: '/projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
];

interface IHeaderProps {
  isLoading: boolean;
}

const HeaderlLink = ({ link }: ILinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useMouseFollow(linkRef);

  return (
    <a
      ref={linkRef}
      key={link.id}
      className="header-nav-links-item"
      onClick={(e) => handleLinkClick(e, link.id)}
      href={link.href}
    >
      {link.label.split('').map((char, index) => {
        return (
          <div key={`${char}-${index}`} className="header-nav-links-item-text">
            <span>{char}</span>
            <span>{char}</span>
          </div>
        );
      })}
    </a>
  );
};

const Header: React.FC<IHeaderProps> = ({ isLoading }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      headerRef.current?.classList.add('show-header');
    }
  }, [isLoading]);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header ref={headerRef}>
      <div className="container" style={{ border: 0 }}>
        <div id="header" className="header">
          <div className="header-logo">
            <Logo />
          </div>
          <div className="header-nav">
            <ThemeToggle />
            <div className="header-nav-links">
              {links.map((link) => {
                return <HeaderlLink key={link.id} link={link} />;
              })}
            </div>
            <span className="header-nav-version">1.1.0</span>
          </div>
          <ToggleButton onClick={toggleMenu} isOpen={isOpen} />
          <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
