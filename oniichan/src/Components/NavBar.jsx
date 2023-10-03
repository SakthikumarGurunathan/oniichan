import React,{useState} from "react";
import '../App.css'
import '../style.css'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
export default function NavBar(){
    const [user] = useAuthState(auth);
    function googleSignIn(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
  function signOut(){
    auth.signOut()  
};
    return(
        <div className="d-flex justify-center nav-bar">
            <div className="d-flex align-center justify-space-between nav-child">
            <h1>Oniichan</h1>
                <div style={{cursor:"pointer"}}>
                    { user?<h2 onClick={signOut}>Sign out</h2> : <img src="sign-in-google.png" alt=""  onClick={googleSignIn} width={150}/> }
                </div>

            
            </div>
        </div>
    )
}