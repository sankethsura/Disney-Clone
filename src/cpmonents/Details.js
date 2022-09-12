import { useParams } from "react-router-dom";
import data from "../data";
import { BsPlayFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoPeopleCircleOutline } from "react-icons/io5";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  console.log(data.movies[id].title);
  return (
    <div>
      <img
        className="fixed -z-20 w-[100vw] h-[100vh] object-cover "
        src={data.movies[id].backgroundImg}
      />
      <div className="fixed bottom-0 w-[100vw] h-[70vh] -z-10 bg-gradient-to-t from-gray-700 to-transparent"></div>
      <div className="flex flex-col h-[90vh] justify-end items-start ">
        <img
          className="object-contain  w-[45vw] min-w-[350px] max-w-[600px] py-10 pl-10"
          src={data.movies[id].titleImg}
        />
        <allbtns className="flex items-center pl-10">
          <section className="w-[100px] h-[50px] bg-slate-50 rounded-md flex items-center justify-center mr-5">
            <div className="scale-150 pr-1">
              <BsPlayFill />
            </div>
            <button className="">PLAY</button>
          </section>
          <section className="w-[120px] h-[50px]   border-[2px] rounded-md flex items-center justify-center ">
            <div className="w-[120px] h-[50px]  bg-black opacity-20 absolute"></div>
            <div className="scale-150 pr-1 text-white">
              <BsPlayFill />
            </div>
            <button className="text-white">TRAILER</button>
          </section>
          <div className="text-white hover:text-slate-700 scale-[250%] translate-x-6 duration-200"><IoIosAddCircleOutline /></div>
          <div className="text-white hover:text-slate-700 scale-[250%] translate-x-14 duration-200"><IoPeopleCircleOutline /></div>
        </allbtns>
        <div className="flex text-white py-2 pl-10">{data.movies[id].subTitle}</div>
        <div className="flex text-white py-2 text-left w-[75vw] pl-10">{data.movies[id].description}</div>
      </div>
    </div>
  );
};

export default Details;
