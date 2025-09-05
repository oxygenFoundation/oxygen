import React from 'react';


function Contact () {
  return (
    <>
    <section id="contact" className="contact-form">
        <h2 className="text-center mt-12 mb-4 text-4x1 font-bold text-black">Contact <span className="text-purple-500">Us</span></h2>
        <form action="#" className="max-w-3x1 mx-auto text-center mb-12">
            <div className="flex flex-col items-center">
                <input type="text" placeholder="Full Name"  className="w-72 h-10 p-5 text-lg bg-gray-400 rounded-lg m-4"/>
                <input type="email" placeholder="Email"  className="w-72 h-10 p-6 text-lg bg-gray-400 rounded-lg m-4"/>
                <input type="number" placeholder="Phone Number" className="w-72 h-10 p-5 text-lg bg-gray-400 rounded-lg m-4"/>
                <input type="text" placeholder="Subject" className="w-72 h-10 p-5 text-lg bg-gray-400 rounded-lg m-4"/>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message" className="w-72 h-20 p-5 text-lg bg-gray-400 rounded-lg m-4 resize-none"
            ></textarea>
            <input type="submit" value="Send Message" className="bg-purple-800 text-sm hover-200 p-4 rounded-lg" />
            </div>
        </form>
    </section>
    </>
  );
}

export default Contact;