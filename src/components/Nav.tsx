import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IntroProps {
  darkmode: boolean;
  
}
const Nav:React.FC<IntroProps> = ({darkmode}) => {
  useGSAP(() => {
    gsap.from('.nav-item', {
      x:30,
      duration: 0.6,
      stagger: 0.2,
      opacity: 0,
      delay:1
    });
  });

  return (
    <div className={`${darkmode?'bg-blue-900/60 text-white':''} bg-white/60 w-full h-16 mx-auto mt-5 rounded-full sm:w-50 md:w-75 lg:w-1/2 sticky top-5 z-10 backdrop-blur-md`}>
      <ul className="flex items-center justify-evenly w-full h-full">
        <li className=" py-2 px-4 hover:bg-gray-300 hover:text-black rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg">
          <a className="nav-item" href="#home">Home</a>
        </li>
        <li className=" py-2 px-4 hover:bg-gray-300 hover:text-black rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg">
          <a className="nav-item" href="#about">About</a>
        </li>
        <li className=" py-2 px-4 hover:bg-gray-300 hover:text-black rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg">
          <a className="nav-item" href="#skills">Skills</a>
        </li>
        <li className=" py-2 px-4 hover:bg-gray-300 hover:text-black rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg">
          <a className="nav-item" href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
