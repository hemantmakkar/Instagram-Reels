import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAK-KqbHYi76xLfnVy_srARDugb3GX1mJE",
  authDomain: "react-login-11b02.firebaseapp.com",
  projectId: "react-login-11b02",
  storageBucket: "react-login-11b02.appspot.com",
  messagingSenderId: "354170317942",
  appId: "1:354170317942:web:a388cebcf2602c1f570357",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();       // for uploading data on cloud
export let firebaseDB = firebaseApp.firestore();       // for storing json data into database
