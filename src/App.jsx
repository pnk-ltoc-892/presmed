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

export default function App() {
  return (
      <div className='bg-slate-200'>
          <div className='mx-4 sm:mx-[10%] bg-white'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/doctors' element={<Doctors/>}/>
              <Route path='/doctors:speciality' element={<Doctors/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/my-profile' element={<MyProfile/>}/>
              <Route path='/appointments/:doctorid' element={<Appointment/>}/>
            </Routes>
          </div>
      </div>
  )
}


