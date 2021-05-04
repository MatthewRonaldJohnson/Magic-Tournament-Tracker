import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            Landing Page
            <button onClick={()=> loginWithRedirect()}>Log In</button>
        </div>
    )
}
