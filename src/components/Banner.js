import React from 'react'

const Banner = () => {
    return (
        <section className="h-screen bg-banner bg-cover bg-no-repeat relative -top-20 grid place-items-center">
            <div className="container mx-auto">
                <h1 className="text-white text-8xl mb-10 font-extrabold">
                    Aquarium Installation <br/>
                    And Maintenance
                </h1>
                <p className="mb-16 text-light text-lg w-1/2 font-bold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <button className="bg-button text-white px-10 py-3 rounded-md text-lg font-semibold"> Contact Us Now! </button>
            </div>
        </section>
    )
}

export default Banner
