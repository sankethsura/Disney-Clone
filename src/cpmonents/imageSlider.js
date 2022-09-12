import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './img.css'
const images = [
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fslider-badag.jpg?alt=media&token=baaffcc4-1885-401d-a4ab-6f2c413157ad",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fslider-badging.jpg?alt=media&token=b8e6e033-c585-41b5-9383-7ba6a8c7d797",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fslider-scale.jpg?alt=media&token=40407675-ef2e-498e-b8c5-24d1ad614c46",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fslider-scales.jpg?alt=media&token=afd07458-8747-485c-b0e6-3e00cb9c3db5",
];

const ImageSlider = () => {
  const slidingImages = images.map((ele, index) => {
    return (
      <div key={index} className="" >
        <img className="py-2 px-2 w-[90vw] mx-auto " src={images[index]}  />
      </div>
    );
  });
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    // arrows:false,
  };
  return (
    <div className="pb-10 w-[90vw] m-auto">
      <Slider {...settings}>{slidingImages}</Slider>
    </div>
  );
};

export default ImageSlider;
