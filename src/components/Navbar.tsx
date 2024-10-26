import React from "react";
import { CiMenuFries } from "react-icons/ci";
 

const Navbar = () => {
  return (
    <div className="block container pt-6 font-extrabold   bg-black fixed">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium text-pink-300 animate-pulse h-12"  >  
          Portfolio
        </div>

        <ul className="gap-10 lg:gap-16 hidden md:flex">   
          <li className="Link">
            <a className="px-3 py-3 rounded-full bg-pink-300 hover:bg-pink-700 text-black  " href="#hero">Home</a>
          </li>
          <li className="Link">
            <a className="px-3 py-3 rounded-full  bg-pink-300 hover:bg-pink-700 text-black" href="#about">About Me</a>
          </li>
          <li className="Link">
            <a className="px-3 py-3 rounded-full  bg-pink-300 hover:bg-pink-700 text-black" href="#projects">Projects</a>
          </li>
          <li className="Link">
            <a className="px-3 py-3 rounded-full  bg-pink-300 hover:bg-pink-700 text-black" href="#skills">Skills</a>
          </li>
          <li className="Link">
            <a className="px-3 py-3 rounded-full  bg-pink-300 hover:bg-pink-700 text-black" href="#contact">Contact us</a>
          </li>
        </ul>
        <CiMenuFries className="md:hidden" size={30} />
      </div>
    </div>
  );
};
export default Navbar;


 