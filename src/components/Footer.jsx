import Logo from '../assets/logo.png';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';


const Footer = () => {
    return (
        <div>

            <div className="divider bg-[#ecf0f3] m-0 "></div>
            <footer className="footer p-10 text-base-content py-40 bg-[#ecf0f3]">
                <div className="lg:ml-32">
                    <img src={Logo} alt="img" />
                    <div className='flex gap-4 mt-4'>
                        <div className="w-[3.5rem] h-[3.5rem] drop-shadow-md bg-gradient-to-br from-[#ebe8e8c4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                            <img src={Facebook} alt="fb" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] drop-shadow-md bg-gradient-to-br from-[#ebe8e8c4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                            <img src={Twitter} alt="fb" />
                        </div>
                        <div className="w-[3.5rem] h-[3.5rem] drop-shadow-md bg-gradient-to-br from-[#ebe8e8c4] to-[#fcfcfc] justify-center flex p-4 rounded-[4px] shadow-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:-translate-y-1 duration-500 ">
                            <img src={Linkedin} alt="fb" />
                        </div>
                    </div>
                </div>


                <nav className='gap-3'>
                    <header className="footer-title text-2xl font-semibold text-[#ff2e2e] ">QUICK LINK</header>
                    <a className="link link-hover  text-lg hover:underline hover:scale-100 duration-300 hover:text-[#ff2e2e] font-normal">About</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Portfolio</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Services</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Blog</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Contact</a>
                </nav>


                <nav className='gap-3'>
                    <header className="footer-title text-2xl font-semibold text-[#ff2e2e]">RESOURCES</header>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Authentication</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">System Status</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Terms of Service</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Pricing</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Over Right</a>
                </nav>



                <nav className='gap-3'>
                    <header className="footer-title text-2xl font-semibold text-[#ff2e2e]">DEVELOPERS</header>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Documentation</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal"> API Reference</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Authentication</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Support</a>
                    <a className="link link-hover text-lg hover:underline hover:scale-100 duration-200 hover:text-[#ff2e2e] font-normal">Open Source </a>

                </nav>

            </footer>
            <div className="divider bg-[#ecf0f3] m-0 "></div>

            <footer className="footer footer-center p-4 bg-[#ecf0f3] text-base-content">
                <aside>
                    <p className='text-xl py-5'>© 2023 -  All rights reserved by Rainbow-Themes</p>
                </aside>
            </footer>
        </div>

    );
}

export default Footer;