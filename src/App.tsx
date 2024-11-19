// import React from 'react'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-mainbg w-full h-full flex items-center justify-center'>
     <main className=' h-full w-full mx-5 md:mx-20 lg:mx-32 2xl:mx-75 '>
          <Nav/>
          <Intro/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <hr className=' h-0.5 w-full bg-slate-500 mb-5 '/>
          <Footer/>
     </main>
     

      
    </div>
  )
}

export default App
