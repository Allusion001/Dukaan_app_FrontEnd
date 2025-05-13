import React from 'react'

function Header() {
  return (
    <header className='py-5 mb-5' style={{backgroundColor: 'rgb(96, 80, 220)'}}>
        <div className='container px-4 px-lg-5 my-5' style={{ color:'white'}}>
          <div className='text-center '>
            <h1 className='display-4 fw-bold'>Welcome to Your Favorite Store</h1>
            <p className='lead fw-normal text-white-75'>Discover the latest trends with our modern collection</p>
            <button type="button" href="#" className="btn btn-light btn-lg rounded-pill px-4 py-2">Shop Now</button>
          </div>
        </div>
    </header>
  )
}

export default Header