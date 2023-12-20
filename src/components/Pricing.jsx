import { useState } from "react";
import Tick from '../assets/tick.svg'

const Pricing = () => {

    const [activeButton, setActiveButton] = useState("Education");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div>
            <div>
                <div className="bg-[#ecf0f3] pb-20 pt-20">
                    <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-10 xl:mx-24 2xl:mx-36 flex ">
                        <div className="p-4 mt-16">
                            <h3 className="text-lg font-semibold text-[#fa2828]">PRICING
                            </h3>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">My Pricing</h1>
                        </div>

                        <div className="card lg:w-[53vw] w-[90vw] lg:h-[20vh] lg:ml-20 lg:mt-32 md:mt-[20rem] md:-ml-[34vw] mt-[16rem]   drop-shadow-2xl -ml-[13rem] lg:gap-1 ">
                            <nav className="bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-md justify-center p-0 m-0 z-10">
                                <ul className="lg:flex md:flex  ">
                                    <button
                                        className={`px-16 lg:px-24 md:px-[74px] py-4 sm:py-2 sm:px-10 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Education" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] drop-shadow-xl" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] drop-shadow-xl"}`}
                                        onClick={() => handleClick("Education")}
                                    >
                                        Static
                                    </button>
                                    <button
                                        className={`px-16 lg:px-24 md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Professional Skills" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] drop-shadow-xl" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] drop-shadow-xl"}`}
                                        onClick={() => handleClick("Professional Skills")}
                                    >
                                        Standard
                                    </button>
                                    <button
                                        className={`px-16 lg:px-[90px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Experience" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d] drop-shadow-xl" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000] drop-shadow-xl"}`}
                                        onClick={() => handleClick("Experience")}
                                    >
                                        Premium
                                    </button>

                                </ul>
                            </nav>
                        </div>


                        {/*  ========Static========  */}
                        {activeButton === "Education" && <div className="md:mt-[25rem] md:-ml-[43rem] mt-[28rem] -ml-[96vw] lg:mt-[13.1rem] sm:-ml-[20vw]  lg:-ml-[51rem]  rounded-b-xl bg-error  ">
                            <div className="lg:flex md:grid lg:gap-16 bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-b-md lg:w-[53vw] md:w-[90vw] w-[94vw] ">

                                <div className="card  z-10 shadow-xl lg:w-[60vw] md:w-[90vw] w-[94vw]">
                                    <div className="card-body">
                                        <h2 className="card-title mt-8 text-4xl flex justify-between font-bold">
                                            Make Your Single Page
                                            <button className="btn text-4xl px-4 btn-lg  font-bold text-[#ff2121] shadow-md hover:bg-[#fff] bg-[#fff] cursor-default">
                                                $30.00
                                            </button>
                                        </h2>
                                        <p className="font-normal">Elementor / WPBakery</p>
                                        <div>
                                            <p className="text-2xl mt-6 mb-6">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        </div>

                                        <ul className="grid grid-cols-2 p-6 text-lg">
                                            <li>
                                                <p className="flex p-2  gap-1"> <img src={Tick} alt="img" width={20} />1 Page with Elementor</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Responsive Design</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />2 Plugins/Extensions</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Multipage Elementor</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Figma</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Maintaine Design</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design With XD</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />8 Plugins/Extensions </p>
                                            </li>
                                        </ul>
                                        <a className="btn mt-8 hover:bg-gradient-to-br text-center hover:from-[#8a64f1] hover:to-[#fa0c53]  bg-gradient-to-br from-[#dce2e7] to-[#fcfafa] hover:text-[#fff] hover:scale-105 hover:-translate-y-1 duration-300 drop-shadow-xl">
                                            ORDER NOW →
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        }

                        {/*  =======Standard======   */}
                        {
                            activeButton === "Professional Skills" && (
                                <div className="md:mt-[25rem] md:-ml-[43rem] lg:mt-[13.1rem] -ml-[90vw]  mt-[50vh] lg:-ml-[51rem]  rounded-b-xl bg-error ">
                                    <div className="lg:flex md:grid lg:gap-16 bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-b-md lg:w-[53vw] md:w-[90vw] ">

                                        <div className="card w-96 z-10 shadow-xl lg:w-[60vw] md:w-[90vw]">
                                            <div className="card-body">
                                                <h2 className="card-title mt-8 text-4xl flex justify-between font-bold">
                                                    Design Make this Page
                                                    <button className="btn text-4xl px-4 btn-lg font-bold text-[#ff2121] shadow-md hover:bg-[#fff] bg-[#fff] cursor-default">
                                                        $50.00
                                                    </button>
                                                </h2>
                                                <p className="font-normal">Elementor / WPBakery</p>
                                                <div>
                                                    <p className="text-2xl mt-6 mb-6">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                                </div>

                                                <ul className="grid grid-cols-2 p-6 text-lg">
                                                    <li>
                                                        <p className="flex p-2  gap-1"> <img src={Tick} alt="img" width={20} />5 Page with Elementor</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Responsive Design</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />5 Plugins/Extensions</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Multipage Elementor</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Figma</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Maintaine Design</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design With XD</p>
                                                    </li>
                                                    <li>
                                                        <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />50 Plugins/Extensions </p>
                                                    </li>
                                                </ul>
                                                <a className="btn mt-8 hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  bg-gradient-to-br from-[#dce2e7] to-[#fcfafa] hover:text-[#fff] hover:scale-105 hover:-translate-y-1 duration-300 drop-shadow-xl">
                                                    ORDER NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )
                        }



                        {/* ========Experience content goes here======== */}
                        {activeButton === "Experience" && <div className="md:mt-[25rem] md:-ml-[43rem] mt-[28rem] -ml-[96vw] lg:mt-[13.1rem] sm:-ml-[20vw]  lg:-ml-[51rem]  rounded-b-xl bg-error   ">
                            <div className="lg:flex md:grid lg:gap-16 bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-b-md lg:w-[53vw] md:w-[90vw]  ">

                                <div className="card w-96 z-10 shadow-xl lg:w-[60vw] md:w-[90vw]">
                                    <div className="card-body">
                                        <h2 className="card-title mt-8 text-4xl flex justify-between font-bold">
                                            Customize Your Single Page
                                            <button className="btn text-4xl px-4 btn-lg  font-bold text-[#ff2121] shadow-md hover:bg-[#fff] bg-[#fff] cursor-default">
                                                $30.00
                                            </button>
                                        </h2>
                                        <p className="font-normal">Elementor / WPBakery</p>
                                        <div>
                                            <p className="text-2xl mt-6 mb-6">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        </div>

                                        <ul className="grid grid-cols-2 p-6 text-lg ">
                                            <li>
                                                <p className="flex p-2  gap-1"> <img src={Tick} alt="img" width={20} />10 Page with Elementor</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Responsive Design</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Customization</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />20 Plugins/Extensions</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Multipage Elementor</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design Figma</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Maintaine Design</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Content Upload</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />Design With XD</p>
                                            </li>
                                            <li>
                                                <p className="flex p-2 mt-4 gap-1" ><img src={Tick} alt="img" width={20} />100 Plugins/Extensions </p>
                                            </li>
                                        </ul>
                                        <a className="btn mt-8 hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  bg-gradient-to-br from-[#dce2e7] to-[#fcfafa] hover:text-[#fff] hover:scale-105 hover:-translate-y-1 duration-300 drop-shadow-xl">
                                            ORDER NOW
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        }




                    </div>
                </div>
            </div >
        </div>
    )
}

export default Pricing;