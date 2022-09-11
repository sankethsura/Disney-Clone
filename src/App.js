import logo from './logo.svg';
import './App.css';
import Login from './cpmonents/Login';
import Login_page from './cpmonents/login_page';
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import { useState } from 'react';
import Signin_page from './cpmonents/signin_page';
import Welcome from './cpmonents/welcome_page';
import Forgot from './cpmonents/forgot_password';
import { auth } from './cpmonents/firebase'; 
import { useEffect } from "react";
import {createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  } from "firebase/auth"

function App() {
  const [email, setEmail] = useState("");
  const [user,setUser] = useState("")
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
      })
      return ()=>{unsubscribe()}
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login email={email}/>} />
        <Route path = "/login" element ={<Login_page email={email} setEmail={setEmail}/>}/>
        <Route path="/signin" element={<Signin_page email={email} setEmail={setEmail}/>} />
        <Route path="/welcome" element={<Welcome email={email} setEmail={setEmail}/>} />
        <Route path="/forgot-password" element={<Forgot email={email} setEmail={setEmail}/>} />
      </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
