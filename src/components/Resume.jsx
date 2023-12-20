/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Resume = () => {
    const [activeButton, setActiveButton] = useState("Education");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div>
            <div className="bg-[#ecf0f3] pb-20 pt-20">
                <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-24 2xl:mx-36 grid">
                    <div className="p-4 mt-16">
                        <h3 className="text-lg font-semibold text-[#fa2828]">7+ YEARS OF EXPERIENCE</h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">My Resume</h1>
                    </div>

                    <div>
                        <nav className="bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] drop-shadow-md rounded-md justify-center p-0 m-0">
                            <ul className="flex flex-wrap justify-center">
                                <button
                                    className={`px-16 lg:px-24 md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Education" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000]"}`}
                                    onClick={() => handleClick("Education")}
                                >
                                    Education
                                </button>
                                <button
                                    className={`px-16 lg:px-24 md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Professional Skills" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000]"}`}
                                    onClick={() => handleClick("Professional Skills")}
                                >
                                    Professional Skills
                                </button>
                                <button
                                    className={`px-16 lg:px-[90px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Experience" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000]"}`}
                                    onClick={() => handleClick("Experience")}
                                >
                                    Experience
                                </button>
                                <button
                                    className={`px-16 lg:px-[82px] md:px-[74px] py-4 sm:py-6 text-xl sm:text-2xl font-normal rounded-md hover:text-[#ff3d3d] drop-shadow-md ${activeButton === "Interview" ? "bg-gradient-to-br from-[#e5eaee] to-[#fcfafa]  text-[#ff3d3d]" : "hover:bg-gradient-to-br hover:from-[#e5eaee] hover:to-[#fcfafa] text-[#000]"}`}
                                    onClick={() => handleClick("Interview")}
                                >
                                    Interview
                                </button>
                            </ul>
                        </nav>
                    </div>


                    {/*  ========Education content goes here========  */}
                    {activeButton === "Education" && <div className="mt-6">
                        <div className="lg:flex md:grid lg:gap-16">

                            {/* Section 2 */}
                            <div className="flex flex-col gap-6 mb-10">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">1998 - 2010</p>
                                    <h1 className="text-4xl font-bold mb-4"> Education Quality</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">BSc in Computer Science</h2>
                                                <p className="mt-3">University of DVI (2006 - 2010)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p>3.90/4</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">AS - Science & Information</h2>
                                                <p className="mt-3">SuperKing College (2001 - 2005)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>4.75/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Secondary School Education</h2>
                                                <p className="mt-3">Kingstar Secondary School (1998 - 2000)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>5.00/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.
                                        </p>
                                    </div>
                                </div>


                            </div>



                            {/* section 2 */}

                            <div className="flex flex-col gap-6 ">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">2010 - 2022</p>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Job Experience</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Sr. Software Engineer</h2>
                                                <p className="mt-3">Google Out Tech - (2017 - Present)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p> USA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] "> Front-end Developer</h2>
                                                <p className="mt-3">Nike - (2020 - 2011)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>INDIA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Secondary School Education</h2>
                                                <p className="mt-3">Kingstar Secondary School (1998 - 2000)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>5.00/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    }

                    {/*  =======Professional Skills content goes here======   */}
                    {
                        activeButton === "Professional Skills" && (
                            <div className="mt-6">
                                <div className="lg:flex md:grid lg:gap-20 justify-around">
                                    {/* Section 1 */}
                                    <div className="flex flex-col gap-6 mb-10">
                                        <div className="mt-6">
                                            <p className="text-lg text-[#fa0c53] font-mono">Features</p>
                                            <h1 className="text-4xl font-bold mb-4">Design Skill</h1>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="flex flex-col gap-8">
                                                <div className="flex flex-col gap-8">
                                                    <div className="">
                                                        <div className="flex justify-between">
                                                            <p>PHOTOSHOT</p>
                                                            <p>100%</p></div>
                                                        <progress className="progress border-2 border-[#c3c8cd] progress-error lg:w-[32vw]" value={100} max="100"></progress>
                                                    </div>

                                                    <div className="">
                                                        <div className="flex justify-between">
                                                            <p>FIGMA</p>
                                                            <p>95%</p></div>
                                                        <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={95} max="100"></progress>

                                                    </div>
                                                    <div className="">
                                                        <div className="flex justify-between">
                                                            <p>ADOBE XD.</p>
                                                            <p>60%</p></div>
                                                        <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={60} max="100"></progress>
                                                    </div>

                                                    <div className="">
                                                        <div className="flex justify-between">
                                                            <p>ADOBE ILLUSTRATOR</p>
                                                            <p>70%</p></div>
                                                        <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={70} max="100"></progress>
                                                    </div>

                                                    <div className="">
                                                        <div className="flex justify-between">
                                                            <p>Design</p>
                                                            <p>90%</p></div>
                                                        <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={90} max="100"></progress>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 2 */}
                                    <div className="flex flex-col gap-6">
                                        <div className="mt-6">
                                            <p className="text-lg text-[#fa0c53] font-mono">Features</p>
                                            <h1 className="text-4xl font-bold mb-4">Development Skill</h1>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="flex flex-col gap-8">
                                                <div className="">
                                                    <div className="flex justify-between">
                                                        <p>HTML</p>
                                                        <p>100%</p>
                                                    </div>
                                                    <progress className="progress border-2 border-[#c3c8cd] progress-error lg:w-[32vw]" value={100} max="100"></progress>
                                                </div>

                                                <div className="">
                                                    <div className="flex justify-between">
                                                        <p>CSS</p>
                                                        <p>85%</p></div>
                                                    <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={85} max="100"></progress>

                                                </div>
                                                <div className="">
                                                    <div className="flex justify-between">
                                                        <p>JAVASCRIPT</p>
                                                        <p>80%</p></div>
                                                    <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={80} max="100"></progress>
                                                </div>

                                                <div className="">
                                                    <div className="flex justify-between">
                                                        <p>SOFTWARE</p>
                                                        <p>70%</p></div>
                                                    <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={70} max="100"></progress>
                                                </div>

                                                <div className="">
                                                    <div className="flex justify-between">
                                                        <p>PLUGIN</p>
                                                        <p>100%</p></div>
                                                    <progress className="progress progress-error border-2 border-[#c3c8cd]  lg:w-[32vw]" value={100} max="100"></progress>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }



                    {/* ========Experience content goes here======== */}
                    {activeButton === "Experience" && <div className="mt-6">


                        < div className="lg:flex md:grid lg:gap-16">

                            {/* Section 2 */}
                            <div className="flex flex-col gap-6 mb-10">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">2010 - 2022</p>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Job Experience</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">BSc in Computer Science</h2>
                                                <p className="mt-3">University of DVI (2006 - 2010)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p>3.90/4</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">AS - Science & Information</h2>
                                                <p className="mt-3">SuperKing College (2001 - 2005)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>4.75/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Secondary School Education</h2>
                                                <p className="mt-3">Kingstar Secondary School (1998 - 2000)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>5.00/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.
                                        </p>
                                    </div>
                                </div>


                            </div>



                            {/* section 2 */}

                            <div className="flex flex-col gap-6 ">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">2001 - 2020</p>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Trainer Experience</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Sr. Software Engineer</h2>
                                                <p className="mt-3">Google Out Tech - (2017 - Present)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p> USA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] "> Front-end Developer</h2>
                                                <p className="mt-3">Nike - (2020 - 2011)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>INDIA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] "> Front-end Developer</h2>
                                                <p className="mt-3">Nike - (2020 - 2011)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>INDIA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>}



                    {/* ========Interview content goes here======== */}
                    {activeButton === "Interview" && <div className="mt-6">

                        < div className="lg:flex md:grid lg:gap-16">

                            {/* Section 2 */}
                            <div className="flex flex-col gap-6 mb-10">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">   2007 - 2010</p>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Company Experience</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">BSc in Computer Science</h2>
                                                <p className="mt-3">University of DVI (2006 - 2010)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p>3.90/4</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">AS - Science & Information</h2>
                                                <p className="mt-3">SuperKing College (2001 - 2005)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>4.75/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Secondary School Education</h2>
                                                <p className="mt-3">Kingstar Secondary School (1998 - 2000)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>5.00/5</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.
                                        </p>
                                    </div>
                                </div>


                            </div>



                            {/* section 2 */}

                            <div className="flex flex-col gap-6 ">
                                <div className="mt-6">
                                    <p className="text-lg text-[#fa0c53] font-mono">2001 - 2020</p>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Job Experience</h1>
                                </div>
                                {/* Card 1 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Sr. Software Engineer</h2>
                                                <p className="mt-3">Google Out Tech - (2017 - Present)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <p> USA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.
                                        </p>
                                    </div>
                                </div>



                                {/* Card 2 */}

                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] "> Front-end Developer</h2>
                                                <p className="mt-3">Nike - (2020 - 2011)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>INDIA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                                        </p>
                                    </div>
                                </div>



                                {/* Card-3 */}
                                <div className="card lg:w-[38vw] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:scale-100 duration-200 p-4">
                                    <div className="card-body">
                                        <div className="flex lg:gap-6">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] "> Front-end Developer</h2>
                                                <p className="mt-3">Nike - (2020 - 2011)</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex">
                                                <p>INDIA</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div >
    );
};

export default Resume;
