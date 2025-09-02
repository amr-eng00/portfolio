import React, { useState } from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';
import { div } from 'motion/react-client';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const SingleProject = ({ name, year, align, image, link, video }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : ' md:flex-row-reverse'} justify-end`}>
        <div>
          <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>
          <h2 className={`text-xl font-thin text-white font-special sm:text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
          {name === "Portfolio-1" ? (
            <a href={link} className={` text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"}`}>View <BsFillArrowUpRightCircleFill /> </a>
          ) : (
            <button onClick={() => setOpen(!open)} className={` text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"}`}>View <BsFillArrowUpRightCircleFill /> </button>
          )}
        </div>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
          <div className='w-full h-full bg-cyan absolute opacity-50 top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
          <img src={image} alt="Project Image" className='w-full h-full' />
          {/* <img src={image} alt="Project Image" className='w-full h-full hover:scale-140 transition-all duration-500' /> */}

        </div>

      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ duration: 1, }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 flex justify-center items-center bg-black/90 scroll-none z-90' >
            <div
              className='absolute inset-0 '
              onClick={() => setOpen(!open)}
            ></div>
            <div className='relative mx-auto'>
              {/* <video src={video} controls className='md:h-100 h-50 ' /> */}
              <div className="relative w-full h-0 pb-[56%]">
                {video}
                <div role="status">
                  <svg aria-hidden="true" className="w-20 h-20 text-black animate-spin dark:text-white fill-orange mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                <iframe
                  src={video}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </motion.div>
        )
        }
      </AnimatePresence>
    </div>

  )
}

export default SingleProject
