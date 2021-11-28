import React from 'react'

const LatestBlog = () => {
    return (
        <section className="my-20">
            <div className="container mx-auto">
                <h1 className="text-center text-5xl text-primary font-semibold mb-16">
                    Latest Posts
                </h1>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-20">

                    <div>
                        <div className="overflow-hidden h-60 mb-5">
                            <img
                                className="min-h-full w-full"
                                src="https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__480.jpg"
                                alt="img"/>
                        </div>

                        <span
                            className="block text-primary opacity-60 text-sm font-bold w-max mx-auto mb-2">
                            Nov 28, 2021</span>
                        <h1 className="text-center text-primary text-3xl font-bold mb-2">
                            Looking for aquarium specialists?
                        </h1>
                        <p className="text-md text-center mb-7 text-paragraph">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years
                            old.
                        </p>

                        <button
                            className="
                            block
                            px-7
                            py-2
                            text-md
                            border-2
                            text-sky
                            rounded-md
                            border-primary
                            w-max mx-auto
                            hover:bg-sky
                            hover:text-white
                            hover:border-primary
                            duration-500">
                            Read More
                        </button>
                    </div>

                    <div>
                        <div className="overflow-hidden h-60 mb-5">
                            <img
                                className="min-h-full w-full"
                                src="http://cdn.shopify.com/s/files/1/0375/7557/collections/Live_Fish_1200x1200.jpg?v=1606892688"
                                alt="img"/>
                        </div>

                        <span
                            className="block text-primary opacity-60 text-sm font-bold w-max mx-auto mb-2">
                            Nov 28, 2021</span>
                        <h1 className="text-center text-primary text-3xl font-bold mb-2">
                            Looking for aquarium specialists?
                        </h1>
                        <p className="text-md text-center mb-7 text-paragraph">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years
                            old.
                        </p>

                        <button
                            className="
                            block
                            px-7
                            py-2
                            text-md
                            border-2
                            text-sky
                            rounded-md
                            border-primary
                            w-max mx-auto
                            hover:bg-sky
                            hover:text-white
                            hover:border-primary
                            duration-500">
                            Read More
                        </button>
                    </div>

                    <div>
                        <div className="overflow-hidden h-60 mb-5">
                            <img
                                className="min-h-full w-full"
                                src="https://www.bigalspets.com/blog/wp-content/uploads/2017/03/%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F1.jpg"
                                alt="img"/>
                        </div>

                        <span
                            className="block text-primary opacity-60 text-sm font-bold w-max mx-auto mb-2">
                            Nov 28, 2021</span>
                        <h1 className="text-center text-primary text-3xl font-bold mb-2">
                            Looking for aquarium specialists?
                        </h1>
                        <p className="text-md text-center mb-7 text-paragraph">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years
                            old.
                        </p>

                        <button
                            className="
                            block
                            px-7
                            py-2
                            text-md
                            border-2
                            text-sky
                            rounded-md
                            border-primary
                            w-max mx-auto
                            hover:bg-sky
                            hover:text-white
                            hover:border-primary
                            duration-500">
                            Read More
                        </button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default LatestBlog
