import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Me() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // sent me
    emailjs.sendForm('service_pnzuub9', 'template_b1n5wwt', form.current, 'bB9ZS1rk08frkzuzN').then(() => { alert('Your message has been sent successfully') },);
    // sent clinet
    emailjs.sendForm('service_pnzuub9', 'template_w5qor3u', form.current, 'bB9ZS1rk08frkzuzN')
  };



  return (
    <section className='pt-20 h-screen bg-[#D7D7D7]'>
      <div className='container mx-auto'>
        <h2 className='pt-5 flex justify-center font-bold text-[25px]'>Contact Us</h2>
        <form className='mt-4 flex flex-col justify-center' ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="w-[400px] mt-3 mx-auto p-2 rounded-md outline-0" id="name" placeholder="full name"  />
          <input type="text" name="phone-number" className="w-[400px] mt-3 mx-auto p-2 rounded-md outline-0" id="phone-number" placeholder="Your whatsApp" />
          <input type="email" name="email" className="w-[400px] mt-3 mx-auto p-2 rounded-md outline-0" id="email" placeholder="name@example.com" />
          <textarea name="message" className="w-[400px] mt-3 mx-auto p-2 rounded-md outline-0" id="message" placeholder="Let's work to gather"></textarea>
          <button className="mt-10 bg-black text-white px-3 py-1 w-[100px] mx-auto text-[20px] rounded font-semibold transition duration-500 hover:bg-white hover:text-black" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Me