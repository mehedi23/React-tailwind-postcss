import React from 'react';
import Logo from '../static/logo.svg'

const Header = () => {
    return (
        <header className="p-3 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img className="w-20" src={Logo} alt="Logo"/>
                </div>

                <nav className="hidden lg:flex gap-16 items-center list-none">
                    <li className="cursor-pointer text-white font-bold text-base">Home</li>
                    <li className="cursor-pointer text-white font-bold text-base">About Us</li>
                    <li className="cursor-pointer text-white font-bold text-base">Aquariums</li>
                    <li className="cursor-pointer text-white font-bold text-base">Gallery</li>
                    <li className="cursor-pointer text-white font-bold text-base">Blog</li>
                    <li className="cursor-pointer text-white font-bold text-base">Contact Us</li>
                </nav>
            </div>
        </header>
    )
}

export default Header
