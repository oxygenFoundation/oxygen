'use client';
import React, {useState} from 'react';
import Image from 'next/image';

const Mission = () => {
const [showMore, setShowMore] = useState(false);

const handleMore = "Read More";

    return(
    <section id="Mission" className="py-10 bg-white-500 relative">
      <div className="container mx-auto p-4 md:p-6 mt-0 lg:p-8 flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/2 lg:w-2/3">
             <h1 className="text-3x1 md:text-4x1 lg:text-5x1 font-bold mb-4 text-black">Our Mission</h1>
             <p className="text-sm md:text-sm text-black mb-4"> Our mission is to empower girl children with knowledge to take control of their lives and futures.</p>
             <h2 className="text-lg md:text-xl text-black mb-4">  <span className="text-purple-900 underline decoration-purple-900 decoration-2 "> To drive social reformation</span> trough.</h2>
             <p className="text-sm md:text-sm text-black mb-4">Dissemination of accurate and empowering information, promotion of morale and ethical values.</p>
              <p className="text-sm md:text-sm text-black mb-4">Protection and preservation of cultural heritage.</p>
               <p className="text-sm md:text-sm text-black mb-4">Capacity building for youth and marginalize groups.</p>
              <p className="text-sm md:text-sm text-black mb-4">And development-oriented engagement at both community and continental levels.</p>
               {showMore && (
                <div>
                <p className="text-sm md:text-sm text-black mb-4">We believe in creating a society where every girl child has access to quality education, healthcare, and opportunities to thrive. Our organization is dedicated to providing education, resources, and support to girl children in need, and promoting a culture of positivity and empowerment around menstruation.</p>
                <p className="text-sm md:text-sm text-black mb-4">Part of our goal is to ignite sociental awareness of its current challenges and untapped potential, with the ultimate aim or fostering a peaceful, inclusive, and progressive environment. we are committed to nurturing a generations <span className="text-purple-900 underline decoration-purple-500 decoration-1 "> especially young girls and boys</span> equiped with knowledge, value and capacity to convert information into impactful, productive outcome. </p>
               </div>
               )}
               <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded" onClick={() => setShowMore(!showMore)}>
               {showMore ? "Read Less" : "Read More"}
               </button>
               </div>
                   <div className="relative w-64 h-54 mt-2 bg-red-300">
                    <Image src="/images/helper.JPG"  alt="mission image" fill style={{ objectFit: "cover"}} />
                   </div>
      </div> 


       <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-100"></div>
      </section>
     
        );
        } 
        export default Mission;