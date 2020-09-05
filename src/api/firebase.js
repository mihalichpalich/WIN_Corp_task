import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDKI9zjueZ-zjnUsERztayNZrHOPrkvwg",
    authDomain: "win-corp-chat.firebaseapp.com",
    databaseURL: "https://win-corp-chat.firebaseio.com",
    projectId: "win-corp-chat",
    storageBucket: "win-corp-chat.appspot.com",
    messagingSenderId: "670640813799",
    appId: "1:670640813799:web:bb02ab25ee5d47dc455442"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);