import logo from '~/images/logo.png';

export const Navbar = () => {
  return (
    <nav className="havok-dnd-navbar">
      <a href="/" className="havok-dnd-navbar-logo">
        <img alt="logo" src={logo}/>
        <h1>Havok's Corner</h1>
      </a>
      <a href="/">
        Home
      </a>
    </nav>
  );
};
