import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBsUymGEG-xDsQlTHtbO5LS-MxA5OVMqck",
    authDomain: "firstproject-69325.firebaseapp.com",
    databaseURL: "https://firstproject-69325-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firstproject-69325",
    storageBucket: "firstproject-69325.appspot.com",
    messagingSenderId: "80697219394",
    appId: "1:80697219394:web:4aeed570a2d7b859ab50db"
});

export default firebaseConfig;