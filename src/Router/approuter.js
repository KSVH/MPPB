import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Accueil from "../Screens/Accueil/accueil";
import Panier from "../Screens/Panier/panier";

const AppRouter = props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route exact path="/accueil">
        <Accueil />
      </Route>
      <Route exact path="/panier">
        <Panier />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
