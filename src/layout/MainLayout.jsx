import React from 'react'
import Footer from '../components/ui/Footer'
import Header from '../components/home/Header'
import { Outlet } from 'react-router-dom'
import NavbarTab from '../components/ui/NavbarTab'
import { ToastContainer } from 'react-toastify';

function MainLayout({numCartItems}) {
  return (
    <div >
        <NavbarTab numCartItems={numCartItems}/>
        <ToastContainer />
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default MainLayout