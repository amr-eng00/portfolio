import React from 'react'
import { Link } from 'react-scroll';

const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px]'>
            <p className='text-3xl text-lightGrey'>AM.Rafiei</p>
            <ul className='flex gap-4 text-lightGrey text-xl '>
                {links.map((item,index)=> {
                    return(
                        <Link
                        key={index}
                        to={`${item.section}`}
                        smooth={true}
                        spy={true}
                        duration={1000}
                        offset={-130}
                        className='hover:text-white transition-all duration-500 cursor-pointer'
                    >
                       {item.link}
                    </Link>
                       
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mb-12 mt-2 text-sm text-lightBrown'> ©{new Date().getFullYear()} |  All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain