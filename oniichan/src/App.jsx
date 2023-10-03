import { useState } from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css'
import NavBar from './Components/Navbar'
import Welcome from './Components/Welcome'
import ChatBox from './Components/ChatBox'

function App() {
  const [user] = useAuthState(auth);

  return (
      <div className='app-container'>
        <NavBar/>
        {!user? <Welcome /> : <ChatBox/>}
      </div>
  )
}

export default App
