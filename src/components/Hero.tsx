 "use client"
 import React from "react";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
 

const Hero = () => {
  return (
    <div>
     <div id="Hero"
      className="min-h-screen bg-no-repeat bg-[url(/images.jpg)] bg-left lg:bg-[16%] bg-cover"
      style={{
        backgroundSize: "35%" 
       }}
     
    >
      <Navbar />
      

      <div className="grid lg:grid-cols-2 h-[calc)(100vh 60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div
            className="pt-20 text-transparent bg-clip-text bg-gradient-to-r text-center from-purple-300 to-pink-500"
 
          >
            <p  > Hello,</p>
            
            <Typewriter 
              words={["Welcome to my portfolio", "I'm Humema Israr"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={80}
              delaySpeed={500}
            /> 
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;
//bg-left lg:bg-[17%] bg-cover