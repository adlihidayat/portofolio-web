import React from "react";

function Contact() {
  return (
    <div
      id="Contacts"
      className=" relative bg-bg w-screen h-72 flex flex-col justify-end items-end font-nunito  md:h-60 "
    >
      <p className="absolute top-10 -left-4 stroke2 font-extrabold text-6xl text-transparent md:top-24 md:text-7xl xl:text-8xl 2xl:text-9xl 2xl:top-20">
        CONTACTS
      </p>
      <div className="flex mb-8 mr-6 md:absolute md:left-440 xl:left-600 2xl:left-800">
        <div className=" space-y-8 mr-8">
          <div className="mr-5">
            <p className=" font-black text-xl lg:text-3xl">FIVERR</p>
            <p className=" text-xs text-gray-500 lg:text-base">@ADLIHDYT</p>
          </div>
          <div>
            <p className=" font-black text-xl lg:text-3xl">EMAIL</p>
            <p className=" text-xs text-gray-500 lg:text-base">
              @ADLIHIDAYAT30@GMAIL.COM
            </p>
          </div>
        </div>
        <div className=" space-y-8">
          <div>
            <p className=" font-black text-xl lg:text-3xl">LINKEDIN</p>
            <p className=" text-xs text-gray-500 lg:text-base">@ADLIHIDAYAT</p>
          </div>
          <div>
            <p className=" font-black text-xl lg:text-3xl">INSTAGRAM</p>
            <p className=" text-xs text-gray-500 lg:text-base">@ADLIHDYT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
