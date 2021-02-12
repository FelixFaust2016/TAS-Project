import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NINverification from "../pages/NINverification";
import About from "../pages/About";
import Faq from "../pages/FAQ";
import Slug from "../pages/Slug";
import Apps from "../pages/Apps";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/home" component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/ninverification" component={NINverification} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/apps" component={Apps} />
        <Route path="/slug/:id" component={Slug} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
