import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({ experience }) => {
    return (
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
            <p className='font-bold text-cyan'>{experience.job}</p>
            <p className='text-orange'>{experience.company}</p>
            <p className='text-lightGrey'>{experience.date}</p>
            <ul className='mt-4 pl-4 list-disc text-white'>
                {experience.responsibilities.map((item, index) => {
                    return (
                        <li key={index} className=''>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default SingleExperience