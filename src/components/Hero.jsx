import Banner from '../assets/banner-01.png';
import Facebook from '../assets/facebook.svg';
import Figma from '../assets/figma.svg';
import In from '../assets/in.png';
import Linkedin from '../assets/linkedin.svg';
import Sketch from '../assets/sketch.svg';
import Twitter from '../assets/twitter.svg';
import Typed from 'react-typed';

const Hero = () => {

    const TextAnimation = () => {
        const typedOptions = {
            strings: ["UI/UX Designer.", "Developer.", "Experienced."],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 2000,
            showCursor: true,
            loop: true
        };

        return (
            <Typed
                strings={typedOptions.strings}
                typeSpeed={typedOptions.typeSpeed}
                backSpeed={typedOptions.backSpeed}
                backDelay={typedOptions.backDelay}
                showCursor={typedOptions.showCursor}
                loop={typedOptions.loop}
                className="text-3xl lg:text-[58px] font-bold w-md mb-2 lg:mb-0 sm:mt-8"
            />
        );
    };

    return (
        <div className="hero min-h-screen bg-[#ECF0F3]">
            <div className="hero-content flex-col lg:flex-row-reverse mx-4 lg:mx-auto">
                <img src={Banner} className="sm:max-w-lg min-w-sm rounded-lg shadow-xl sm:ml-8 mb-4 lg:mb-0" />

                <div className="max-w-3xl min-w-md">
                    <p className="py-2  sm:mb-4 font-sans">WELCOME TO MY WORLD</p>
                    <div className="text sm:mt-6">
                        <div className='flex md: flex-col lg:flex-row gap-4'>
                            <h1 className="text-4xl lg:text-[68px] font-bold w-md mb-2 lg:mb-0">Hi, I’m</h1>
                            <h1 className="text-4xl lg:text-[68px] text-[#FF014F] font-bold w-md lg:mt-0 -mt-4">Jone Lee</h1>
                        </div>
                        <h1 className="text-4xl lg:text-[68px] lg:mt-[2rem] sm:text-[70px] md:text-4xl md:-mt-1 font-bold w-md mb-2 lg:mb-0 sm:mt-8">a  <TextAnimation /></h1>
                    </div>

                    <p className="py-6 text-lg max-w-xl">I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

                    <div className="hero-content flex flex-col lg:flex-row justify-around mb-4 sm:-ml-16">
                        <div className="mb-4 lg:mb-0">
                            <h4>FIND ME</h4>
                            <div className='flex gap-4 mt-4'>
                                <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={Facebook} alt="fb" />
                                </div>
                                <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={Twitter} alt="fb" />
                                </div>
                                <div className="w-[3.5rem] h-[3.5rem] bg-gradient-to-br from-[#cdcdcdc4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={Linkedin} alt="fb" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>BEST SKILLS ON</h4>
                            <div className='flex gap-4 mt-4'>
                                <div className="w-[3.5rem] h-[3.5rem] bg-p-bg justify-center flex p-4 rounded-[4px] shadow-md" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={In} alt="fb" />
                                </div>
                                <div className="w-[3.5rem] h-[3.5rem] bg-p-bg justify-center flex p-4 rounded-[4px] shadow-[4px]" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={Figma} alt="fb" />
                                </div>
                                <div className="w-[3.5rem] h-[3.5rem] bg-p-bg justify-center flex p-4 rounded-[4px] shadow-[4px]" style={{
                                    boxShadow: '7px 5px 16px 0px rgba(0, 0, 0, 0.25), -4px -8px 14px 4px #FFF'
                                }}>
                                    <img src={Sketch} alt="fb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
