import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Registration from "./pages/Registration/Registration";
import "./styles/base.scss";
import SearchPage from "./pages/Search/search";
import SearchResult from "./pages/Search/result";
import Fullpost from "./pages/Fullpost/Fullpost";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Reset from "./pages/Reset/reset";
import ResetResult from "./pages/Reset/resetResult";
import Login from "./pages/login/login";
import AddPost from "./pages/add-post/add";
import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard/dashboard";
import { auth } from "./firebase/firebase.config";
const displayPage = () => {
  auth.onAuthStateChanged((user) => {
    if (user == null) {
      console.log("not logged in", user);
    } else {
      console.log("logged in", user);
    }
  });
};
function App() {
  return (
    displayPage(),
    (
      <div className="container" id="notlogged">
        <Header />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/login" component={Login} />
          <Route path="/search/:keyword" component={SearchResult} />
          <Route path="/Fullpost/:postId-:keyword" component={Fullpost} />
          <Route path="/about" component={About} />
          <Route path="/profile/:userId" component={Profile}></Route>
          <Route path="/reset/:userId" component={Reset}></Route>
          <Route path="/resetResult/:userId" component={ResetResult}></Route>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/add-post" component={AddPost}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    )
  );
}

export default App;
