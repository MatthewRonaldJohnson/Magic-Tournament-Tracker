import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Analytics from "./pages/Analytics";
import CardSearch from "./pages/CardSearch";
import LandingPage from "./pages/LandingPage";
import LifeCounter from "./pages/LifeCounter";
import MatchInput from "./pages/MatchInput";
import Menu from "./pages/Menu";
import NoMatch from "./pages/NoMatch";

function App() {

  if (!userLoggedIn) return <Redirect to={LandingPage} />

  return (
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/Analytics" component={Analytics} />
            <Route exact path="/CardSearch" component={CardSearch} />
            <Route exact path="/LifeCounter" component={LifeCounter} />
            <Router exact path="/MatchInput" component={MatchInput} />
            <Route component={NoMatch} />
          </Switch>
      </div>
  );
}

export default App;
