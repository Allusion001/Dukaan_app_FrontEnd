import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavbarTab.module.css"
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


function NavbarTab({numCartItems}) {

  function logout(){
      localStorage.removeItem("access")
      setIsAuthenticated(false)
  }


  const {isAuthenticated,setIsAuthenticated,username}=useContext(AuthContext)

  return (
    <nav className={`navbar navbar-right navbar-expand-lg navbar-light bg-white shadow-sm px-5 py-3 ${styles.stickyNavbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-uppercase" href="/">DUKAAN</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
         
      </div>
      <div className="collapse navbar-collapse px-3 " id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {isAuthenticated?(<> <li className='nav-item'> 
              <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold" : "nav-link fw-semibold"} end to="/profile" aria-current="page" >{username} </NavLink>
            </li>

             <li className='nav-item' onClick={logout}> 
            <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold" : "nav-link fw-semibold"} end to="/" aria-current="page" >Logout </NavLink>
            </li>

            </>):(<><li className='nav-item'> 
              <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold" : "nav-link fw-semibold"} end to="/login" aria-current="page">Login </NavLink>
            </li>
          
          <li className='nav-item'> 
          <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold" : "nav-link fw-semibold"} end to="/contact" aria-current="page" >Contact </NavLink>
        </li></>)}
            

           
            

           
           
            
            
          </ul>
          <Link to="/cart" className='border position-relative ms-3 btn-sm btn btn-dark rounded-pill ' >
            <FontAwesomeIcon  style={{background:"black" , color:"white",padding:'6px',borderRadius:'60px',height:'1em'}} icon={faCartShopping} />
          
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill ' style={{backgroundColor:'#605099',padding:'0.5em 0.65em'}}>{numCartItems}</span>
          </Link>
        </div>
    </nav>
  )
}

export default NavbarTab