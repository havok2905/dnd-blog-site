import { Link } from '@remix-run/react';

import logo from '~/images/logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        <img alt="logo" src={logo}/>
        <h1>Havok's Corner</h1>
      </Link>
      <Link to="/">
        Home
      </Link>
    </nav>
  );
};
