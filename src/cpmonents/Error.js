import { useNavigate } from "react-router-dom";
const Error = () => {
    const nav= useNavigate()
    return ( <div onClick={()=>{
        nav("/welcome")
    }} className="">
        <img className="w-[100vw] h-[100vh] fixed object-cover" src="https://img.freepik.com/premium-vector/error-404-page-template-landing-page-with-road-sing-flat-design_249405-256.jpg?w=2000" />
    </div> );
}
 
export default Error;