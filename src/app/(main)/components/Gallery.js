'use client';
import React from 'react';
import Image from 'next/image';

function Gallery () {
    return(
    <section id="Gallery" className="py-20 bg-white ">
   <div className="container p-6  mx-auto">
    <h1 className="text-lg font-bold mb-4 text-black">Gallery</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 border border-gray-500 p-6"> 
          <div className="relative w-full sm:w-64 h-54 bg-red-300">
        <a href="/images/outreachf.JPG" target="_blank">
         <Image src="/images/outreachf.JPG" alt="Image 1" fill style={{ objectFit: "cover" }} />
         </a>
        </div>
          <div className="relative w-full sm:w-64 h-54  bg-red-300">
        <a href="/images/outreach-2.JPG" target="_blank">
         <Image src="/images/outreach-2.JPG" alt="Image 2" fill  style={{ objectFit: "cover" }} />
         </a>
        </div>
          <div className="relative w-full sm:w-64 h-54 bg-red-300">
        <a href="/images/outreach-3.JPG" target="_blank">
         <Image src="/images/outreach-3.JPG" alt="Image 3" fill  style={{ objectFit: "cover" }} />
         </a>
        </div>
        
        <div className="relative w-full sm:w-64 h-54 bg-red-300">
        <a href="/images/outreach-5.JPG" target="_blank">
         <Image src="/images/outreach-5.JPG" alt="Image 1" fill  style={{ objectFit: "cover" }}/>
         </a>
        </div>
          <div className="relative w-full sm:w-64h-54  bg-red-300">
        <a href="/images/outreach-7.JPG" target="_blank">
         <Image src="/images/outreach-7.JPG" alt="Image 1" fill style={{ objectFit: "cover" }} />
         </a>
        </div>
        <div className="relative w-full sm:w-64 h-54 \bg-red-300">
        <a href="/images/outreach-8.JPG" target="_blank">
         <Image src="/images/outreach-8.JPG" alt="Image 1" fill style={{ objectFit: "cover" }}/>
         </a>
        </div>
        {/* <div className="relative w-full h-64 bg-red-300"> */}
        {/* <video src="/videos/first-vid.MP4" controls/> */}
        {/* </div> */}
         {/* <div className="relative w-full h-64 bg-red-300"> */}
        {/* <video src="" controls/> */}
        {/* </div> */}
    </div>
   </div>
    </section>

    );
}
export default Gallery;