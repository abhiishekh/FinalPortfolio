// import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" flex justify-between mb-5">
      <h1 className=" text-gray-500">© 2024 Abhishek Maurya</h1>
      <div className=" flex gap-3 items-center">
      <a href="https://github.com/abhiishekh" target='/'>
            <FaGithub className=" rounded-full text-gray-500 text-xl cursor-pointer transform transition-all hover:scale-125 duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/abhiishek08/" target='/'>
            <TiSocialLinkedinCircular className=" rounded-full text-gray-500 text-2xl cursor-pointer transform transition-all hover:scale-125 duration-300"/>
            </a>
      </div>
    </div>
  )
}

export default Footer
