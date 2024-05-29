
"use client"

import Link from "next/link";


const Navbar = () => {
    const navOptions = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li> <Link href='#'>Package</Link></li>

    </>

    return (

        <>
            <div className="navbar bg-slate-300">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl font-bold uppercase">Studio89</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                            {
                                navOptions
                            }
                        </ul>
                    </div>

                </div>
            </div>

        </>
    );
};


export default Navbar;