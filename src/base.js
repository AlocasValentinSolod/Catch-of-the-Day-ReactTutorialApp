import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgWCmNo0VuQaAwQ86ZLxChv8Ode1jOA60",
    authDomain: "catch-of-the-day-val-solod.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-val-solod.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;