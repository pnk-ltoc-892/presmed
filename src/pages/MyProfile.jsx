import React, { useState } from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

    const [userData, setUserData] = useState({
        name: "Pankaj Singh",
        image: assets.profile_pic,
        email: 'pnk123@gmail.com',
        phone: '+1 234 4567 890',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Golf Course Road, Gurugram'
        },
        gender: 'Male',
        dob: '2004-09-08'
    })

    const [isEdit, setIsEdit] = useState(false)


    return (
        <div className='m-12 max-w-lg flex flex-col gap-4 text-sm'>
            <div className='flex gap-5'>
                <img src={userData.image} alt="" className='w-36 rounded ml-4'/>
                <input type="file" className='flex items-center'/>
            </div>
            <div>
                <div>
                    <input 
                            type="text" 
                            className={`text-gray-900 text-2xl font-medium px-4 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                            disabled={!isEdit} // ! Important Property
                            value={userData.name} 
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            />
                </div>
                <hr className='bg-zinc-400 h-[1px] border-none m-1' />
                <div>
                    <p className='text-neutral-500 underline mt-3 pl-2'>CONTACT INFORMATION</p>
                    
                    <div className='pt-2'>
                        <label className="w-1/4 inline-block m-2 text-lg font-medium text-gray-900">Email:</label>
                        <input  type="text" 
                                className={`text-primary text-lg px-4 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                                disabled={!isEdit}
                                value={userData.email} 
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                />      
                    </div>
                    <div className='pt-2'>
                        <label className="w-1/4 inline-block m-2 text-lg font-medium text-gray-900 ">Phone:</label>
                        <input  type="text" 
                                className={`text-primary text-lg px-4 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                                disabled={!isEdit}
                                value={userData.phone} 
                                onChange={(e) => setUserData({...userData, phone: e.target.value})}
                                />      
                    </div>
                    <div className='flex pt-2'>
                        <label className="w-1/4 inline-block m-2 text-lg font-medium text-gray-900 ">Address:</label>
                        <div className='flex flex-col'>
                        <input  type="text" 
                                className={`text-gray-700 text-lg px-4 py-1 mt-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                                disabled={!isEdit}
                                value={userData.address.line1} 
                                onChange={(e) => setUserData({...userData, address: {...userData.address, line1: e.target.value}})}
                                />      
                        <input  type="text" 
                                className={`text-gray-700 text-lg px-4 mt-1 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                                disabled={!isEdit}
                                value={userData.address.line2} 
                                onChange={(e) => setUserData({...userData, address: {...userData.address, line2: e.target.value}})}
                                />  
                        </div>    
                    </div>

                    <p className='text-neutral-500 underline mt-3 pl-2'>BASIC INFORMATION</p>
                    <div  className='pt-2'>
                        <label className="w-1/4 inline-block m-2 text-lg font-medium text-gray-900 ">Gender: </label>
                        <select 
                            className={`text-gray-700 text-lg px-4 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`}
                            onChange={(e) => {setUserData({...userData, gender: e.target.value});console.log(e.target.value);
                            }}
                            value={userData.gender}
                            disabled={!isEdit}
                            >
                            <option value="Male" className='text-gray-700 text-lg'>Male</option>
                            <option value="Female" className='text-gray-700 text-lg'>Female</option>
                        </select>
                    </div>
                    <div  className='pt-2'>
                        <label className="w-1/4 inline-block m-2 text-lg font-medium text-gray-900 ">D.O.B: </label>
                        <input  type="date" 
                                className={`text-gray-700 text-lg px-4 py-1 ${isEdit === true ? 'bg-gray-100 border border-gray-400 rounded-lg' : ''}`} 
                                disabled={!isEdit} 
                                value={userData.dob} 
                                onChange={(e) => {setUserData({...userData, dob: e.target.value}); console.log(e.target.value);
                                }}
                                />      
                    </div>
                    
                    <div className='flex gap-4 mx-4 my-6'>
                        <button onClick={() => setIsEdit(prev => !prev)} className='border border-primary rounded-3xl px-6 py-2 hover:bg-primary hover:text-white transition-all duration-300'>{isEdit ? 'Save Information' : 'Edit'}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyProfile