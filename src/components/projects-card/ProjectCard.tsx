// import React from 'react'
import project1 from '../../assets/travell.png';
import { TbLivePhoto } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto bg-red-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
        <img className="w-full h-1/2 object-cover" src={project1} alt="Travel Advisor" />
        <div className="p-2">
          <h3 className="text-black font-bold">Travel Advisor</h3>
          <h6 className="text-sm text-gray-600">
            This lets you explore hidden gems and hotels on your destination. It will let you explore the places and navigate you to the place.
          </h6>
          <div className=' flex gap-4 mt-2'>

          <button className=' px-4 py-1 bg-live text-regular text-white rounded-md flex gap-2 items-center'>Live Demo <TbLivePhoto/></button>
          <button className=' px-4 py-1 bg-white text-regular text-live rounded-md flex gap-2 items-center'><FaGithub/>View Source</button>
          </div>
        </div>

        <div className="my-5 ml-2 lg:w-60*2 text-center mx-auto">
          <ul className="flex flex-wrap gap-3">
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>REST API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Context API</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
