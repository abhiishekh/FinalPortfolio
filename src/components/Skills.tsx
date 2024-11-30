// import React from 'react'
interface IntroProps {
    darkmode: boolean;
    
  }

const Skills:React.FC<IntroProps> = ({darkmode}) => {
  return (
    <div className=" flex justify-center mb-10" id="skills">
        <div className=" text-center">

      <h1 className={darkmode?'text-white text-5xl font-semibold mb-10':"text-5xl font-semibold mb-10"}>My Skills</h1>
      <div className=" flex flex-col ">
      <h3 className={darkmode?"text-white text-3xl font-medium mb-5":"text-3xl font-medium mb-5"}>Frontend Technology</h3>
        <div className=" mb-10 lg:w-60*2 text-center mx-auto">
            <ul className=" flex flex-wrap gap-6 items-center justify-center">
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>HTML</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>CSS</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Sass</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>JavaScript</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>TypeScript</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>React</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>TailWind</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Gsap</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Framer Motion</p>
                </li>
                
            </ul>
        </div>
      </div>
      <div className=" flex flex-col ">
      <h3 className={darkmode?"text-white text-3xl font-medium mb-5":"text-3xl font-medium mb-5"}>Backend Technology</h3>
        <div className=" mb-10 lg:w-60*2 text-center mx-auto" >
            <ul className=" flex flex-wrap gap-6 items-center justify-center">
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Node</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Express</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>REST API</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Context API</p>
                </li>
               
                
            </ul>
        </div>
      </div>
      <div className=" flex flex-col ">
      <h3 className={darkmode?"text-white text-3xl font-medium mb-5":"text-3xl font-medium mb-5"}>Database</h3>
        <div className=" mb-10 lg:w-60*2 text-center mx-auto">
            <ul className=" flex flex-wrap gap-6 items-center justify-center">
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>MongoDB</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>MySQL</p>
                </li>
                {/* <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>PostgreSQL</p>
                </li> */}
                {/* <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Redis</p>
                </li> */}
               
                
            </ul>
        </div>
      </div>
      <div className=" flex flex-col ">
      <h3 className={darkmode?"text-white text-3xl font-medium mb-5":"text-3xl font-medium mb-5"}>Supportive Tools</h3>
        <div className=" mb-10 lg:w-60*2 text-center mx-auto">
            <ul className=" flex flex-wrap gap-6 items-center justify-center">
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Git</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Git Actions</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Linux</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Vercel</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>Netlify</p>
                </li>
                <li className=" font-semibold px-6 py-2 bg-white rounded-full transform transition-transform duration-200 ease-in-out hover:scale-110">
                    <p>FireBase</p>
                </li>

            </ul>
        </div>
      </div>
        </div>


    </div>
  )
}

export default Skills
