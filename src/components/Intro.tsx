import abhishek from '../assets/abhishek.png';
import { Icons } from './icons/Icons';
import { MdArrowRightAlt } from "react-icons/md";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import react from '../assets/react.png';
import javascript from '../assets/js.png';
import typescript from '../assets/typescript.png';
import vscode from '../assets/vs.png'
import Gsap from '../assets/gsap.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/html.png'
import figma from '../assets/figma.png'
import resume from '../assets/Abhishek.pdf';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Intro = () => {

  useGSAP(() => {
    // Animating the image with up and down motion
    gsap.fromTo('.intro-img', { y: 5 }, {
      y: -5,
      duration: 1,
      delay: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'none',
    });

    // Animating buttons with fade-in and margin-top
    gsap.from('.intro-btn', {
      duration: 0.3,
      opacity: 0,
      stagger: 0.5,
      delay: 0.5,
      marginTop: "20px",
    });

    // Create the marquee effect
    gsap.fromTo('.icon',{xPercent:100}, {
      xPercent: -100,  // Move the entire group of icons to the left by 100%
      duration: 15,    // Duration for one complete loop
      repeat: -1,      // Repeat infinitely
      ease: 'linear',  // Smooth, constant speed
      stagger: 0.5,    // Stagger the start time of the icons for a smoother effect
    });
  });

  return (
    <div className='relative w-full h-auto text-lg text-center my-32 2xl:my-60 leading-8 md:text-3xl md:leading-10' id='home'>
      <div className='intro-img w-32 h-32 rounded-full overflow-hidden mb-10 mx-auto shadow-lg shadow-white border-4 border-white'>
        <img src={abhishek} alt="" className='h-full w-full' />
      </div>

      <div>
        <span className='text-black-400 font-semibold'>Hello, </span>
        I’m a <span className='text-black-400 font-semibold'>Full Stack MERN Developer.</span><br />
        I create <span className='text-black-400 font-semibold'>modern</span>, <span className='text-black-400 font-semibold'>Minimal</span>,
        and <span className='text-black-400 font-semibold'>secure websites</span>.<div className="br"></div>
        My focus is on delivering <span className='text-black-400 font-semibold'>high-quality</span>, and <span className='text-black-400 font-semibold'>efficient code </span>
        <span className='blinking-cursor md:h-5'></span>
      </div>

      <div className='flex gap-4 items-center justify-center mt-4 flex-wrap flex-col md:flex-row'>
        <a href="#contact">
          <button className='intro-btn bg-white px-4 py-2 border-spacing-1 
    rounded-full hover:cursor-pointer flex gap-4 items-center text-xl font-medium
    transform transition-transform duration-200 ease-in-out hover:scale-105'>
            Contact Me <MdArrowRightAlt />
          </button>
        </a>

        <a href={resume} download="Abhishek_resume.pdf">
          <button className='intro-btn bg-white px-4 py-2 border-spacing-1 rounded-full hover:cursor-pointer
     flex gap-4 items-center text-xl font-medium transform transition-transform duration-200 ease-in-out hover:scale-105'>
            Download Resume <Icons />
          </button>
        </a>

        <div className='flex gap-4'>
          <a href="https://github.com/abhiishekh" target='_blank'>
            <button className='intro-btn bg-white p-3 border-spacing-1 rounded-full hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110'>
              <FaSquareGithub className='text-2xl' />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/abhiishek08/" target='_blank'>
            <button className='intro-btn bg-white p-3 border-spacing-1 rounded-full hover:cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-110'>
              <FaLinkedin className='text-2xl' />
            </button>
          </a>
        </div>
      </div>

      <div className=' overflow-hidden w-full mt-10'>
        <div className=' icon flex items-center justify-center gap-20 '>
          <img className =' w-10 h-10' src={vscode} alt="vscode" />
          <img className =' w-10 h-10' src={react} alt="react" />
          <img className =' w-10 h-10' src={node} alt="node" />
          <img className =' w-10 h-10' src={tailwind} alt="tailwind" />
          <img className =' w-10 h-10' src={Gsap} alt="Gsap" />
          <img className =' w-10 h-10' src={html} alt="html" />
          <img className =' w-10 h-10' src={figma} alt="figma" />
          <img className =' w-10 h-10' src={typescript} alt="typescript" />


        </div>

      </div>
    </div>
  );
}

export default Intro;
