import React from 'react'
import { Link } from 'react-router-dom';
import myImg from '../../assets/img/IMG-20240908-WA0092.png'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiVercelFill } from 'react-icons/ri';

function Landing() {
    const contacts = [
        {
            id: 1,
            link: 'https://www.linkedin.com/in/muhamed-mern',
            icon: <FaLinkedin className='rounded w-[30px] h-[30px]' />,
        },
        {
            id: 2,
            link: 'https://github.com/MuhamedSherif2',
            icon: <FaGithubSquare className='rounded w-[30px] h-[30px]' />,
        },
        {
            id: 3,
            link: 'https://vercel.com/mohamed-sherifs-projects-147e3199',
            icon: <RiVercelFill className='rounded w-[30px] h-[30px]' />,
        },
    ]
    return (
        <section className='h-4/5 mdl:h-auto w-full pt-10 bg-[#D7D7D7]' id='home'>
            <div className='container mx-auto flex flex-col mdl:flex-row justify-between items-center '>
                <div>
                    <h4 className='text-black text-[20px] mdl:text-[30px] font-semibold'>Hi, I am</h4>
                    <h1 className='text-[#000000] mt-4 font-bold text-[30px] mdl:text-[50px]'>Mohamed Sherif</h1>
                    <h4 className='text-[#757575bf] text-[18px] mdl:text-[25px] font-extrabold'>MERN Stack Developer</h4>
                    <div className='mt-8 flex gap-4'>
                        {
                            contacts.map((item) =>
                                <Link to={item.link} key={item.id} target='page.com' className='text-white bg-gray-900 p-3 rounded'>
                                    <span>{item.icon}</span>
                                    <p>{item.name}</p>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img src={myImg} alt='My-IMG' className='h-3/6' />
                </div>
            </div>
        </section>
    )
}

export default Landing
