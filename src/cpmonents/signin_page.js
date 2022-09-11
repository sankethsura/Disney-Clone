import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase"; 
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        } from "firebase/auth"

export default function Signin_page(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  let navigate = useNavigate();
  let navigateWel = useNavigate()

//   const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passwordConfirm,setPasswordConfirm] = useState("")
  const [error,setError] = useState("")


  const handleSignup = async(e)=>{
    e.preventDefault();
    setError("")
    // console.log("asdf")
    if(password!==passwordConfirm){
        return setError('Password do not match')
    }
    try{
        await createUserWithEmailAndPassword(auth,props.email,password)
        console.log("user logged in with",props.email)
        navigateWel("/welcome")
        
    }catch(err){
        // console.log("error ide")
        setError(err.message)
    }
  }
  return (
    <div>
      <div>
        <img
          className="absolute w-[100vw] object-cover h-[100vh] opacity-80 top-0 -z-10"
          src="https://images.unsplash.com/photo-1660813333650-213cb5d4ad8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80"
        />
      </div>
      <div className="bg-slate-50 w-[50vw] mx-auto min-w-[350px] max-w-[800px] rounded-md p-6 my-[20vh]">
        <div className="text-2xl">Sign-Up</div>
        <div className="text-red-600 ">{error}</div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start py-2">
            <div>Email</div>
            <div>
              <input
                className="border-2 min-w-[300px] bg-slate-50 w-[45vw] max-w-[750px]"
                type="email"
                ref={emailRef}
                id="email"
                onChange={e=>props.setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start py-2">
            <div>Password</div>
            <div>
              <input
                className="border-2 min-w-[300px] bg-slate-50 w-[45vw] m-auto max-w-[750px]"
                type="password"
                ref={passwordRef}
                id="password"
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start py-2">
            <div>Password Confirm</div>
            <div>
              <input
                className="border-2 min-w-[300px] bg-slate-50 w-[45vw] m-auto max-w-[750px]"
                type="password"
                ref={passwordConfirmRef}
                id="passwordConfirm"
                onChange={e=>setPasswordConfirm(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-yellow-200  flex flex-col justify-center items-center py-2 mt-3 hover:bg-yellow-300 min-w-[300px] w-[45vw] max-w-[750px]">
            <button onClick={handleSignup}>Sign in</button>
          </div>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="pt-5 underline text-sm hover:text-slate-500"
          >
            <button>Already have an account!!!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
