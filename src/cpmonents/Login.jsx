import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  // console.log("login user: ",props.email)
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="flex flex-col w-[100vw] h-[100vh]">
        <img
          className="absolute -z-10 w-[100vw] h-[100vh] object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Flogin-background.jpg?alt=media&token=03a7df36-dcab-468c-8dfd-7c10f65a18b1"
        />
        <div className="">

        <Header email={props.email} />
        </div>

        <div className="flex flex-col w-[80vw] h-[55vh] lg:w-[60vw]  m-auto ">
          <img
            className="py-5"
            src="https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fcta-logo-one.svg?alt=media&token=7bd26c5e-63d1-4662-a7f9-18a58c561877"
          />
          
          <button
          onClick={()=>{navigate("/welcome")}}
          className="bg-blue-600 h-[3em] text-slate-50 font-semibold rounded-md text-lg py-5 items-center flex justify-center">GET ALL THERE</button>
          
          <div className="text-slate-50 p-5">
            Get Premier Access to Raya and the Last Dragon for an additional fee with a disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fcta-logo-two.png?alt=media&token=9c10a7ee-d9a1-43a6-a287-b475e041745d" />
        </div>
      </div>
    </div>
  );
};

export default Login;
