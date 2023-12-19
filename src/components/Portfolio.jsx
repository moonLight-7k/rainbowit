import Img_1 from '../assets/img-1.jpg';
import Img_2 from '../assets/img-2.jpg';
import Img_3 from '../assets/img-3.jpg';
import Img_4 from '../assets/img-4.jpg';
import Img_5 from '../assets/img-5.jpg';
import Img_6 from '../assets/img-6.jpg';
import LikeButton from '../components/Likebtn';



const Features = () => {

    return (
        <div className='bg-[#ecf0f3] pb-20 pt-20'>
            <div className='max-w-full mx-6 sm:mx-16 md:mx-24 lg:mx-36 grid '>
                <div className='p-4 mt-16'>
                    <h3 className='text-lg font-semibold text-[#fa2828]'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">My Portfolio</h1>
                </div>

                <div className="text-primary-content gap-y-14 mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6  ">

                    {/* Card 1 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_1} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>GALLERY</p>
                            <LikeButton />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] hover:scale-100 duration-500">NFT Dashboard Application Development. </h2>
                            <div className="card-actions">
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_2} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>VIDEO</p>
                            <LikeButton />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] hover:scale-100 duration-500">Online Food Delivery Mobile App Design.  </h2>
                            <div className="card-actions">
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_3} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>EXTERNAL LINK</p>
                            <LikeButton />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] hover:scale-100 duration-500 ">Travel App Design Creativity & Application. </h2>
                            <div className="card-actions">
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_4} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>IMAGES</p>
                            <LikeButton />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] hover:scale-100 duration-500">Workout Website Design And Development. </h2>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_5} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>GALLERY</p>
                            <LikeButton />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] ">Mobile Application Landing Page Design. </h2>

                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 cursor-pointer" style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.15), -12px -15px 12px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_6} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>STANDARD</p>
                            <LikeButton />


                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-bold text-left hover:text-[#fa2828] ">Restaurant Mobile Application Figma Design.  </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
