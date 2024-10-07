import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className='bg-slate-100 flex items-center justify-between text-sm py-4 px-1 border-b border-b-gray-400'>
            <Link to='/'>
                <img src={assets.logo} alt="Logo"
                className='w-28 cursor-pointer'
                />
            </Link>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='about'>
                    <li className='py-1'>About Us</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact Us</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token && <div className='flex items-center gap-3 cursor-pointer group relative'>
                                    {/* group relative - Help to create drop-down */}
                        <img src={assets.profile_pic} alt="Profile" 
                        className='w-8 rounded-full'
                        />
                        <img src={assets.dropdown_icon} alt="Profile" 
                        className='w-2.5'
                        />

                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-3'>
                                <p onClick={() => navigate('/my-profile')}
                                    className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/my-appointments')}
                                    className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={() => setToken(false)}
                                    className='hover:text-black cursor-pointer'>LogOut</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    !token && <button className='bg-primary text-white px-5 py-1 rounded-full font-light hidden md:block'
                    onClick={() => navigate('/login')}>
                    Create Account
                </button>
                }   
            </div>
        </div>
    )
}

export default Navbar