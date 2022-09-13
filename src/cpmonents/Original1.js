import Slider from "react-slick";
import data from "../data";
import {Link} from 'react-router-dom'
import React from "react";
import { useState } from "react";


console.log(data.movies[1].type)


const Original2 = () => {
  

  const array1 = [1, 2, 3, 4, 5, 6];
  const cardArray = array1.map((e, index) => {
    return (
      <div key={index+1} className=" ">
        <Link to={"/detail/"+data.movies[index+7].id}>

        <img
          className="object-cover py-2 px-2 w-[90vw] mx-auto rounded-xl"
          src={data.movies[index + 7].cardImg}
          />
          </Link>
      </div>
    );
  });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // arrows:false,
  };

  return (
    <div className="w-[90vw] m-auto ">
      <Slider {...settings}>{cardArray}</Slider>
    </div>
  );
};

export default Original2;
