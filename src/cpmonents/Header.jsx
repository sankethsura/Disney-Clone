import { BsPlusLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FaTape } from "react-icons/fa";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import { useNavigate } from "react-router-dom";

// import {auth} from '../firebase'

const Header = (props) => {
  let navigate = useNavigate();
  function handleLogOut() {
    signOut(auth)
      .then(() => {
        console.log("logout successful ");
        // navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="text-slate-50 bg-slate-900 h-[60px] ">
      <section className="w-[80vw] flex items-center justify-between m-auto h-[60px]">
        <div className="w-20 ">
          <img
            className=""
            src="https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Flogo.svg?alt=media&token=2912b4ea-4add-4404-a708-c6f46f5665f0"
          />
        </div>
        <div>
          <section className="lg:flex hidden">
            <div className="flex items-center px-2">
              <AiFillHome />
              <div className="text-sm px-1">HOME</div>
            </div>
            <div className="flex items-center px-2">
              <FiSearch />
              <div className="text-sm px-1">SEARCH</div>
            </div>
            <div className="flex items-center px-2">
              <BsPlusLg />
              <div className="text-sm px-1">WATCHLIST</div>
            </div>
            <div className="flex items-center px-2">
              <AiFillStar />
              <div className="text-sm px-1">ORIGINAL</div>
            </div>
            <div className="flex items-center px-2">
              <MdLocalMovies />
              <div className="text-sm px-1">MOVIES</div>
            </div>
            <div className="flex items-center px-2">
              <FaTape />
              <div className="text-sm px-1">SERIES</div>
            </div>
          </section>
        </div>
        {/* <div className="w-10 h-10 rounded-lg bg-white"></div> */}
        
        <button
          className="border-white border-[1px] rounded-md w-[5em] hover:bg-slate-800 text-sm h-[2em]"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      
        <button
          className="border-white border-[1px] rounded-md w-[5em] hover:bg-slate-800 text-sm h-[2em]"
          onClick={() => {
            navigate("/");
            handleLogOut();
          }}
        >
          Log Out
        </button>
      </section>
    </div>
  );
};

export default Header;
