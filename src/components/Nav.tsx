const Nav = () => {
  return (
    <div className='bg-white/60 w-full h-16 mx-auto mt-5 rounded-full sm:w-50 md:w-75 lg:w-1/2 sticky top-5 z-10 backdrop-blur-md'>
      <ul className='flex items-center justify-evenly w-full h-full'>
        <li className='py-2 px-4 hover:bg-gray-300 rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg'>
          <a href="#home">Home</a>
        </li>
        <li className='py-2 px-4 hover:bg-gray-300 rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg'>
          <a href="#about">About</a>
        </li>
        <li className='py-2 px-4 hover:bg-gray-300 rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg'>
          <a href="#skills">Skills</a>
        </li>
        <li className='py-2 px-4 hover:bg-gray-300 rounded-full font-medium transform transition-all duration-300 ease-in-out hover:shadow-lg'>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
