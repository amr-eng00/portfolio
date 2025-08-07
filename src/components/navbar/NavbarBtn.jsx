import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";


const NavbarBtn = () => {
    
    return (
        <button className='px-2 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
            Hire Me
            <div className='sm:hidden md:block'>
            <LuArrowDownRight />
            </div>

        </button>
    )
}

export default NavbarBtn

// import React, { useEffect, useState } from 'react'
// import { LuArrowDownRight } from "react-icons/lu";


// const NavbarBtn = () => {
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [isVisible, setIsVisible] = useState(true);
//     const texts = ["Hire Me", "Now"];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // اول متن فعلی fade out شود
//             setIsVisible(false);

//             // بعد از اتمام fade out، متن بعدی نمایش داده شود
//             setTimeout(() => {
//                 setCurrentTextIndex((prevIndex) =>
//                     prevIndex === texts.length - 1 ? 0 : prevIndex + 1
//                 );
//                 setIsVisible(true);
//             }, 500); // مدت زمان fade out
//         }, 3000); // مدت زمان نمایش هر متن

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <button className='px-2 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
//             <span className={`w-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//                 {texts[currentTextIndex]}
//             </span>
//             <div className='sm:hidden md:block'>
//                 <LuArrowDownRight />
//             </div>

//         </button>
//     )
// }

// export default NavbarBtn