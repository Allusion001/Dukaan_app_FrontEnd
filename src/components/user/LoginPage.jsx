import React, { useState } from 'react'
import api from '../../api'
import Error from '../ui/Error'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


function LoginPage() {

  const {setIsAuthenticated,get_username}=useContext(AuthContext)

  const location=useLocation()
  const navigate=useNavigate()

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const[loading,setLoading]=useState(false)
  const[error,setError]=useState("")

  const userInfo={username,password}

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    api.post("token/",userInfo)
    .then(res=>{
        console.log(res.data)
        localStorage.setItem("access",res.data.access)
        localStorage.setItem("refresh",res.data.refresh)
        setPassword("")
        setUsername("")
        setLoading(false)
        setError("")
        get_username()
        setIsAuthenticated(true)
       
        const from = location.state?.from?.pathname || "/";
        console.log("Navigating to:", from);
        navigate(from, { replace: true });
    })
    .catch(error=>{
        console.log(error.message)
        setLoading(false)
        setError(error.message)
    })
  }

  return (
    <div>
        
        <section className="vh-50 gradient-custom">
        <div className="container py-5 h-50">
            <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow" style={{borderRadius: "1rem"}}>
                <div className="card-body px-5 text-center">

                    <div className="mb-md-5 mt-md-4 pb-5">
                    {error && <Error error={error}/>}
                    <h2 className="fw-bold mb-2 text-uppercase">Welcome Back</h2>
                    <p className=" mb-5">Please enter your login and password!</p>
                    <form onSubmit={handleSubmit}>
                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="email" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="form-control form-control-lg" />
                            
                        </div>


                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg px-5" disabled={loading} style={{backgroundColor:"#rgb(96, 80, 220)"}} type="submit">Login</button>

                    </form>
                    </div>

                    <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-decoration-none fw-bold">Sign Up</a>
                    </p>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    
    </div>
  )
}

export default LoginPage