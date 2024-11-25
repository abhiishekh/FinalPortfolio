import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  // State to hold the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


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

  return (
    <>
      <div className="h-screen w-full fixed backdrop-blur-md pointer-events-none z-5 bg-red-200/20"></div>
    <div className="bg-mainbg/60 w-full h-full flex items-center justify-center relative z-1">

      <main className="h-full w-full mx-5 md:mx-20 lg:mx-32 2xl:mx-75 relative z-10">

        <Nav />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <hr className="h-0.5 w-full bg-slate-500 mb-5" />
        <Footer />
      </main>
      <div style={cursorStyles}></div>
    </div>
    </>
  );
};

export default App;
