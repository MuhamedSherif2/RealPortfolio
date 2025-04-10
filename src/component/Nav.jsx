import React, { useState } from 'react'
import logo from '../assets/img/M-Letter-PNG-High-Quality-Image.png'
import { NavLink } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Nav() {
const [openNav, setOpenNav] = useState(false)
    const Links = [
        {
            id: 1, path: '/', page: 'Home'
        },
        {
            id: 2, path: '/project', page: 'Projects'
        },
        {
            id: 3, path: '/contact', page: 'Contact'
        },
    ]

    return (
        <header className='py-5 bg-black fixed w-full'>
            <div className='container mx-auto flex justify-between items-center'>
                <span className='bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                    <img src={logo} alt='logo-m' className='w-7 h-7' />
                </span>
                <ul className='hidden mdl:flex justify-between items-center gap-4'>
                    {
                        Links.map((link) =>
                            <li key={link.id}>
                                <NavLink to={link.path} className='text-[20px] font-bold text-white'>{link.page}</NavLink>
                            </li>
                        )
                    }
                </ul>
                <div className='flex mdl:hidden' onClick={() => setOpenNav(!openNav)}>
                    {
                        !openNav ?
                            <IoMenuSharp className='cursor-pointer text-[22px] text-white' />
                            :
                            <div className='fixed right-0 top-0 bg-[#000000] w-[300px] h-[100vh] transition-all duration-500'>
                                <IoClose className='cursor-pointer text-[27px] text-white mt-3 ml-3' />
                                <ul className='flex flex-col text-center my-10 gap-6 text-white'>
                                    {
                                        Links.map((link) =>
                                            <li key={link.id}>
                                                <NavLink to={link.path} className='text-[20px] font-bold text-white'>{link.page}</NavLink>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Nav

