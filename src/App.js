import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Registration from "./pages/Registration/Registration";
import "./styles/base.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/Registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
