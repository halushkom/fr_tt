import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./register";
import {AuthContext} from "./authenticated";
import {Redirect} from "react-router-dom";
import firebaseConfig from './firebaseConf';


export default function SignIn() {
    const signIn = (e) =>{
        e.preventDefault();
        const { email, password} = e.target.elements
        try {
            firebaseConfig.auth().signInWithEmailAndPassword( email.value, password.value);
        }catch(error){
            console.log(error)
        }
    }
    const {authUser} = useContext(AuthContext);
    if (authUser) {
        return <Redirect to="/timer"/>;
    }

        return (

            <Router >
            <div className="register">

                <div className="login__body">
                <form onSubmit={signIn}>
                    <div className="register__header">
                        <div className="register__titile title">
                            Login
                        </div>
                    </div>
                    <div className="register__row">
                        <div className="register__col" >

                            <div className="item-register">
                                <label className="item-register__title col-25">Email</label>
                                <input
                                    className="item-register__text col-75"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="item-register">
                                <label className="item-register__title col-25">Password</label>
                                <input
                                    className="item-register__text col-75"
                                    id="password"
                                    type="password"
                               />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button" /*onClick={signIn}*/>Login</button>
                    <div className="register__footer">
                    Don't have an account yet? <a href="/signup">Register</a>
                    </div>
                </form>
                </div>

                <Switch>
                    <Route exact path="/signup" component={Register}/>
                </Switch>
            </div>
    </Router>

    );

    }