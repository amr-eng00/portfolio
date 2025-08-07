import React from 'react'

const SingleInfo = ({text,Image}) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
        <Image/>
        <p>{text}</p>
    </div>
  )
}

export default SingleInfo