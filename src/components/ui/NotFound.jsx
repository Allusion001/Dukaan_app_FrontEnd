import React from 'react'
import styles from "./NotFound.module.css" 

function NotFound() {
  return (
    <header className={`container-fluid py-4 my-4 h-400 ${styles.col}`}>
        <div className=' px-4 px-lg-5 my-5 ' style={{ color:'white'}}>
          <div className='text-center h-500 '>
            <h1 className='display-4 fw-bold'>Page Not Found!</h1>
            <p className='lead fw-normal text-white-75'>The page you tried accessing does not exist.</p>
            <button type="button" href="#" className="btn btn-light btn-lg rounded-pill px-4 py-2">Back Home</button>
          </div>
        </div>
    </header>
  )
}

export default NotFound