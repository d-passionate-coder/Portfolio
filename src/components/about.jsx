import React from "react";
import { Reveal } from "../utils/Reveal";

const About = () => {
  return (
    <div id="about">
      <hr className="sm:block hidden bg-white opacity-20 mx-20 mt-16"></hr>
      <Reveal>
      <div className="text-center text-4xl pt-[6rem]">
        About <span className="text-lime"> Me </span>
      </div>
      </Reveal>
      <Reveal>
      <div className="text-foreground2 sm:px-60 px-5 sm:text-[1.5rem] text-[20px] text-center mt-24 leading-tight">
        I am a final year undergraduate studying computer engineering. My areas
        of interest are competitive programming and web development. I have
        achieved the specialist rank on Codeforces and attained 3 stars on
        CodeChef in competitive programming. Currently, I am actively expanding my knowledge in web development to create dynamic and user-friendly applications. I am excited to connect with like-minded professionals and explore opportunities in the field.
      </div>
      </Reveal>
    </div>
  );
};

export default About;
