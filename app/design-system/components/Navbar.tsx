import {useState} from 'react';

import {
  ListIcon,
  XIcon
} from './Icons';

interface INavbarLink {
  href: string;
  text: string;
}

interface INavbarProps {
  homeLink: INavbarLink;
  links: INavbarLink[];
  logoAlt: string;
  logoSrc: string;
}

export const Navbar = ({
  homeLink,
  links,
  logoAlt,
  logoSrc
}: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="havok-dnd-navbar">
        <a href={homeLink.href} className="havok-dnd-navbar-logo">
          <img alt={logoAlt} src={logoSrc}/>
          <h1>{homeLink.text}</h1>
        </a>
        <div className="havok-dnd-navbar-links-desktop">
          {links.map(link => <a href={link.href}>{link.text}</a>)}
        </div>
        <button
          aria-label="menu"
          className="havok-dnd-navbar-links-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ? (
              <XIcon
                height="20px"
                width="20px"/>
            ) : (
              <ListIcon
                height="20px"
                width="20px"/>
            )
          }
        </button>
      </div>
      {
        isOpen && (
          <div className="havok-dnd-navbar-links-mobile">
            {links.map(link => <a href={link.href}>{link.text}</a>)}
          </div>
        )
      }
    </nav>
  );
};
