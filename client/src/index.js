import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Router>
        <Auth0Provider
            domain="dev-sbvvjbd7.us.auth0.com"
            clientId="uezDmme23Apl2BnZTFjR92Gmuo35fAUT"
            redirectUri={window.location.origin}>
            <StoreProvider>
                <App />
            </StoreProvider>
        </Auth0Provider>
    </Router>
    , document.getElementById("root"));
