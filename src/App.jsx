import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

export default function App() {
  return (
      <div className='bg-slate-900'>
          <div className='mx-4 sm:mx-[10%] bg-white'>
            <Navbar />
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/doctors/:speciality' element={<Doctors/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/my-profile' element={<MyProfile/>}/>
                <Route path='/appointment/:doctorid' element={<Appointment/>}/>
              </Routes>
            <Footer />
          </div>
      </div>
  )
}
