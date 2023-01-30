import React, { useEffect, useState } from "react";

function Projects() {
  const [isActive, setIsActive] = useState(false);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [showProject, setShowProject] = useState("INSTAGRAM CLONE");
  const [videoLink, setVideoLink] = useState(
    "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/instagram.mp4?alt=media&token=d2c4e87b-8ee8-43af-acab-b0804cc11d85"
  );
  const [videoDesc, setVideoDesc] = useState(
    "In this project, i only copy instagram UI so that i cant do CRUD here"
  );

  useEffect(() =>
    document.addEventListener("scroll", (e) => {
      if (window.innerWidth >= 637) {
        if (window.pageYOffset >= 1354) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      } else {
        if (window.pageYOffset >= 780) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    })
  );

  const instagramOnClick = () => {
    setShowProject("INSTAGRAM CLONE");
    setVideoLink(
      "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/instagram.mp4?alt=media&token=d2c4e87b-8ee8-43af-acab-b0804cc11d85"
    );
    setVideoDesc(
      "In this project, i only copy instagram's UI so that i cant do CRUD here"
    );
  };

  const twitterOnClick = () => {
    setShowProject("TWITTER CLONE");
    setVideoLink(
      "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/twitter%20project.mp4?alt=media&token=252d292c-f4f2-4926-9486-351866d24645"
    );
    setVideoDesc(
      "i copied twitter's home UI and can do some task such as posting realtime. i use firebase as the backend"
    );
  };

  const glassmorphismOnClick = () => {
    setShowProject("GLASSMORPHISM");
    setVideoLink(
      "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/glassmorphism.mp4?alt=media&token=3a9703ab-91d3-42d7-8c15-ad1f7629ae19"
    );
    setVideoDesc(
      "you can try glassmorphism effect and copy it to your clipboard by clicking copy button"
    );
  };

  const chatappOnClick = () => {
    setShowProject("CHAT APP");
    setVideoLink(
      "https://firebasestorage.googleapis.com/v0/b/web-portofolio-abe83.appspot.com/o/chat.mp4?alt=media&token=93d88c64-7b9a-4eee-ada0-4d10a77ef094"
    );
    setVideoDesc(
      "real time chat app and can login using email. i used firebase as the backend and authenticator"
    );
  };

  return (
    <div className="relative">
      {isSeeMore && (
        <div className=" fixed w-screen h-screen top-0  z-30 text-black font-nunito">
          <div className=" z-40 h-60% bg-white w-85% absolute top-0 bottom-0 left-0 right-0 m-auto rounded-3xl sm:w-50% lg:w-70% lg:h-35% xl:w-50%">
            <div className="absolute top-10 left-0 right-0 mx-auto flex flex-col items-center justify-evenly w-85% h-85% lg:flex-row ">
              <div className="w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-440 lg:mr-10">
                <video autoPlay loop src={videoLink} />
              </div>
              <div className="w-64  md:w-72 lg:w-96 xl:w-96 2xl:w-440 ">
                <h1 className=" font-bold text-2xl mb-2 md:text-3xl md:font-extrabold">
                  {showProject}
                </h1>
                <p className=" text-base lg:text-xl ">{videoDesc}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-black opacity-70 w-screen h-screen"
            onClick={() => setIsSeeMore(false)}
          ></div>
        </div>
      )}
      <div id="Projects" className=" h-screen w-screen bg-bg ">
        {isActive && (
          <div className=" animate-onloadHalf flex h-screen w-screen bg-bg flex-col items-center justify-center font-nunito space-y-10 sm:flex-row sm:space-y-0 ">
            <div className=" project-container">
              <h1 className=" text-2xl mb-2 sm:text-3xl lg:text-4xl xl:text-5xl">
                MY PROJECTS
              </h1>
              <div
                onClick={() => setIsSeeMore(true)}
                className="@apply bg-white drop-shadow-lg w-72 h-56 flex flex-col items-center justify-center space-y-3  hover:bg-gray-200 ease-in-out duration-200 md:w-80 md:h-64 lg:w-96 lg:h-72 xl:w-440 xl:h-80 2xl:w-500 2xl:h-96"
              >
                <div className="  w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-440 ">
                  <video autoPlay loop src={videoLink} />
                </div>
                <p className="font-extrabold text-lg pt-2 md:text-xl">
                  CLICK TO SEE MORE!
                </p>
              </div>
            </div>
            <div className="relative h-80 w-72 sm:ml-20 lg:h-440 lg:w-440 xl:w-500 xl:h-600 2xl:w-600">
              <p
                className="project-item bg-item1 bottom-36"
                onClick={() => instagramOnClick()}
              >
                INSTAGRAM CLONE
              </p>
              <p
                className="project-item bg-item2 bottom-24"
                onClick={() => twitterOnClick()}
              >
                TWITTER CLONE
              </p>
              <p
                className="project-item bg-item3 bottom-12"
                onClick={() => glassmorphismOnClick()}
              >
                GLASSMORPHISM
              </p>
              <p
                className="project-item  bg-item4 absolute bottom-0"
                onClick={() => chatappOnClick()}
              >
                CHAT APP
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
