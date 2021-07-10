import React, { useState, useEffect } from "react";
import { firebaseAuth } from "../config/firebase";

export const AuthContext = React.createContext();

/*Wrap all components in authprovider and they will get access to value and they are children in authprovider*/

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function login(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return firebaseAuth.signOut();
  }

  function signUp(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email , password);
  }

  useEffect(() => {
    // event attach kra hai
    // logged In state => loggedOut state
    // loggedOut state => loggedIn state
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("Inside auth state changed !!", user);
      setCurrentUser(user);
    });
  }, []);       
  // this useEffect runs only when component mounts to check if user is null or present and if user state changes then onAuthStateChanged func runs

  let value = {
    currentUser: currentUser,
    signOut: signOut,
    login: login,
    signUp: signUp,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}