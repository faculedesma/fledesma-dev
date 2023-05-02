import { Logo } from '@assets/svgs/Logo';
import './header.scss';

type Link = {
  id: string;
  label: string;
  href: string;
};

const links: Link[] = [
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

const Header = (): JSX.Element => {
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

  const handleLogoClick = () => {
    const top = document.getElementById('hero');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="container">
        <div id="header" className="header">
          <div
            onClick={handleLogoClick}
            className="header-logo"
          >
            <Logo />
            <p>Facundo Ledesma</p>
          </div>
          <div className="header-links">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  className="header-links--item"
                  onClick={(e) =>
                    handleLinkClick(e, link.id)
                  }
                  href={link.href}
                >
                  {link.label
                    .split('')
                    .map((char, index) => {
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
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
