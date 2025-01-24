import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion, useScroll } from 'motion/react';


const App = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkmode, setDarkMode] = useState(true)
  const { scrollXProgress , scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyles: React.CSSProperties = {
    position: 'absolute',
    top: `${mousePosition.y + window.scrollY}px`,
    left: `${mousePosition.x}px`,
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    backgroundColor: '#88CEEB',
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'transform 0.1s ease-out',
    zIndex: -1,

  };

  const handledarkmode = () => {
    setDarkMode(!darkmode)
  }

  return (
    <>

      <div className={darkmode ? 'dark' : ''}>
        <div className="h-screen w-full fixed backdrop-blur-md pointer-events-none z-5 bg-red-200/20"></div>
        <div className={`transition-all duration-300 ease-in-out ${darkmode ?
          'dark:bg-black' : 'bg-mainbg/60 text-black'} w-full h-full flex items-center justify-center relative z-1 `}>
          <motion.div 
          style={{scaleX: scrollYProgress}}
                className=' fixed top-0 left-0 right-0 h-1 origin-left bg-purple-600 rounded-lg z-50'
                 >
          </motion.div>
          <main className="h-full w-full mx-5 md:mx-20 lg:mx-32 2xl:mx-75 relative z-10 ">

            <Nav darkmode={darkmode} />
            <Intro darkmode={darkmode} />
            <About darkmode={darkmode} />
            <Skills darkmode={darkmode} />
            <Projects darkmode={darkmode} />
            <Contact darkmode={darkmode} />
            <hr className="h-0.5 w-full bg-slate-500 mb-5" />
            <Footer />
            <div className=' flex items-center justify-end w-full bg-red-200 h-50'>

              <div className='fixed bottom-5 right-[2.5rem] md:right-[3rem]  flex items-center justify-center w-10 h-10 bg-white/60 rounded-full z-50'>
                <BsFillMoonStarsFill onClick={handledarkmode} />
              </div>
            </div>
          </main>
          <div style={cursorStyles}></div>

        </div>
      </div>

    </>
  );
};

export default App;
