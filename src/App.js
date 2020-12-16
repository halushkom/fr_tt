import React from "react";
import './App.css';
import SignIn from "./components/autpage";
import Register from "./components/register";
import Error from "./components/error";
import Timer from "./components/timer"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Authenticated} from './components/authenticated'

export default function App() {
    return (
        <Authenticated>
            <Router >
                <Switch>
                    <Route exact path="/" component={SignIn}/>
                    <Route exact path="/signup" component={Register}/>
                    <Route exact path="/timer" component={Timer}/>
                    <Route component={Error} />
                </Switch>
            </Router>
        </Authenticated>
    );
}

