import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NINverification from "../pages/NINverification";


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Switch>
        <Route path="/" component={LandingPage } exact={true} />
        <Route path="/home" component={LandingPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/ninverification" component={NINverification} />


    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;