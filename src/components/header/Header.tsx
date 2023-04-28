import { Logo } from "@assets/svgs/Logo";
import "./header.scss";

const links = [
  {
    id: "work",
    label: "Work",
    href: "/work",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <Logo />
            <p>Facundo Ledesma</p>
          </div>
          <div className="header-links">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  className="header-links--item"
                  href={link.href}
                >
                  {link.label.split("").map((char) => {
                    return (
                      <div className="header-links--item-text">
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
