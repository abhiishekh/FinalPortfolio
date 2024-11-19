// import React from 'react'
import { FiSend } from "react-icons/fi";
const Contact = () => {
  
  return (
    <div className=" my-20 flex items-center justify-center flex-col" id="contact">
      <h1 className=" text-5xl font-semibold mb-10">Contact Me</h1>
      {/* <p>You can directly Contact me here <span className=" text-black font-medium">abhishekmaurya.webdev@gmail.com</span></p> */}
      <div className=" flex flex-col gap-2  w-full lg:w-1/2">

      <input type="email" className=" p-4 w-full rounded-md" placeholder=" Your email"/>
      <input type="text" className=" p-4 w-full rounded-md" placeholder=" Subject"/>
      <textarea name="message" placeholder="Enter Your Message" id="message" className=" p-4 h-64 - w-full rounded-md"></textarea>
      <button className=" w-32 px-4 py-2 font-semibold bg-black text-white  flex items-center justify-center gap-2 rounded-full
      transform transition-all hover:scale-105 duration-200
      ">Send <span className=" text-sm "><FiSend/></span></button>

      </div>
    </div>
  )
}

export default Contact
