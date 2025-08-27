'use client';
import React from 'react';
import Image from 'next/image';

function Hero() {
    return(
    <section id="hero" className="h-94 bg-cover bg-center flex items-end justify-between p-4 " style={{
      backgroundImage:'url(https://media.istockphoto.com/id/184927700/photo/african-girl-by-water-pump.jpg?s=612x612&w=0&k=20&c=5EXErw4OlPQfd6JkXh2J_DOrufg2BkKYDwXO7FwCfxk=)',
    }}>
        <p className="text-purple-100 text-lg font-bold">Empowering girl children through education <span className="text-purple-500">and</span> awareness.</p>
             <div> 
             <Image src="/images/logo.JPG" alt="Image 1" width={60} height={40} />
         </div> 

        
         
    </section>
    );
}

export default Hero;