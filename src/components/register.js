import React, {Component, useState} from "react";
import firebase from "firebase";
import {BrowserRouter as Router,  Route, Switch} from "react-router-dom";
import AutPage from "./autpage";
import firebaseConfig from './firebaseConf';
import {Redirect} from "react-router-dom";

function Register(){
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password, sname, name} = e.target.elements;
        try {
            await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
                .then(function (user) {
                    console.log(user.user.uid)
                    firebase.database().ref(`users/${user.user.uid}`).set(
                        {
                            lastName: sname.value,
                            firstName: name.value,
                            bigScreenTimer: 0,
                            smallScreenTimer: 0
                        }
                    )
                })

            setCurrentUser(true);
        } catch (error) {
            alert(error);
        }
    };
    if (currentUser) {
        return <Redirect to="/timer"/>;
    }
    return (
        <Router >
            <div className="register">
                <div className="register__body">
                    <div className="register__header">
                        <div className="register__titile title">
                            Register
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="register__row">
                        <div className="register__col" >
                            <div className="item-register">
                                <label className="item-register__title col-25">First name</label>
                                <input
                                    className="item-register__text col-75"
                                    id="name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="item-register">
                                <label className="item-register__title col-25">Second name</label>
                                <input
                                    className="item-register__text col-75"
                                    id="sname"
                                    sname="sname"
                                    type="text"

                                />
                            </div>
                            <div className="item-register">
                                <label className="item-register__title col-25">Email</label>
                                <input
                                    className="item-register__text col-75"
                                    id="email"
                                    name="email"
                                    type="email"

                                />
                            </div>
                            <div className="item-register">
                                <label className="item-register__title col-25">Password</label>
                                <input
                                    className="item-register__text col-75"
                                    id="password"
                                    name="password"
                                    type="password"

                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button" >Sign up</button>
                    </form>
                    <div className="register__fotter">
                        Already registered? <a href="/">Log in</a>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={AutPage}/>
                </Switch>
            </div>
        </Router>
    )
}
export default Register;