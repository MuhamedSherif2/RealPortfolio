import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiVercelFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


function Footer() {
  const contact = [
    {
      id: 1,
      link: 'https://github.com/MuhamedSherif2',
      icon: <FaGithub />,
      name: 'GitHub'
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/mohamed-sherif-mm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <FaLinkedin />,
      name: 'LinkedIn'
    },
    {
      id: 3,
      link: 'https://wa.me/qr/R4XJZ2JK2M76K1',
      icon: <FaWhatsapp />,
      name: 'WhatsApp'
    },
    {
      id: 4,
      link: 'mailto:@muhamedsherif2612@gmail.com',
      icon: <MdEmail />,
      name: 'G-mail'
    },
    {
      id: 5,
      link: 'https://vercel.com/mohamed-sherifs-projects-147e3199',
      icon: <RiVercelFill />,
      name: 'Vercel'
    },
  ]
  return (
    <footer className='bg-black py-10'>
      <div className='container mx-auto'>
        <a href="#home" className='text-white flex flex-col items-center justify-center mb-5 w-[130px] h-[60px] mx-auto transition duration-500 rounded-md hover:bg-[#D7D7D7] hover:text-black'>
          <MdKeyboardDoubleArrowUp />
          Back To Top
        </a>

        <div className='flex items-center flex-col md:flex-row justify-center gap-4'>
          {
            contact.map((link) =>
              <div className='' key={link.id}>
                <Link to={link.link} target="_blank" className='text-white flex flex-col items-center justify-center w-[77px] h-[77px] p-2 rounded-full  hover:bg-[#D7D7D7] hover:text-black transition duration-500'>
                  <span className='text-[20px]'>{link.icon}</span>
                  <p>{link.name}</p>
                </Link>
              </div>
            )
          }
        </div>

        <div className='w-full h-[2px] bg-white my-4'></div>
        <div className='flex justify-center'>
          <h4 className='text-white text-[15px]'>© <span>MOHAMMED</span> 2024 \ Build With React-JS</h4>
        </div>
      </div>

    </footer>
  )
}

export default Footer