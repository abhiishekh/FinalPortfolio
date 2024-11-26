// import React from 'react'

import project2 from '../assets/live100xdevs.png';
import project1 from '../assets/portfolio.png'
import project3 from '../assets/courseSelling.png'
import project4 from '../assets/travell.png'
import { TbLivePhoto } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
interface IntroProps {
  darkmode: boolean;
  
}


const Projects:React.FC<IntroProps> = ({darkmode}) => {
  return (
    <div className=" flex justify-center items-center flex-col w-full h-full mb-10"id='projects'>
      <h1 className={ darkmode?'text-white text-5xl font-semibold my-10':'text-5xl font-semibold my-10'}>My Projects</h1>
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full">
      <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
        <img className="w-full h-1/2 object-cover" src={project1} alt="Travel Advisor" />
        <div className="p-2">
          <h3 className="text-black font-bold text-xl">Personal Portfolio</h3>
          <h6 className="text-sm text-gray-400 font-medium">
            A portfolio website to showcase my skills & projects. 
          </h6>
          <div className=' flex gap-4 mt-2'>
    <a href="https://www.abhishekmaurya.in/" target='/'>
          <button className=' p-2 bg-live text-lg text-white rounded-md flex gap-2 items-center'>Live Demo <TbLivePhoto/></button>
          </a>
          <a href="https://github.com/abhiishekh/FinalPortfolio" target='/'>
          <button className=' p-2 bg-white text-lg text-live rounded-md flex gap-2 items-center'><FaGithub/>View Source</button>
          </a>
          </div>
        </div>

        <div className="my-5 ml-2 mr-2 lg:w-60*2 text-center mx-auto">
          <ul className="flex flex-wrap gap-3">
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Tailwind</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Gsap</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>TypeScript</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React-Icons</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
        <img className="w-full h-1/2 object-cover" src={project2} alt="Travel Advisor" />
        <div className="p-2">
          <h3 className="text-black font-bold text-xl">100xDevs Clone</h3>
          <h6 className="text-sm text-gray-400 font-medium">
            Build and deployed the 100xDevs website from scratch. It has functionality to purchase the course and see the purchased courses.
          </h6>
          <div className=' flex gap-4 mt-2'>
          <a href="https://100xdevs-rosy.vercel.app/" target='/'>
          <button className=' p-2 bg-live text-lg text-white rounded-md flex gap-2 items-center'>Live Demo <TbLivePhoto/></button>
          </a>
          <a href="https://github.com/abhiishekh/100xdevs" target='/'>
          <button className=' p-2 bg-white text-lg text-live rounded-md flex gap-2 items-center'><FaGithub/>View Source</button>
          </a>
          </div>
        </div>

        <div className="my-5 ml-2 mr-2 lg:w-60*2 text-center mx-auto">
          <ul className="flex flex-wrap gap-3">
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>NodeJs</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>REST API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Context API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>MongoDB</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>ExpressJs</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Postman</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
        <img className="w-full h-1/2 object-cover" src={project3} alt="Travel Advisor" />
        <div className="p-2">
          <h3 className="text-black font-bold text-xl">Course Selling App</h3>
          <h6 className="text-sm text-gray-400 font-medium">
            Created and deployed a full stack MERN website for selling coursses. A place where tutor come and create the courses and list for selling. They can publish/unpublish the coursses whenever they want.

          </h6>
          <div className=' flex gap-4 mt-2'>
          <a href=" https://course-selling-app-frontend-ten.vercel.app/" target='/'>
          <button className=' p-2 bg-live  text-lg text-white rounded-md flex gap-2 items-center'>Live Demo <TbLivePhoto/></button>
          </a>
          <a href="https://github.com/abhiishekh/CourseSellingApp-Frontend" target='/'>
          <button className=' p-2 bg-white text-lg text-live rounded-md flex gap-2 items-center'><FaGithub/>View Source</button>
          </a>
          </div>
        </div>

        <div className="my-5 ml-2 mr-2 lg:w-60*2 text-center mx-auto">
          <ul className="flex flex-wrap gap-3">
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>NodeJs</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>REST API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>ExpressJs</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>Postman</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full">
      <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
        <img className="w-full h-1/2 object-cover" src={project4} alt="Travel Advisor" />
        <div className="p-2">
          <h3 className="text-black font-bold text-xl">Travel Advisor</h3>
          <h6 className="text-sm text-gray-400 font-medium">
            Created a Featured fulled React website from scratch. A user can search the location and explore about the place and visit the nearby hotels. 

          </h6>
          <div className=' flex gap-4 mt-2'>
            <a href="https://trevelworld-ea9e8.web.app/home" target='/'>
          <button className=' p-2 bg-live text-lg text-white rounded-md flex gap-2 items-center'>Live Demo <TbLivePhoto/></button>
          </a>
          <a href="https://github.com/abhiishekh/mern-travel-advisor" target='/'>
          <button className=' p-2 bg-white text-lg text-live rounded-md flex gap-2 items-center'><FaGithub/>View Source</button>
          </a>
          </div>
        </div>

        <div className="my-5 ml-2 mr-2 lg:w-60*2 text-center mx-auto">
          <ul className="flex flex-wrap gap-3">
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>API</p>
            </li>
            <li className="font-regular px-4 py-1 bg-white rounded-lg">
              <p>React-Navigation</p>
            </li>
          
           
          </ul>
        </div>
      </div>
    </div>
   

        </section>  
    </div>
  )
}

export default Projects
