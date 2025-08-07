import React from 'react'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='h-full flex justify-center items-center'>
        <img src="./images/HexaPic.png" alt="Amirhossein Rafiei" className='max-h-[450px] w-auto' />
        <div className=' absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
        </div>
    </div>
  )
}

export default HeroPic