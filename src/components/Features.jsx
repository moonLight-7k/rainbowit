import Burger from '../assets/Burger.png'
import Arrow from '../assets/arrow.svg'
import Book from '../assets/book-outline.svg'
import Codepen from '../assets/codepen.svg'
import Database from '../assets/database.svg'
import Mobile from '../assets/mobile.svg'
import Tv from '../assets/tv.svg'

const Features = () => {
    return (
        <div className='bg-[#ecf0f3] pb-10 pt-10'>
            <div className="divider bg-[#ecf0f3] m-0 "></div>

            <div className='max-w-full mx-6 sm:mx-16 md:mx-24 lg:mx-36 grid '>
                <div className='p-4 mt-16'>
                    <h3 className='text-lg font-semibold text-[#fa2828]'>FEATURES</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">What I Do</h1>
                </div>

                <div className="text-primary-content grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

                    {/* Feature 1 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Burger} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">Business Strategy</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            I throw myself down among the tall grass by the stream as I lie close to the earth.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block hover:visible' />
                    </div>

                    {/* Feature 2 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Book} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">App Development</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            We’ll handle everything from the app development process until it is time to make your project live.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block hover:visible' />
                    </div>

                    {/* Feature 3 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Tv} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">Business Strategy</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block hover:visible' />
                    </div>

                    {/* Feature 4 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Mobile} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">Business Strategy</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block hover:visible' />
                    </div>

                    {/* Feature5 5 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Database} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">Business Strategy</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block hover:visible' />
                    </div>

                    {/* Feature 6 */}
                    <div className="card-body w-full h-[360px] p-8 bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] rounded-md hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  hover:text-white" style={{
                        boxShadow: '7px 6px 18px 0px rgba(0, 0, 0, 0.25), -10px -10px 18px 2px #FFF'
                    }}>
                        <img src={Codepen} alt="icon" width={50} />
                        <h2 className="card-title text-[#000] text-2xl sm:text-3xl mt-6">Business Strategy</h2>
                        <p className='text-lg text-[#000] mt-4'>
                            We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.
                        </p>
                        <img src={Arrow} alt="icon" width={40} className='hidden lg:inline-block' />
                    </div>
                </div>
            </div>
            <div className="divider bg-[#ecf0f3] mt-32 -mb-20 "></div>

        </div>
    )
}

export default Features;
