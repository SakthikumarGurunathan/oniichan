import React,{useState} from 'react';
import '../App.css'
import '../style.css'
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export default function ChatBox(){
    return(
        <div className="justify-center">
            <h1>This is where you gonna chat</h1>
        </div>
    )
}
