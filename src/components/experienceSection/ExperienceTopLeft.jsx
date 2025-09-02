import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
    return (
        <div className='flex flex-col gap-6 w-[300px]'>
            <p className='text-bold font-special text-center text-orange uppercase text-3xl'>Since 2024</p>
            <div className='flex justify-center items-center gap-4'>
                <ExperienceInfo number='1' text="Year" />
                <p className='text-lightBrown text-bold text-6xl'>-</p>
                <ExperienceInfo number='5' text="Websites" />
            </div>
            <p className='text-center text-white'>
                With one year of experience building dynamic and user-friendly web
                applications.
            </p>
            {/* <ExperienceInfo number='3' text="Full-stack Application" /> */}
        </div>
    )
}

export default ExperienceTopLeft