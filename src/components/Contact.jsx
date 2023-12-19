import Image from '../assets/contact-img.png';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

const Contact = () => {
    return (
        <div>
            <div className='bg-[#ecf0f3] pb-20 pt-20'>
                <div className='max-w-full sm:mx-16 md:mx-24 lg:mx-36 grid '>
                    <div className='p-4 mt-16'>
                        <h3 className='text-lg font-semibold text-[#fa2828]'>CONTACT </h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">Contact With Me</h1>
                    </div>
                    <div className='grid grid-cols-1 mx-4 md:grid-cols-1  sm:grid-cols-2 lg:flex lg:mx-6'>
                        <div className="text-primary-content mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                            {/* Card 1 */}
                            <div className="card sm:w-full md:w-[90vw] md:-ml-14 lg:w-[32vw] bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 border-[2px] border-[#d4d4d4] ">
                                <div className="overflow-hidden rounded-xl mx-10 mt-10">
                                    <figure className="overflow-hidden w-full h-full">
                                        <img src={Image} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 w-full" />
                                    </figure>
                                </div>
                                <div className="flex justify-start pt-2 pl-10 mt-4 gap-16">
                                    <p className='text-[#000] items-center text-left  text-4xl font-bold '>Nevine Acotanza</p>
                                </div>
                                <div className="card-body text-center">
                                    <p className='text-left text-[#000] text-lg font-normal sm:pl-3'>Chief Operating Officer</p>
                                    <p className='text-left text-[#000] text-xl sm:pl-3 sm:mt-4'> I am available for freelance work. Connect with me via and call in to my account.</p>
                                    <p className='text-left text-[#000] text-lg sm:mt-4 sm:pl-3'>Phone: +012 345 678 90</p>
                                    <p className='text-left text-[#000] text-lg sm:pl-3'>Email: admin@example.com</p>
                                    <div>
                                        <p className='text-left text-[#000] text-lg sm:mt-4 sm:pl-3'>FIND WITH ME</p>
                                        <div className='flex gap-4 mt-4'>
                                            <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                                                <img src={Facebook} alt="fb" />
                                            </div>
                                            <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                                                <img src={Twitter} alt="fb" />
                                            </div>
                                            <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                                                <img src={Linkedin} alt="fb" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="text-primary-content mt-10 flex flex-col w-full sm:w-full md:w-[90vw] lg:w-[70vw] md:-ml-14 rounded-md px-10 py-10 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE]" style={{
                            boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                        }}>
                            <div className='flex gap-6'>
                                <div>
                                    <label htmlFor="name" className='text-[#000] font-mono'>YOUR NAME</label>
                                    <input type="text" name='name' id='name' className='input focus:input-error p-2 mt-2 w-full text-[#000]' />
                                </div>
                                <div>
                                    <label htmlFor="phone" className='text-[#000] '>PHONE NUMBER</label>
                                    <input type="text" id='phone' className='input focus:input-error p-2 mt-2 bg-[#fff] w-full' />
                                </div>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="phone" className='text-[#000] font-mono lg:mt-6 md:mt-4 mt-4'>EMAIL</label>
                                <input type="text" className='input focus:input-error p-2 mt-2 bg-[#fff] w-full' />
                            </div>
                            <div className='flex flex-col lg:mt-6 md:mt-4 mt-4'>
                                <label htmlFor="phone" className='text-[#000] font-mono'>SUBJECT</label>
                                <input type="text" className='input focus:input-error p-2 mt-2 bg-[#fff] w-full' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone" className='text-[#000] font-mono lg:mt-6 md:mt-4 mt-4'>YOUR MESSAGE</label>
                                <input type="text" className='input focus:input-error p-2 mt-2 bg-[#fff] h-[25vh] md:h-[35vh] lg-[30vh]' />
                            </div>
                            <a className="btn mt-8 hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:scale-105 hover:-translate-y-1 duration-500 drop-shadow-lg">
                                SEND MESSAGE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
