import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-5 bg-indigo-700 text-white">
            <a className="font-semibold text-xl" href="#">Jerald Jesudasan</a>
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden transition-all duration-300 ease-in-out opacity-100">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col fixed top-16 left-0 bg-indigo-900 w-full h-1/4">
                    <li className='w-full h-full text-center border-b-2'><a href="#">Home</a></li>
                    <li className='w-full h-full text-center border-b-2'><a href="#about">About</a></li>
                    <li className='w-full h-full text-center border-b-2'><a href="#projects">Projects</a></li>
                    <li className='w-full h-full text-center border-b-2'><a href="#resume">Resume</a></li>
                    <li className='w-full h-full text-center border-b-2'><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden' aria-label="Toggle menu"><Bars3Icon className='w-6 h-6' /></button>
        </header>
    )
}

export default Header