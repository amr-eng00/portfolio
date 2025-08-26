import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);

    }
    return (
        <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
            <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
                <NavbarLogo />
                <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>
            <div className='lg:hidden sm:block p-6 bg-black text-white flex items-center justify-center rounded-full border-[0.5px] border-orange'>
                <button className='text-2xl border border-orange rounded-full p-3' onClick={toggleMenu}>

                    <div
                        className="group flex  cursor-pointer items-center justify-center rounded-3xl  p-2 ">
                        <div className="space-y-2">
                            <span className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out ${menuOpen ? "  group-hover:translate-y-1.5 group-hover:rotate-45 " : ""}`}></span>
                            <span className={`block h-1 w-8 origin-center rounded-full bg-white transition-transform ease-in-out ${menuOpen ? " group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45" : ""}`} ></span>
                            {/* <span className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:bg-cyan ${menuOpen ? "  translate-y-1.5 rotate-45 " : ""}`}></span>
                            <span className={`block h-1 w-8 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:bg-cyan ${menuOpen ? " w-10 -translate-y-1.5 -rotate-45" : ""}`} ></span> */}
                        </div>
                    </div>
                </button>
            </div>

        </nav>
    )
}

export default NavbarMain