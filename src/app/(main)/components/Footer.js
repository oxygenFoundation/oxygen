import React from 'react';



const Footer = () => {
    return(
   <footer className="relative">
    <div className="bg-purple-200 py-8">
    <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-between">
     <div className="w-full md:w-1/3 mb-4 md:mb-0">
     <h2 className="text-2x1 font-bold mb-2 text-purple-900">About us</h2>
     <p className="text-sm text-purple-700"> 
        Our organisation is dedicated to empowering girl children with knowledge, and positivity.
     </p>
     </div>
     <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-2x1 font-bold mb-2 text-black">Quick Links</h2>
                 <ul>
                         <li className="hover:underline hover:decoration-purple-500 hover:decoration-2 text-gray-400">
                               <a href="#about" >About Us</a>
                                </li>
                                <li className="hover:underline hover:decoration-purple-500 hover:decoration-2 text-gray-400">
                                    <a href="#Mission">Mission</a>
                                </li>
                                   <li className="hover:underline hover:decoration-purple-500 hover:decoration-2 text-gray-400">
                                    <a href="#donate">Donate</a>
                                </li>
                                 <li className="hover:underline hover:decoration-purple-500 hover:decoration-2 text-gray-400">
                                    <a href="#contact">Contact</a>
                                </li>
                     </ul>
         </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-900"></div>
         <div className="w-full md:w-1/3">
          <h2 className="text-2x1 font-bold mb-2 text-black">Get in Touch</h2>
           <ul>
                         <li>
                               <a href="mailto:Foundationoxygen36@gmail.com"  className="text-sm text-purple-800" >Foundationoxygen36@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:07067120540"  className="text-sm text-purple-800">07067120540</a>
                                </li>
                        
                                    <div className="flex item-center ">
                                      
                                    <a href=""  className="text-white text-xl border-2 border-purple-800 w-10 h-10 inline-flex justify-center items-center rounded-full mx-2 shadow-[inset_0_0_10px] transition duration-300 ease-in-out hover:bg-white hover:shadow-[0_10px] hover:scale-125 hover:-translate-y-2.5 hover:text-purple-400">
                                       < i className="bx  bxl-facebook-circle"></i>
                                    </a>
                                    <a href=""  className="text-white text-xl border-2 border-purple-800 w-10 h-10 inline-flex justify-center items-center rounded-full mx-2 shadow-[inset_0_0_10px] transition duration-300 ease-in-out hover:bg-white hover:shadow-[0_10px] hover:scale-125 hover:-translate-y-2.5 hover:text-purple-400">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/oxygenfoundationcare?igsh=M2YxMTE1NHc4azlt&utm_source=qr"  className="text-white text-xl border-2 border-purple-800 w-10 h-10 inline-flex justify-center items-center rounded-full mx-2 shdow-[inset_0_0_10px] transition duration-300 ease-in-out hover:bg-white 
                                    hover:shadow-[0_10px] hover:scale-125 hover:-translate-y-2.5 hover:text-purple-400">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    </div>
                                    </ul>
                                   
         </div>
        </div>
       
    </div>
    <div className="bg-purple-900 py-4 text-center text-white">
        <p className="text-lg">
        &copy; {new Date().getFullYear()} Oxygen Foundation. All right reserved.
        </p>
         </div>
   </footer>
    );
}
 export default Footer;