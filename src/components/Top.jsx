import React from "react";
import { CgArrowLongRightC, CgArrowLongLeftC } from "react-icons/cg";
import { BsMouse } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import Social from "./Social";

const Top = () => {

  const downloadPDF = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href =  `https://aps.onrender.com/resume_aps.pdf`;
    downloadLink.download = 'resume_aps.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="h-screen home relative text-white" id="home">
      <div className="flex flex-col justify-center items-center">
        <div className=" text-2xl md:text-4xl uppercase p-2 relative font-semibold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi There!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm Aung Paing Soe")
                .pauseFor(1000)
                .deleteChars(14)
                .typeString("a Web Developer")
                .pauseFor(1000)
                .deleteChars(15)
                .typeString(
                  'vary <span style="color: #27ae60;">Hard</span> Worker'
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString("Aung Paing Soe")
                .start()
            }}
          />
        </div>
        <div>
          <span className="flex justify-center items-center gap-2 font-semibold">
            <CgArrowLongRightC />
            Welcome to my site!
            <CgArrowLongLeftC />
          </span>
        </div>
        <div className=" mt-6">
          <button className="button-89" onClick={downloadPDF}>
            Download CV
          </button>
        </div>
        {/* Social */}
        <div className="md:absolute md:bottom-[50%] mt-5 md:mt-0 md:left-5">
          <Social />
        </div>
        {/* Social */}
        <div>
          <a href="#about">
            <span className="absolute bottom-10 flex flex-col justify-center items-center gap-1 cursor-pointer hover:text-gray-800 z-50 ">
              <BsMouse className=" text-3xl animate__animated animate__bounce animate__infinite infinite" />
              <RiArrowDropDownLine className=" font-semibold text-3xl" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
