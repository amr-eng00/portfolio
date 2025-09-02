import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:scale-115 transform transition-all duration-500 '>
        <a href={link} className='cursor-pointer' target='blank'>
            <Icon/>
        </a>
    </div>
  )
}

export default SingleContactSocial