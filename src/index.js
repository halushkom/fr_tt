import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";


firebase.initializeApp({
    apiKey: "AIzaSyBsUymGEG-xDsQlTHtbO5LS-MxA5OVMqck",
    authDomain: "firstproject-69325.firebaseapp.com",
    databaseURL: "https://firstproject-69325-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firstproject-69325",
    storageBucket: "firstproject-69325.appspot.com",
    messagingSenderId: "80697219394",
    appId: "1:80697219394:web:4aeed570a2d7b859ab50db"

});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
