import React from "react";
import insta from "/assets/svg/insta.svg";
import email from "/assets/svg/email.svg";
import hero from "/assets/images/hero2.png";
import { Reveal } from "../utils/Reveal";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-wrap gap-3 justify-between sm:p-24 sm:pt-48 p-10 pt-32 h-auto"
    >
      <div>
       <Reveal>
        <div className="sm:text-[1.4rem] text-[1rem] sm:mb-0 mb-2 pr-10 sm:pr-0">
          Heyy!👋🏽
        </div>
        </Reveal>
        <div className="sm:text-[70px] text-[48px] tracking-wider leading-tight">
          <Reveal>
          <div>I'm</div>
          </Reveal>
          <div className="sm:mt-[-1rem]">
            <Reveal>
            <span className="text-lime font-neutrafaceBold">
              MANISH{" "}
              <span className="sm:hidden">
                <br />
              </span>{" "}
              VAISHNAV
            </span>
            </Reveal>
          </div>
        </div>
        <Reveal>
        <div className="sm:text-[30px] text-[20px] mt-2 sm:mt-0">
          Competitive Programmer |{" "}
          <span className="sm:hidden">
            <br />
          </span>{" "}
          Web developer
        </div>
        </Reveal>
        <Reveal>
        <div className=" mt-3 ml-1 flex justify-left items-center">
          <img src={insta} />
          <img className="ml-5 email" src={email} />
        </div>
        </Reveal>
      </div>
      <div className="w-[1px] h-72 bg-white opacity-50 lg:block hidden"></div>
      <div className="sm:pt-0 pt-3">
        <img className="lg:min-w-[405px]" src={hero} />
      </div>
    </div>
  );
};

export default Home;
