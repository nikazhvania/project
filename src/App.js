import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Registration from "./pages/Registration/Registration";
import "./styles/base.scss";
import SearchPage from "./pages/Search/search";
import SearchResult from "./pages/Search/result";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/Registration" component={Registration} />
        <Route path="/search/:keyword" component={SearchResult} />
      </Switch>
    </div>
  );
}

export default App;
