import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function Forgot(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();
  let navigateWel = useNavigate();
  let navForgot = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    console.log(props.email)
    // console.log("inside async")
    try {
      await sendPasswordResetEmail(auth,props.email);
      console.log("password reset mail sent to ", props.email);
    } catch (err) {
      // console.log("login error ide")
      setError(err.message);
      console.log(err.message)
    }
  };

  return (
    <div>
      <div>
        <img
          className="absolute w-[100vw] object-cover h-[100vh] opacity-80 top-0 -z-10"
          src="https://images.unsplash.com/photo-1660813333650-213cb5d4ad8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80"
        />
      </div>
      <div className="bg-slate-50 w-[50vw] min-w-[350px] mx-auto max-w-[800px] rounded-md p-6 my-[20vh]">
        <div className="text-red-600 ">{error}</div>
        <div className="text-2xl">Password Reset</div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start py-2">
            <div>Email</div>
            <div>
              <input
                className="border-2 min-w-[300px] bg-slate-50 w-[45vw] m-auto max-w-[750px]"
                type="email"
                ref={emailRef}
                id="email"
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <div className="bg-yellow-200  flex flex-col justify-center items-center py-2 mt-3 hover:bg-yellow-300 m-auto  min-w-[300px] w-[45vw] max-w-[750px]">
            <button onClick={handleReset}>Reset Password</button>
          </div>
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="pt-5 underline text-sm hover:text-slate-500"
          >
            <button>Login</button>
          </div>
        </div>
        <div className="pt-2 underline text-sm hover:text-slate-500" onClick={()=>{navForgot("/signin")}}>
          <button>Create account? Sign in</button>
        </div>
      </div>
    </div>
  );
}