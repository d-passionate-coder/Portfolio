import React from "react";
import ProjectCard from "./projectCard";
import { Reveal } from "../utils/Reveal";
import notes from '/assets/images/notes.png'
import movie from '/assets/images/movie_app.png'
import projects_img from '/assets/images/projects_app.png'

const projects = [
  {
    title: "Keep Notes",
    description:
      "Developed a React-based notes application with key features for managing notes effectively. Implemented the ability for users to add, edit, and delete notes within the application. Employed local storage to securely store user-created notes, ensuring data persistence between sessions.",
      url : notes
  },
  {
    title: "Movie App",
    description:
      "Designed and developed a dynamic movie website using HTML, CSS, and JavaScript. Implemented a user-friendly interface that allows users to search for movies by title. Utilized an API to fetch movie data, including plot summaries and ratings, providing users with comprehensive information.",
      url : movie
  },
  {
    title: "Projects Sharing",
    description:
      "An integrated online platform that aggregates and showcases the academic projects undertaken by students across various universities and colleges, fostering collaboration, and academic integrity. This platform, with a sophisticated plagiarism-checking mechanism at its core, aims to foster innovation.",
      url : projects_img
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <hr className="bg-white opacity-20 mx-20"></hr>
      <Reveal>
      <div className="text-center text-4xl mt-[6rem]">
        {" "}
        My Recent <span className="text-lime"> Works </span>
      </div>
      </Reveal>
      <Reveal>
      <div className="text-foreground2 text-center sm:tracking-wide">
        Here are a few projects I`ve worked on recently
      </div>
      </Reveal>


      <div className='flex flex-wrap justify-center sm:px-14 details'>
        {projects.map((item, index) =>
          <ProjectCard key={item.title} project={item} />
        )}
      </div>
    </div>
  );
};

export default Projects;
