import { Menu } from '@components/menu/Menu';
import { useState, useRef, useEffect } from 'react';
import { ToggleButton } from '@components/buttons/ToggleButton';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import Logo from '@components/logo/Logo';
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
    id: 'work',
    label: 'Work',
    href: '/work'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about'
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
  const isOnTop = useIsOnTop(linkRef);

  useEffect(() => {
    if (linkRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTop) {
        mouse?.classList.remove('point');
        mouse?.classList.add('hide');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('hide');
      }
    }
  }, [isOnTop]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      ref={linkRef}
      key={link.id}
      className="header-links--item"
      onClick={(e) => handleLinkClick(e, link.id)}
      href={link.href}
    >
      {link.label.split('').map((char, index) => {
        return (
          <div
            key={`${char}-${index}`}
            className="header-links--item-text"
          >
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

  const toggleMenu = () =>
    setIsOpen((prevIsOpen) => !prevIsOpen);

  const handleLogoClick = () => {
    const top = document.getElementById('hero');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef}>
      <div id="header" className="header">
        <div
          onClick={handleLogoClick}
          className="header-logo"
        >
          <Logo />
        </div>
        <div className="header-links">
          {links.map((link) => {
            return (
              <HeaderlLink key={link.id} link={link} />
            );
          })}
        </div>
        <ToggleButton
          onClick={toggleMenu}
          isOpen={isOpen}
        />
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
