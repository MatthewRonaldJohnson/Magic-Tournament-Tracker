import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../components/Footer';
import Logo from '../components/NavBar/assets/512MTTIcon.png';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div className="center-image">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="container text-center mt-5">
        <h2><span role="img" aria-label="img">✨</span> Magic-Tournament Tracker <span role="img" aria-label="img">✨</span></h2>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => loginWithRedirect()}
        >
          Log in / Sign Up with Auth0
        </button>
      </div>
      <Footer />
    </div>
  );
}
