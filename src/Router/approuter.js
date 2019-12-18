import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Accueil from "../Screens/Accueil/accueil";

const AppRouter = props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route exact path="/accueil">
        <Accueil />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
