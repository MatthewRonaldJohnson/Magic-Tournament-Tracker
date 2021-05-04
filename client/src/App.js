import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


import Analytics from "./pages/Analytics";
import CardSearch from "./pages/CardSearch";
import LandingPage from "./pages/LandingPage";
import LifeCounter from "./pages/LifeCounter";
import MatchInput from "./pages/MatchInput";
import Menu from "./pages/Menu";
import NoMatch from "./pages/NoMatch";
import "./utils/css/customCss.css"
import "./utils/css/themedBS4.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) return <LandingPage />

  console.log(user)

  return (
      <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/Analytics" component={Analytics} />
            <Route exact path="/CardSearch" component={CardSearch} />
            <Route exact path="/LifeCounter" component={LifeCounter} />
            <Route exact path="/MatchInput" component={MatchInput} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
      </div>
  );
}

export default App;
