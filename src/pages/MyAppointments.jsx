import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext.jsx'

function MyAppointments() {
    const { doctors } = useContext(AppContext)
    return (
        <div>
            <p className='p-3 mt-12 font-medium text-zinc-700 border-b text-2xl' >My appointments</p>
            <div>
                {
                    doctors.slice(0,3).map( (item, index) => (
                        <div key={index} 
                            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-10 py-2 border-b cursor-pointer'
                            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0);}}
                        >
                            <div>
                                <img src={item.image} alt="Doctor Image" 
                                    className='w-32 bg-indigo-50 hover:bg-indigo-100'
                                />
                            </div>
                            <div className='flex-1 text-sm text-zinc-600' > 
                                <p className=' font-semibold' >{item.name}</p>
                                <p>{item.speciality}</p>
                                <p className='text-zinc-700 font-medium mt-1'>Address: </p>
                                <p className='text-xs'>{item.address.line1}</p>
                                <p className='text-xs'>{item.address.line2}</p>
                                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time: </span>25, July, 2024 | 8:30 PM</p>
                            </div>
                            <div></div>
                            <div className='flex flex-col gap-2 justify-end'>
                                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-200'>Pay Online</button>
                                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-200'>Cancel Appointment</button>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default MyAppointments