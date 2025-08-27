'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
   
       const toggleNavbar = () => {
           setShowNavbar( ! showNavbar);
           console.log("Toggling from", showNavbar, "to", !showNavbar);
       };

    //  const handleLinkClick = () => {
    //    toggleNavbar();
    //  };

    return (
        <nav className="h-12 bg-transparent text-white p-2 flex justify-between items-center absolute top-0 left-0 w-full p-4">
             <div className="absolute top-0 left-0 text-white-500 font-bold cursor-pointer animate-pulse">
              <span className="font-bold font-oxygen italic">OXYGEN</span> <span className="text-sm">FOUNDATION</span>     
                
                </div>
               
           <div>
            <button onClick={toggleNavbar} className="text-2x1 z-50 relative ">
            {showNavbar ? (
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </svg>
                ) : (

                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                )}
            </button>
                        {showNavbar && (
                           
                            <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col bg-transparent absolute top-0 left-0 shadow-md w-50 pt-4  h-64"> 
                            
                            <ul className="text-white-500 flex-1 overflow-y-auto space-y-4">
                                <li className="hover:underline hover:decoration-purple-500 hover:decoration-2">
                                    <a href="#about" >About</a>
                                </li>
                                <li className="hover:underline hover:decoration-purple-500 hover:decoration-2">
                                    <a href="#Mission">Mission</a>
                                </li>
                                   <li className="hover:underline hover:decoration-purple-500 hover:decoration-2">
                                    <a href="#donate">Donate</a>
                                </li>
                                 <li className="hover:underline hover:decoration-purple-500 hover:decoration-2">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                            
                            </div>
                        )}
                        </div>
                        <div className="">

                            <button className="bg-purple-100 hover:bg-50 text-purple-500 text-xs md:text-sm lg:text-base pt-0 h-8 w-20 px-2 lg:px-6 md:px-3 ml-0 rounded"><a href="#Donate">Donate</a></button> 
                        </div>
                     </nav>

    );
}

export default Navbar;