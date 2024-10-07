import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'

function Home() {
    return (
        <>
            <div className='border-b-[1px] border-black '>
                <Header />
            </div>
            <div className='border-b-[1px] border-black '>
                <SpecialityMenu />
            </div>
        </>
    )
}

export default Home