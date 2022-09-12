import React from "react";
import Header from "./Header";
import ImageSlider from "./imageSlider";
import SmallCards from "./smallCards";
import Recommended from "./Recommended";
import Recommended2 from "./Recommended2";
export default function Welcome(props) {
  return (
    <div>
      <img
        className="fixed w-[100vw] h-[100vh] object-cover -z-10"
        src="https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fhome-background.png?alt=media&token=7dd411c3-6d99-4b84-9c1a-2da33ef9e4b6"
      />
      <Header />
      <ImageSlider />
      <SmallCards />
      <div className="text-white flex w-[90vw] m-auto left-0 pb-2 lg:text-xl">
        Recommended
      </div>
      <div className="flex lg:hidden">
        <Recommended />
      </div>
      <div className="hidden lg:flex">
        <Recommended2 />
      </div>
    </div>
  );
};
