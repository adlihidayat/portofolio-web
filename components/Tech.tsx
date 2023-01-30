import React, { useEffect, useRef, useState } from "react";

function Tech() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() =>
    document.addEventListener("scroll", (e) => {
      if (window.innerWidth >= 1020) {
        if (window.pageYOffset >= 220) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      } else {
        if (window.pageYOffset >= 100) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    })
  );

  return (
    <div
      id="Tech"
      className=" w-screen h-screen bg-bg stroke font-nunito relative flex flex-col  overflow-x-hidden overflow-y-hidden  justify-end lg:justify-center lg:-space-y-4"
    >
      {isActive && (
        <div className="animate-onloadHalf">
          <div className="flex absolute right-7 top-7 lg:static lg:ml-10 lg:items-center">
            <p className=" text-3xl font-black w-28 lg:hidden sm:text-5xl sm:w-48">
              WHAT ABOUT THE
            </p>
            <p className=" text-3xl font-black w-7 text-center stroke text-transparent sm:text-5xl md:w-14 lg:hidden">
              T E C H
            </p>
            <p className="hidden lg:block lg:text-black lg:text-9xl lg:w-auto lg:font-black xl:text-150">
              TECH
            </p>
            <div className="tech-border bg-black"></div>
          </div>
          <div className=" ml-3.5 mb-30% md:mb-20% lg:mb-0 lg:ml-10 lg:-space-y-4">
            <div className="flex items-center lg:w-screen">
              <a className="tech-item mr-7" href="https://reactjs.org/">
                REACTJS
              </a>
              <div className="tech-border"></div>
            </div>
            <div className="flex items-center lg:w-screen">
              <a className="tech-item mr-7" href="https://vercel.com/">
                NEXTJS
              </a>
              <div className="tech-border"></div>
            </div>
            <div className="flex items-center lg:w-screen">
              <a className="tech-item mr-7" href="https://www.javascript.com/">
                JAVASCRIPT
              </a>
              <div className="tech-border"></div>
            </div>
            <div className="flex items-center lg:w-screen">
              <a
                className="tech-item mr-7"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                HTML
              </a>
              <div className="tech-border"></div>
            </div>
            <div className="flex items-center lg:w-screen">
              <a className="tech-item mr-7" href="https://tailwindcss.com/">
                TAILWIND
              </a>
              <div className="tech-border"></div>
            </div>
            <div className="flex items-center lg:w-screen">
              <a
                className="tech-item mr-7"
                href="https://www.w3.org/Style/CSS/Overview.en.html"
              >
                CSS
              </a>
              <div className="tech-border"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tech;
