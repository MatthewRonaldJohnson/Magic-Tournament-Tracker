import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
    const { logout } = useAuth0();

    return (
        <div>
            NavBar
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
    )
}

export default NavBar
