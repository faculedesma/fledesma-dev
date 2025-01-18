import { useEffect, useRef } from 'react';
import { Social } from '@components/social/Social';
import { links } from '@components/header/Header';
import './menu.scss';

type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current?.classList.remove('hide-menu');
      menuRef.current?.classList.add('show-menu');
    } else {
      if (menuRef.current?.classList.contains('show-menu')) {
        menuRef.current?.classList.remove('show-menu');
        menuRef.current?.classList.add('hide-menu');
      }
    }
  }, [isOpen]);

  return (
    <div ref={menuRef} className="menu">
      <div className="container">
        <ul className="menu-links">
          {links.map((link, index) => {
            return (
              <li key={index} className="menu-links--item">
                <div className="menu-links--item-container">
                  <a onClick={(e) => handleLinkClick(e, link.id)} href={link.href}>
                    {link.label}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="menu-social">
          <Social />
        </div>
        <span className="menu-version">1.1.0</span>
      </div>
    </div>
  );
};
