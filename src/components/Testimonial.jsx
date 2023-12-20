import Img_1 from '../assets/t_img_1.png';
import Img_2 from '../assets/t_img_2.png';
import Img_3 from '../assets/t_img_3.png';
import Quote from '../assets/quote.svg';



const Testimonial = () => {
    return (
        <div>
            <div className='bg-[#ecf0f3] pb-20 pt-20'>
                <div className='max-w-full sm:mx-16 md:mx-24 lg:mx-36 grid '>
                    <div className='p-4 mt-16'>
                        <h3 className='text-lg font-semibold text-[#fa2828]'>WHAT CLIENTS SAY </h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">Testimonial</h1>
                    </div>

                    <div className="lg:flex md:grid sm:flex sm:flex-row justify-center">
                        <div className="carousel rounded-box  lg:w-[70vw]">

                            {/* First */}
                            <div className="carousel-item w-1/2 gap-4">
                                {/* Card */}
                                <div className=" card w-96 md:w-[20rem] sm:w-[20vw] md:h-[64vh] bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer ">
                                    <div className="overflow-hidden rounded-xl mx-10 mt-10">
                                        <figure className="overflow-hidden w-full h-full">
                                            <img src={Img_1} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 w-full" />
                                        </figure>
                                    </div>
                                    <div className=" justify-start pt-2 pl-10 mt-4 ">
                                        <p className='text-left text-[#ff2a2a] text-sm font-normal sm:pl-3'>RAINBOW-THEMES</p>
                                        <p className='text-[#000] items-center mt-4 text-left ml-2 text-4xl font-bold '>Nevine Acotanza</p>
                                    </div>
                                    <div className="card-body text-center lg:-mt-4">
                                        <p className='text-left text-[#000] text-lg font-normal sm:pl-3'>Chief Operating Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item sm:w-[40vw] grid w-1/2 ">
                                <div>
                                    <img src={Quote} alt="img" width={200} className='lg:-ml-20 ' />
                                </div>
                                <div className="card lg:w-[38vw] lg:h-[40vh] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] lg:-ml-[4rem] lg:-mt-[3rem]">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Web App Development</h2>
                                                <p className="mt-3">Via Upwork - Mar 4, 2015 - Aug 30,2021 test</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <div className="rating rating-xs ">
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris test
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Second */}
                            <div className="carousel-item  w-1/2 gap-4">
                                {/* Card */}
                                <div className=" lg:m-6 mt-auto card sm:w-full md:w-[90vw]  lg:w-[28vw] lg:h-[60vh] bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 border-[2px] border-[#d4d4d4] ">
                                    <div className="overflow-hidden rounded-xl mx-10 mt-10">
                                        <figure className="overflow-hidden w-full h-full">
                                            <img src={Img_2} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 w-full" />
                                        </figure>
                                    </div>
                                    <div className=" justify-start pt-2 pl-10 mt-4 ">
                                        <p className='text-left text-[#ff2a2a] text-sm font-normal sm:pl-3'>BOUND TROLOLA</p>
                                        <p className='text-[#000] items-center mt-4 text-left ml-2 text-4xl font-bold '>Jhon Duone Joe</p>
                                    </div>
                                    <div className="card-body text-center lg:-mt-4">
                                        <p className='text-left text-[#000] text-lg font-normal sm:pl-3'>Chief Operating Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item  grid w-1/2">
                                <div>
                                    <img src={Quote} alt="img" width={200} className='lg:-ml-20' />
                                </div>
                                <div className="card lg:w-[38vw] lg:h-[40vh] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] lg:-ml-[4rem] lg:-mt-[3rem]">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Android App Development</h2>
                                                <p className="mt-3">Via Upwork - Mar 4, 2015 - Aug 30,2021 test</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <div className="rating rating-xs ">
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris test
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Third */}
                            <div className="carousel-item  w-1/2 gap-4">
                                {/* Card */}
                                <div className=" lg:m-6 mt-auto card sm:w-full md:w-[90vw]  lg:w-[28vw] lg:h-[60vh] bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 border-[2px] border-[#d4d4d4] ">
                                    <div className="overflow-hidden rounded-xl mx-10 mt-10">
                                        <figure className="overflow-hidden w-full h-full">
                                            <img src={Img_3} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 w-full" />
                                        </figure>
                                    </div>
                                    <div className=" justify-start pt-2 pl-10 mt-4 ">
                                        <p className='text-left text-[#ff2a2a] text-sm font-normal sm:pl-3'>RAINBOW-THEMES</p>
                                        <p className='text-[#000] items-center mt-4 text-left ml-2 text-4xl font-bold '>Cara Delevingne</p>
                                    </div>
                                    <div className="card-body text-center lg:-mt-4">
                                        <p className='text-left text-[#000] text-lg font-normal sm:pl-3'>Chief Operating Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item  grid w-1/2">
                                <div>
                                    <img src={Quote} alt="img" width={200} className='lg:-ml-20' />
                                </div>
                                <div className="card lg:w-[38vw] lg:h-[40vh] shadow-xl bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] lg:-ml-[4rem] lg:-mt-[2rem]">
                                    <div className="card-body">
                                        <div className="flex lg:gap-10 justify-around">
                                            <div>
                                                <h2 className="card-title lg:text-[1.8rem] ">Travel Mobile App Design</h2>
                                                <p className="mt-3">Via Upwork - Mar 4, 2015 - Aug 30,2021 test</p>
                                            </div>

                                            <div className="bg-[#fff] hover:bg-[#fff] btn drop-shadow-md flex justify-end ">
                                                <div className="rating rating-xs ">
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" />
                                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ffe815]" checked />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <p className="text-lg">
                                            Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris test
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Testimonial;