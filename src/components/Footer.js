import React from 'react';
import { AiOutlineTwitter , AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="py-20 bg-primary text-white">
                <div className="container mx-auto">
                    <div className="grid sm:grid-cols-2 sm:gap-20 gap-10 grid-cols-1">
                        <div>
                            <h1 className="text-xl font-bold mb-5">
                                About Us
                            </h1>
                            <p className="text-sm opacity-60 mb-5">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                            <div className="flex gap-2 sm:mb-20 mb-10">
                                <button className="grid place-items-center w-10 h-9 border-2 rounded-md opacity-60 hover:opacity-100 duration-300">
                                    <AiOutlineTwitter className="text-md"/>
                                </button>
                                <button className="grid place-items-center w-10 h-9 border-2 rounded-md opacity-60 hover:opacity-100 duration-300">
                                    <FaFacebookF className="text-md"/>
                                </button>
                                <button className="grid place-items-center w-10 h-9 border-2 rounded-md opacity-60 hover:opacity-100 duration-300">
                                    <FaLinkedinIn className="text-md"/>
                                </button>
                                <button className="grid place-items-center w-10 h-9 border-2 rounded-md opacity-60 hover:opacity-100 duration-300">
                                    <AiOutlineInstagram className="text-md"/>
                                </button>
                            </div>

                            <h1 className="text-xl font-bold mb-5">
                                Contacts
                            </h1>
                            <div className="break-words text-sm mb-2">
                                <span className="font-bold">Address:</span>
                                <br/>
                                <span className="opacity-60">
                                    4397 Fulton Street, Clarksburg, West Virginia
                                </span>
                            </div>
                            <div className="flex gap-2 break-words text-sm mb-2">
                                <span className="font-bold">Phone:</span>
                                <span className="opacity-60">
                                    304-423-9811
                                </span>
                            </div>

                            <div className="flex gap-2 break-words text-sm">
                                <span className="font-bold">Email:</span>
                                <span className="opacity-60">
                                    c4kn5yzpizd@temporary-mail.net
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 sm:gap-20 gap-10 xl:gap-20">
                            <div>
                                <h1 className="text-xl font-bold mb-5">
                                    Useful Links
                                </h1>

                                <ul className="list-none grid gap-2">
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Home</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">About Us</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Aquarium</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Services</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Gallery</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Blog</li>
                                    <li className="font-semibold text-sm opacity-80 hover:opacity-100 duration-300 cursor-pointer w-max">Contact</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-xl font-bold mb-5">
                                    Recent Posts
                                </h1>

                            
                                <div className="flex gap-2 mb-3 cursor-pointer items-start duration-300 opacity-80 hover:opacity-100">
                                    <div className="w-20 h-14 min-w-20 overflow-hidden">
                                        <img 
                                            className="min-h-full w-full"
                                            src="https://www.aqueon.com/-/media/Images/AqueonNew%20NA/US/Assets/Articles/aquarium-disease-prevention/aquarium%20disease%20prevention.jpg" alt="img"
                                        />
                                    </div>
                                    <div className="break-words overflow-hidden">
                                        <h1 className="text-md truncate max-w-full">
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                        </h1>
                                        <span className="text-sm opacity-60"> 02 Feb, 2021</span>
                                        <span className="text-sm font-bold"> 42 comments</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-3 cursor-pointer items-start duration-300 opacity-80 hover:opacity-100">
                                    <div className="w-20 h-14 min-w-20 overflow-hidden">
                                        <img 
                                            className="min-h-full w-full"
                                            src="https://www.aqueon.com/-/media/Images/AqueonNew%20NA/US/Blog/maintain-planted-aquarium/maintain-planted-aquarium.jpg" alt="img"
                                        />
                                    </div>
                                    <div className="break-words overflow-hidden">
                                        <h1 className="text-md truncate max-w-full">
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                        </h1>
                                        <span className="text-sm opacity-60"> 02 Feb, 2021</span>
                                        <span className="text-sm font-bold"> 42 comments</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-3 cursor-pointer items-start duration-300 opacity-80 hover:opacity-100">
                                    <div className="w-20 h-14 min-w-20 overflow-hidden">
                                        <img 
                                            className="min-h-full w-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJxIELD5MaIT7x693YZriHVywA8lefO7_WQ&usqp=CAU" alt="img"
                                        />
                                    </div>
                                    <div className="break-words overflow-hidden">
                                        <h1 className="text-md truncate max-w-full">
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                        </h1>
                                        <span className="text-sm opacity-60"> 02 Feb, 2021</span>
                                        <span className="text-sm font-bold"> 42 comments</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 cursor-pointer items-start duration-300 opacity-80 hover:opacity-100">
                                    <div className="w-20 h-14 min-w-20 overflow-hidden">
                                        <img 
                                            className="min-h-full w-full"
                                            src="https://www.thesprucepets.com/thmb/1cF4WOV5faQNFAdVrXxNH2wVKJQ=/2000x1500/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1165067013-0c1602f7597e4ea184a530c87edfb577.jpg" alt="img"
                                        />
                                    </div>
                                    <div className="break-words overflow-hidden">
                                        <h1 className="text-md truncate max-w-full">
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                                        </h1>
                                        <span className="text-sm opacity-60"> 02 Feb, 2021</span>
                                        <span className="text-sm font-bold"> 42 comments</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </footer>
            <p className="text-center py-2 bg-dark text-white text-md font-bold"> &copy; {new Date().getFullYear()} - Mehedi Hasan Satu </p>
        </>
    )
}

export default Footer
