import React, {useState, useEffect, useContext} from "react";
import firebase from "firebase";
import {AuthContext} from "./authenticated";
import firebaseConfig from "./firebaseConf";
import {Redirect} from "react-router-dom";


export default function Timer(){
    const userId = firebase.auth().authUser ? firebase.auth().authUser.uid : null;
    let [webScreen, setWebScreen] = useState(0)
    let [mobScreen, setMobScreen] = useState(0)
    let screenWidth = window.innerWidth
    const updateWebTimer = (uid, bigScreenTimer) => {

        let postData = {
            bigScreenTimer,
        }

        firebase.database().ref(`users/${userId}`).update(postData)
    }
    const updateMobTimer = (uid, smallScreenTimer) => {

        let postData = {
            smallScreenTimer,
        }

        firebase.database().ref(`users/${userId}`).update(postData)
    }

    const setWeb = () => {
        setWebScreen(webScreen => webScreen + 1)

    }
    const setMob = () => {
        setMobScreen(mobScreen => mobScreen + 1)
    }

    let timerRef = firebase.database().ref('users/' + userId)

    useEffect(() => {
        timerRef.once('value').then(function (snapshot) {
            const data = snapshot.val()
            setWebScreen(data.bigScreenTimer)
            setMobScreen(data.smallScreenTimer)
        })
        let timer = setInterval(async function () {
            if (screenWidth > 400) {
                setWeb()
            } else if (screenWidth <= 400) {
                setMob()
            }

        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const updateHelper = async () => {
        let data = {}
        await timerRef.once('value').then(function (snapshot) {
            data = snapshot.val()
            if (screenWidth <= 400) {
                setWebScreen(data.bigScreenTimer)
            }
            if (screenWidth > 400) {
                setMobScreen(data.smallScreenTimer)
            }
        })
        if (screenWidth <= 400) {
            await updateMobTimer(userId, mobScreen)
        } else if (screenWidth > 400) {
            await updateWebTimer(userId, webScreen)
        }

    }

    useEffect(() => {
        updateHelper()
    }, [webScreen, mobScreen])

    const {authUser} = useContext(AuthContext);
    if (!authUser) {
        return <Redirect to="/" />;
    }

    function secondsToHms(d) {
        d = Number(d);
        // eslint-disable-next-line
        let hour = Math.floor(d / 3600);
        let minutes = Math.floor(d % 3600 / 60);
        let seconds = Math.floor(d % 3600 % 60);

        let hDisplay = hour < 10 ? '0' + hour + ':' : hour + ':';
        let mDisplay = minutes < 10 ? '0' + minutes + ':' : minutes + ':';
        let sDisplay = seconds < 10 ? '0' + seconds : seconds;
        return hDisplay + mDisplay + sDisplay;
    }
    return (
        <div>
            <a onClick={()=>firebase.auth().signOut()}>Log out</a>
            <div className="timer__body">
                <div className="timer_container">
                    <span container-header>Web</span>

                    <div container-item>{secondsToHms(webScreen)}</div>

                </div>
                <div className="timer_container">
                    <span container-header>Mobile</span>
                    <div container-item>{secondsToHms(mobScreen)}</div>

                </div>
            </div>
        </div>
    )
}