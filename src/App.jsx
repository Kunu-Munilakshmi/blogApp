import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import Routing from './Navigation/Routing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routing/>
      <Footer/>
    </div>
  )
}
