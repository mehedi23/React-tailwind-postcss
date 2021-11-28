import React from 'react'

const About = () => {
    return (
        <section className="pb-20 pt-14">
            <div className="container mx-auto">

                <div className="lg:grid grid-cols-2">
                    <div className="overflow-hidden sm:h-96 max-h-96">
                        <img className="w-full min-h-full" src="https://i.pinimg.com/originals/c0/a5/d9/c0a5d91ab924ab7639e625700e115527.png" alt="img"/>
                    </div>
                    <div className="relative py-10 px-16">
                        <h1 className="sm:text-3xl text-2xl font-bold mb-3 text-primary"> Where can I get some? </h1>
                        <span className="absolute top-14 -left-5 transform -rotate-90 text-sky font-bold"> - Installation </span>
                        <p className="text-paragraph mb-10">
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <button className="px-5 py-2 border-2 border-primary rounded-md text-sky font-bold hover:text-primary hover:border-paragraph duration-500"> More Info </button>
                    </div>
                </div>


                <div className="flex flex-col-reverse lg:grid grid-cols-2">
                    <div className="relative py-10 px-16">
                        <h1 className="sm:text-3xl text-2xl font-bold mb-3 text-primary"> Where can I get some? </h1>
                        <span className="absolute top-14 -left-5 transform -rotate-90 text-sky font-bold"> - Installation </span>
                        <p className="text-paragraph mb-10">
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <button className="px-5 py-2 border-2 border-primary rounded-md text-sky font-bold hover:text-primary hover:border-paragraph duration-500"> More Info </button>
                    </div>
                    <div className="overflow-hidden sm:h-96 max-h-96">
                        <img className="w-full min-h-full" src="https://i.pinimg.com/originals/d4/0b/4a/d40b4abdfdc2108f3e902563d7d584bd.jpg" alt="img"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
