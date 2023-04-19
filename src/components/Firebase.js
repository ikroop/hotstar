import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCmWttg_3FDJ7Y0kN4HhjI4RsZ5WD3ULvw",
    authDomain: "hotstar-f92b5.firebaseapp.com",
    projectId: "hotstar-f92b5",
    storageBucket: "hotstar-f92b5.appspot.com",
    messagingSenderId: "405077202856", 
    appId: "1:405077202856:web:9cc16d74f3ab4131faef9d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider, storage};
  export default db;
  