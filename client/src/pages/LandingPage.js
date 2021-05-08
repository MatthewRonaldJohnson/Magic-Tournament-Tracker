import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();
    return (
        
        <div>
            <h2>
            &#10024; Magic-Tournament Tracker &#10024;
            </h2>
            <h3>
            This PWA allows Magic the Gathering Players to track their results and creates graphs allowing them to visiualize their win rates across different matchups. This app fills a need for compeititve Magic players who currently do not have an easy way to track and view data from in person events. It also provides utility to non competitive players through the life counter and card search features.
            </h3>
            <nav class="navbar navbar-expand-lg navbar-dark primary-color"></nav>
            <button onClick={()=> loginWithRedirect()}>Log in</button>
            <button onClick={()=> loginWithRedirect()}>Sign up</button>

        
     <footer class="footer text-light bg-dark text-center py-3">Created by Matthew J, James vH, and Manny Y © 2021</footer> 
   </div> 
   )
}

