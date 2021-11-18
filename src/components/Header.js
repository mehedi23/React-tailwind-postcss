import React from 'react';
import Logo from '../static/logo.svg'

const Header = () => {
    return (
        <header className="p-3">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img className="w-20" src={Logo} alt="Logo"/>
                </div>

                <nav className="flex gap-5 items-center list-none">
                    <li className="cursor-pointer !text-white font-bold text-base">Home</li>
                </nav>
            </div>
        </header>
    )
}

export default Header
