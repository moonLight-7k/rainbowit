import { useState } from "react";
import Brand from '../assets/brand.png'

const Resume = () => {
    const [activeButton, setActiveButton] = useState("Js");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const scrollbarStyles = {

    };

    return (
        <div>
            <div className="bg-[#ecf0f3] pb-20 pt-20">
                <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-36 grid">
                    <div className="p-4 mt-16">
                        <h3 className="text-lg font-semibold text-[#fa2828]">POPULAR CLIENTS</h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">
                            Awesome Clients</h1>
                    </div>

                    <div className="">
                        <nav className="bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-md justify-center p-0 m-0 lg:w-[26vw]">
                            <ul className="grid lg:w-[30vw]">
                                <button
                                    className={`px-10 sm:px-24 md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Js" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("Js")}
                                >
                                    JavaScript
                                </button>
                                <button
                                    className={`px-10 sm:px-24 md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Product" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("Product")}
                                >
                                    Product Design
                                </button>
                                <button
                                    className={`px-10 sm:px-[90px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "WordPress" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("WordPress")}
                                >
                                    WordPress
                                </button>
                                <button
                                    className={`px-10 sm:px-[82px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "React" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("React")}
                                >
                                    HTML to React
                                </button>

                                <button
                                    className={`px-10 sm:px-[82px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Laravel" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("Laravel")}
                                >
                                    React to Laravel
                                </button>

                                <button
                                    className={`px-10 sm:px-[82px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Python" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] lg:w-[26vw]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] lg:w-[26vw]"}`}
                                    onClick={() => handleClick("Python")}
                                >
                                    Python
                                </button>
                            </ul>
                        </nav>
                    </div>

                    {/* Your content based on the active button (optional) */}
                    <div className="flex lg:absolute lg:ml-[26rem] lg:mt-48 scroll-smooth overflow-scroll m-y-10 lg:h-[70vh] will-change-scroll" style={scrollbarStyles}>

                        <div className="lg:ml-8 flex-grow">
                            {activeButton === "Js" && <div className=" flex sticky mt-6">
                                <div className="grid grid-cols-3 gap-4">

                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>
                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>
                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>
                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>
                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>

                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>
                                    </div>

                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>


                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>


                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>


                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>


                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>


                                    <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                        <figure className="px-5 pt-8">
                                            <img src={Brand} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="divider mt-2 m-0"></div>
                                        <p className="text-center  p-4 text-lg">John Due</p>

                                    </div>

                                </div>

                            </div>}



                            {activeButton === "Product" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}
                            {activeButton === "Experience" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}
                            {activeButton === "WordPress" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}

                            {activeButton === "React" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}

                            {activeButton === "Laravel" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}

                            {activeButton === "Python" && <div className="mt-6"> <div className="grid grid-cols-3 gap-4">

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>
                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>
                                </div>

                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>


                                <div className="card lg:w-72 bg-base-100 shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  drop-shadow-md">
                                    <figure className="px-5 pt-8">
                                        <img src={Brand} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="divider mt-2 m-0"></div>
                                    <p className="text-center  p-4 text-lg">John Due</p>

                                </div>

                            </div></div>}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Resume;
