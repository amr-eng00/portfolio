import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>

        I’m a full-stack web developer specializing in the PERN stack (PostgreSQL, Express, React, Node.js). I enjoy designing and building scalable applications, from intuitive front-end interfaces to efficient back-end systems. My focus is on writing clean, maintainable code and solving real-world problems through technology.

        Beyond development. In my free time, I explore new frameworks and tools to stay up to date with the fast-paced world of web development.

        {/* I’m Abdelrahman, a web developer instructor with a passion for teaching
        and coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies. I
        also run a YouTube channel, CodeNest, where I create tutorials and
        courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals. */}
      </p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black '>
        
        <Link
                to="projects"
                smooth={true}
                spy={true}
                duration={1000}
                offset={-130}
                className='cursor-pointer text-white hover:text-black transition-all duration-500'
            >
                My Projects
            </Link>
      </button>
    </div>
  )
}

export default AboutMeText