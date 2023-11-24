import React from "react";
import git from "/assets/svg/git.svg";
import web from "/assets/svg/Web.svg";
import { Reveal } from "../utils/Reveal";

const ProjectCard = ({ project }) => {
  const { title, description , url } = project;
  return (
    <div className="overflow-x-hidden sm:px-12  border-r border-white border-opacity-10 details mt-8">
      <div className="rounded-xl relative w-[19.5rem] h-[12rem] bg-content">
        <img src={url} className="absolute bottom-0 w-[85%] rounded-md left-[7.5%]" />
      </div>
      <div className="w-[19.5rem] text-[1.2rem] mt-2">
        <Reveal>
        <div className="flex justify-between  items-center">
          <p className="font-neutrafaceBold">{title}</p>
          <hr className="w-[7rem] bg-white opacity-20"></hr>
          <img src={git}  />
          <img src={web} />
        </div>
        </Reveal>
        <Reveal>
        <div className="text-foreground2 mt-4 leading-tight">{description}</div>
        </Reveal>
      </div>
      <hr className="sm:hidden mx-10 bg-white opacity-10 mt-10"></hr>
    </div>
  );
};

export default ProjectCard;
