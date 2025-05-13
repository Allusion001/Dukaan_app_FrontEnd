import React from 'react'
import styles from "./Footer.module.css"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";




function Footer() {
  return (
    <footer className={`py-3 ${styles.footer} text-center footer`}>
        <div className='container mb-2 '>
            <a className='px-2 text-white text-decoration-none'>Home</a>
            <a className='px-2 text-white text-decoration-none'>About</a>
            <a className='px-2 text-white text-decoration-none'>Shop</a>
            <a className='px-2 text-white text-decoration-none'>Contact</a>

        </div>

        <div className='text-black align-center mb-2 '>
          <a className='px-2 text-white'><FaFacebook /></a>
          <a className='px-2 text-white'><FaTwitter /></a>
          <a className='px-2 text-white'><FaInstagram /></a>

        </div>
        <p className='small mx-2 text-white'>© 2024 Shoppit</p>
    </footer>
  )
}

export default Footer