import React, { useState } from "react";
import Nav from "./Nav";

type Props = {
  navActive: (event: React.MouseEvent<HTMLElement>) => void;
};
function LandingPage({ navActive }: Props) {
  return (
    <div
      id="Main"
      className=" w-screen h-screen bg-bg flex flex-col justify-center md:items-start overflow-x-hidden"
    >
      <div
        className=" space-y-1 absolute right-7 top-7 animate-onloadHalf group cursor-pointer"
        onClick={navActive}
      >
        <div className=" w-6 h-1 bg-black md:w-7"></div>
        <div className=" w-6 h-1 bg-black md:group-hover:translate-x-4 md:group-hover:bg-red-600 duration-500 ease-in-out md:w-7"></div>
        <div className=" w-6 h-1 bg-black md:w-7"></div>
      </div>

      <div className=" ml-10 space-y-24 mt-20  animate-onloadOneHalf">
        <div>
          <p className=" font-extrabold text-2xl font-nunito ml-1 sm:text-4xl">
            I am Adli
          </p>
          <p className=" font-nunito text-5xl font-black w-60 sm:text-7xl sm:w-96 md:text-7xl lg:text-8xl 2xl:text-9xl 2xl:w-fulscreen">
            FRONT END WEB DEVELOP ER<span className=" text-red-700">.</span>
          </p>
        </div>
        <p className=" font-nunito text-xl font-semibold text-gray-600 w-60 sm:text-2xl sm:w-96 md:text-xl md:w-60 md:absolute sm:right-12 md:bottom-64 lg:bottom-44 xl:text-2xl 2xl:text-3xl 2xl:w-80">
          just an university student that want to get some money and experience
          from this indusrty
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
