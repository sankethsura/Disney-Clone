import Slider from "react-slick";
import data from "../data";
import {Link} from 'react-router-dom'
console.log(data.movies[1].title);


const Recommended2 = () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const cardArray = array1.map((e, index) => {
    return (
      <div key={index+1} className=" ">
        <Link to={"/detail/"+data.movies[index+1].id}>

        <img
          className="object-cover py-2 px-4 w-[90vw] mx-auto rounded-3xl"
          src={data.movies[index + 1].cardImg}
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
    <div className="w-[90vw] m-auto">
      <Slider {...settings}>{cardArray}</Slider>
    </div>
  );
};

export default Recommended2;
