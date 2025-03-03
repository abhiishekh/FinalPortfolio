import React from "react";
import { Database } from "../types/supabase";
import { FaGithub } from "react-icons/fa6";
import { TbLivePhoto } from "react-icons/tb";

type Project = Database["public"]["Tables"]["projects"]["Row"];

interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full border overflow-hidden rounded-lg shadow transform transition-transform duration-200 ease-in-out hover:scale-105">
      <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg  hover:shadow-lg">
        <img
          className="w-full h-1/2 object-cover"
          src={project.images[0]}
          alt="Travel Advisor"
        />
        <div className="p-2">
          <h3 className="text-black font-bold text-xl">{project.title}</h3>
          <h6 className="text-sm text-gray-600 font-medium">
            {project.description}
          </h6>
          <div className=" flex gap-4 mt-2">
            <a href={project.live_url} target="/">
              <button className=" p-2 bg-blue-700 text-lg text-white rounded-md flex gap-2 items-center">
                Live Demo <TbLivePhoto />
              </button>
            </a>
            <a href={project.source_code_url} target="/">
              <button className=" p-2 bg-white text-lg text-blue-700 rounded-md flex gap-2 items-center">
                <FaGithub />
                View Source
              </button>
            </a>
          </div>
        </div>
        <div className="my-5 ml-2 mr-2 lg:w-60*2 text-center mx-auto flex flex-wrap gap-4">
          {project.tech_stack.map((tech, index) => (
            <ul key={index} className="flex flex-wrap gap-3">
              <li className="font-regular px-4 py-1 bg-white rounded shadow">
                <p>{tech}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
