import React from "react";
import logo from "/assets/svg/Logo.svg";
import { NavMobile } from "./navMobile";

const navElements = ['Home','Projects','About','Resume'];


const Navbar = () => {
const navLists = navElements.map(element =>
    <a href={`#${element.toLowerCase()}`} className="px-8 cursor-pointer" key={element}>{element}</a>
  );

  return (
    <nav className="fixed z-10 top-0 bg-background bg-opacity-70 w-full p-8 pb-1 sm:pl-14 pl-5  flex justify-between">
      <a href="#home" className="cursor-pointer">
      <img className="sm:pl-0 pl-2" src={logo}></img>
      </a>
      <div className="lg:flex hidden justify-between text-[20px]">
        {navLists}
      </div>
      <NavMobile />
    </nav>
  );
};

export default Navbar;
