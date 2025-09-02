import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';

const experiences = [
    {
        job: "Front-End Developer (Learning)",
        company: "Self-Directed",
        date: "2024 - Present",
        responsibilities: [
            "Learning modern front-end technologies like React and JavaScript.",
            "Practicing UI design and responsive layouts.",
            "Building components with clean and reusable code.",
        ],
    },
    {
        job: "Back-End Developer (Learning)",
        company: "Self-Directed",
        date: "2024 - Present",
        responsibilities: [
            "Learning Node.js, Express, and PostgreSQL.",
            "Understanding REST APIs and server-side logic.",
            "Exploring authentication and database management.",
        ],
    },
    {
        job: "Full-Stack Projects",
        company: "Portfolio",
        date: "2024 - Present",
        responsibilities: [
            "Developed a real-time chat app.",
            "Built two e-commerce websites.",
            "Created two portfolio websites to showcase skills.",
        ],
    },
];


// const experiences = [
//     {
//         job: "Front-End Developer",
//         company: "Alex Apps",
//         date: "2022 - Present",
//         responsibilities: [
//             "Implementing reusable components.",
//             "Participating in large scale application.",
//             "Working on the performance of web applications.",
//             "Generating new ideas for better user experience.",
//         ],
//     },
//     {
//         job: "Course Instructor",
//         company: "Nucamp",
//         date: "2023 - Present",
//         responsibilities: [
//             "Explaining and facilitating web development concepts.",
//             "Help students with their assignments and grade them weekly.",
//             "Provide support for students through their learning journey.",
//         ],
//     },
//     {
//         job: "Course Instructor",
//         company: "Sprints",
//         date: "2024 - Present",
//         responsibilities: [
//             "Teaching JavaScript, React and TailwindCSS.",
//             "Participating in preparing course materials.",
//             "Helping students through their way in learning web development technologies.",
//         ],
//     },
// ];

const AllExperience = () => {
    return (
        <div className='flex sm:flex-col md:flex-row items-center justify-between'>
            {experiences.map((experience, index) => {
                return (
                    <>
                        <SingleExperience key={index} experience={experience} />
                        {index < 2 ?
                            <motion.div
                                variants={fadeIn('right', 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0 }}
                            >

                                <FaArrowRightLong className='text-6xl text-orange lg:block sm:hidden' />
                            </motion.div>
                            :
                            ""}
                    </>
                )
            })}
        </div>
    )
}

export default AllExperience