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
  return (
    <nav className="havok-dnd-navbar">
      <a href={homeLink.href} className="havok-dnd-navbar-logo">
        <img alt={logoAlt} src={logoSrc}/>
        <h1>{homeLink.text}</h1>
      </a>
      <div className="havok-dnd-navbar-links">
        {links.map(link => <a href={link.href}>{link.text}</a>)}
      </div>
    </nav>
  );
};
