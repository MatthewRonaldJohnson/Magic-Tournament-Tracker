import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom"

function NavBar() {
  const { logout } = useAuth0();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          src={require('./assets/favicon.ico')}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt="Icon"
          loading="lazy"
        />
        MTT
      </Link>
      <button className="btn btn-outline-warning my-2 my-sm-0" onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </nav>
  );
}

export default NavBar;
