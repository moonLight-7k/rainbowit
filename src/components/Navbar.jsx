import Logo from '../assets/logo.png';


const Navbar = () => {



    return (
        <>
            <div className="navbar border-[1px] border-[#dfdfdf] bg-[#ECF0F3] sticky top-0 z-10">
                <div className="navbar-start justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a >HOME</a></li>
                            <li><a >FEATURES</a></li>
                            <li><a >PORTFOLIO</a></li>
                            <li><a >RESUME</a></li>
                            <li><a >TESTIMONIAL</a></li>
                            <li><a >CLIENTS</a></li>
                            <li><a >PRICING</a></li>
                            <li><a >BLOG</a></li>
                            <li><a >CONTACTS</a></li>
                        </ul>
                    </div>
                    <img src={Logo} alt="logo_img" className='max-w-[120px] min-w-[40px]' />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a >HOME</a></li>
                        <li><a >FEATURES</a></li>
                        <li><a >PORTFOLIO</a></li>
                        <li><a >RESUME</a></li>
                        <li><a >TESTIMONIAL</a></li>
                        <li><a >CLIENTS</a></li>
                        <li><a >PRICING</a></li>
                        <li><a >BLOG</a></li>
                        <li><a >CONTACTS</a></li>
                    </ul>
                </div>
                <div className="navbar navbar-end ">
                    <div className="flex-none " >
                        <div className="dropdown dropdown-end" >
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle " style={{
                                boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.25), -13px -11px 20px 0px #FFF'
                            }}>
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item bg-error rounded-[#FF014F] text-[#ffffff]">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn bg-gradient-to-br from-[#e5e6dc] to-[#fcfafa] btn-block hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53] hover:text-[#fff] scale-100 duration-300">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn ml-4 hover:bg-gradient-to-br hover:from-[#8a64f1] hover:to-[#fa0c53]  bg-gradient-to-br from-[#e5eaee] to-[#fcfafa] hover:text-[#fff] hover:scale-100 hover:-translate-y-1 duration-500" style={{
                            boxShadow: '7px 5px 28px 0px rgba(0, 0, 0, 0.25), -13px -11px 20px 0px #FFF '
                        }}>BUY NOW</a>
                    </div>
                </div>



            </div>
        </ >

    );
}


export default Navbar;

