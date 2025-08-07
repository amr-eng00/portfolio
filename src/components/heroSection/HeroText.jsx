import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col justify-center gap-4 h-full md:text-left sm:text-center'>
        <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Full-Stack Web Developer</h2>
        <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-roboto font-bold'>AmirHossein Rafiei</h1>
        <p className='text-lg mt-4 text-white'>A Passionate web developer and Instructor <br/> with 2 years of experience.</p>
    </div>
  )
}

export default HeroText