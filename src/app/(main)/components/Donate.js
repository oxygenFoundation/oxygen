'use client';
import React from 'react';



function Donate() {

    return(
         <section id="donate" className="py-2 bg-white text-center">
            <h2 className="text-lg font-bold mb-4 text-black">Donate</h2>
            <p className="text-black">You can support our initiative by donating to our account details below:</p>
            <p className="text-sm font-bold text-black">GTBank: 0150536083</p>
             <a className="bg-purple-500 hover:bg-100  text-white hover:text-purple-500 text-sm md:text-sm lg:text-sm h-8 w-20 p-2  ml-0 rounded-lg" href="#donate">Donate Now</a> 
         </section>
      
    );

}

export default Donate;