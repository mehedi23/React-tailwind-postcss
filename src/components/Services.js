import React from 'react';
import { GiDrippingStar , GiFlatfish , GiCannedFish } from "react-icons/gi";
import { AiOutlineWechat } from "react-icons/ai";


const Services = () => {
    return (
        <section className="my-20 bg-banner_2 bg-fixed bg-cover relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-transparent opacity-80"></div>


            <div className="container mx-auto py-28 relative z-10">
                <h1 className="text-5xl text-center font-semibold text-white mb-20"> Our Services </h1>
                
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 sm:gap-5 gap-20">

                    <div className="px-5">
                        <div className="w-24 h-24 bg-white rounded-full grid place-items-center mx-auto">
                            <GiDrippingStar className="text-5xl text-sky"/>
                        </div>
                        <h1 className="text-center text-xl mb-2 mt-4 font-bold text-white"> Maintenance </h1>
                        <p className="text-center text-sm text-white opacity-80 mb-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        </p>
                        <span className="text-center block w-max mx-auto cursor-pointer font-medium text-white">Read More</span>
                    </div>

                    <div className="px-5">
                        <div className="w-24 h-24 bg-white rounded-full grid place-items-center mx-auto">
                            <GiFlatfish className="text-5xl text-sky"/>
                        </div>
                        <h1 className="text-center text-xl mb-2 mt-4 font-bold text-white"> Health Services </h1>
                        <p className="text-center text-sm text-white opacity-80 mb-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        </p>
                        <span className="text-center block w-max mx-auto cursor-pointer font-medium text-white">Read More</span>
                    </div>

                    <div className="px-5">
                        <div className="w-24 h-24 bg-white rounded-full grid place-items-center mx-auto">
                            <GiCannedFish className="text-5xl text-sky"/>
                        </div>
                        <h1 className="text-center text-xl mb-2 mt-4 font-bold text-white"> Food </h1>
                        <p className="text-center text-sm text-white opacity-80 mb-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        </p>
                        <span className="text-center block w-max mx-auto cursor-pointer font-medium text-white">Read More</span>
                    </div>

                    <div className="px-5">
                        <div className="w-24 h-24 bg-white rounded-full grid place-items-center mx-auto">
                            <AiOutlineWechat className="text-5xl text-sky"/>
                        </div>
                        <h1 className="text-center text-xl mb-2 mt-4 font-bold text-white"> Consultation </h1>
                        <p className="text-center text-sm text-white opacity-80 mb-5">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                        </p>
                        <span className="text-center block w-max mx-auto cursor-pointer font-medium text-white">Read More</span>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Services;