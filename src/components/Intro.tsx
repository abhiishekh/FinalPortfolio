// import React from 'react'

import abhishek from '../assets/abhishek.png'
import { Icons } from './icons/Icons'
import { MdArrowRightAlt } from "react-icons/md";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import resume from '../assets/Abhishek.pdf'

const Intro = () => {
  return (
    <div className=' w-full h-auto text-lg text-center my-40 lg:my-60 leading-8 md:text-3xl md:leading-10' id='home'>
        <div className=' w-32 h-32 rounded-full overflow-hidden mb-10 mx-auto'>

        <img src={abhishek} alt="" className=' h-100 w-100'/>
        </div>
        <div>

     <span className=' text-black-400 font-semibold'>Hello, </span>I’m a <span className=' text-black-400 font-semibold'>Full Stack MERN Developer.</span><br /> 
    I create <span className=' text-black-400 font-semibold'> modern</span>, <span className=' text-black-400 font-semibold'> Minimal</span>
    , and <span className=' text-black-400 font-semibold'>secure websites</span>.<div className="br"></div>
    My focus is on delivering <span className=' text-black-400 font-semibold'>high-quality</span>, and <span className=' text-black-400 font-semibold'>efficient code </span> 
     <span className=' blinking-cursor md:h-5'></span>
        </div>

<div className=' flex gap-4 items-center justify-center mt-4 flex-wrap flex-col md:flex-row'>
      <a href="#contact">
    <button className=' bg-white px-4 py-2 border-spacing-1 
    rounded-full hover:cursor-pointer flex gap-4 items-center text-xl font-medium
    transform transition-transform duration-200 ease-in-out hover:scale-105
    '>
      Contact Me <MdArrowRightAlt/> </button> </a>

      <a href={resume} download="Abhishek_resume.pdf">
    <button className=' bg-white px-4 py-2 border-spacing-1 rounded-full hover:cursor-pointer
     flex gap-4 items-center text-xl font-medium transform transition-transform duration-200 ease-in-out hover:scale-105'
     >Download Resume <Icons/> </button></a>
    <div className='flex gap-4'>

    <a href="https://github.com/abhiishekh" target='/'>
    <button className=' bg-white p-3 border-spacing-1 rounded-full hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110'><FaSquareGithub className=' text-2xl'/></button>
    </a>
    <a href="https://www.linkedin.com/in/abhiishek08/" target='/'>
    <button className=' bg-white p-3 border-spacing-1 rounded-full hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110'><FaLinkedin className=' text-2xl'/></button>
    </a>
    </div>


</div>
    </div>
  )
}

export default Intro
