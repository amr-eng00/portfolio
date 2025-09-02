import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';


// const projects = [
//   {
//     name: "Laptop e-commerce",
//     year: "Dec2024",
//     align: "right",
//     image: "./images/laptop2.png",
//     link: "#",
//     video: "./videos/laptop.mov",
//   },
//   {
//     name: "SabaNuts",
//     year: "Apr2025",
//     align: "left",
//     image: "./images/sabanuts2.png",
//     link: "#",
//     video: "./videos/sabanut.mov",

//   },
//   {
//     name: "ChatApp",
//     year: "Jun2025",
//     align: "right",
//     image: "./images/chatapp2.png",
//     link: "#",
//     video: "./videos/chatapp.mov",

//   },
//   {
//     name: "Portfolio-1",
//     year: "Jul2025",
//     align: "left",
//     image: "./images/portfolio1.png",
//     link: "#",
//     video: "./videos/portfolio2.mov",

//   },
//   {
//     name: "Portfolio-2",
//     year: "Aug2025",
//     align: "right",
//     image: "./images/portfolio2.png",
//     link: "#",
//     video: "./videos/portfolio2.mov",

//   },
// ];

const projects = [
  {
    name: "Laptop e-commerce",
    year: "Dec2024",
    align: "right",
    image: "./images/laptop1.png",
    link: "#",
    video: "https://www.aparat.com/video/video/embed/videohash/kxm6g70/vt/frame", // 👈 لینک iframe
  },
  {
    name: "SabaNuts",
    year: "Apr2025",
    align: "left",
    image: "./images/sabanuts1.png",
    link: "#",
    video: "https://www.aparat.com/video/video/embed/videohash/ckg1b7v/vt/frame",
  },
  {
    name: "ChatApp",
    year: "Jun2025",
    align: "right",
    image: "./images/chatapp1.png",
    link: "#",
    video: "https://www.aparat.com/video/video/embed/videohash/mrm840y/vt/frame",
  },
  {
    name: "Portfolio-1",
    year: "Jul2025",
    align: "left",
    image: "./images/portfolio11.png",
    link: "#",
    video: "https://www.aparat.com/video/video/embed/videohash/mrm840y/vt/frame",
  },
  {
    name: "Portfolio-2",
    year: "Aug2025",
    align: "right",
    image: "./images/portfolio21.png",
    link: "#",
    video: "https://www.aparat.com/video/video/embed/videohash/uqr2w68/vt/frame",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => {
          return (
            <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} video={item.video} />
          )
        })}
      </div>
      {/* <div className="relative w-full h-0 pb-[56%]">
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/vyav10i/vt/frame"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  )
}

export default ProjectsMain