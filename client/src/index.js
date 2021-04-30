import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>
    , document.getElementById("root"));
