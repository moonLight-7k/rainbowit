import Img_1 from '../assets/blog-img-1.jpg';
import Img_2 from '../assets/blog-img-2.jpg';
import Img_3 from '../assets/blog-img-3.jpg';
import Clock from '../assets/clock.svg';



const Blog = () => {

    return (
        <div className='bg-[#ecf0f3] pb-20 pt-20'>
            <div className="divider bg-[#ecf0f3] m-0 "></div>

            <div className='max-w-full mx-6 sm:mx-16 md:mx-24 lg:mx-36 grid '>
                <div className='p-4 mt-16'>
                    <h3 className='text-lg font-semibold text-[#fa2828]'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 mb-6 font-bold">My Blog</h1>
                </div>

                <div className="text-primary-content gap-y-14 mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 border-[2px] border-[#d4d4d4] " style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.25), -13px -11px 20px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_1} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>DEVELOPMENT
                            </p>
                            <p className='text-[#232222] flex gap-1'> <img src={Clock} alt="icon" width={16} />4 min read</p>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-semibold text-left hover:text-[#fa2828] hover:scale-100 duration-500">The Best Ways to Do Market Research For Your Business Plan.  </h2>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] hover:scale-100 duration-500 border-[2px] border-[#d4d4d4] " style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.25), -13px -11px 20px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_2} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>QUOTE</p>
                            <p className='text-[#232222] flex gap-1'> <img src={Clock} alt="icon" width={16} />4 min read</p>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-semibold text-left hover:text-[#fa2828] hover:scale-100 duration-500">The Easiest Way to Become a Successful Writer and Authors.  </h2>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card w-96 bg-[##EEF2F4] shadow-xl bg-gradient-to-br from-[#e3e9ed] to-[#FDFDFE] border-[2px] border-[#d4d4d4] hover:scale-100 duration-500 " style={{
                        boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.25), -13px -11px 20px 0px #FFF'
                    }}>
                        <div className="overflow-hidden rounded-xl mx-10 mt-10">

                            <figure className="overflow-hidden w-full h-full">
                                <img src={Img_3} alt="Shoes" className="rounded-xl hover:scale-110 duration-500 " />
                            </figure>
                        </div>
                        <div className="flex justify-around pt-2 -mb-2 gap-16 ">
                            <p className='text-[#fa2828] items-center text-center font-semibold text-sm'>EXTERNAL LINK</p>
                            <p className='text-[#232222] flex gap-1'> <img src={Clock} alt="icon" width={16} />4 min read</p>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#000] text-2xl font-semibold text-left hover:text-[#fa2828] hover:scale-100 duration-500 ">Travel App Design Creativity & Application. </h2>

                        </div>
                    </div>


                </div>
            </div>
            <div className="divider bg-[#ecf0f3] mt-36 -mb-32 "></div>

        </div>
    )
}

export default Blog;
