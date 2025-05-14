import React, { useState } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'


function RegisterPage() {

    const navigate = useNavigate();

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const [phone,setPhone]=useState("")

    // const userInfo={username,password,firstName,lastName,email,city,country,phone}
    const userInfo={username:username,password:password,firstName:firstName,lastName:lastName,email:email,city:city,country:country,phone:phone}
    

    const handleSubmit=(e)=>{
        
        e.preventDefault()
        api.post("register/",userInfo)
        .then(res=>{
            console.log(res.data)
            setUsername("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setCity("")
            setCountry("")
            setPhone("")

            navigate('/login');

       
      
        })
        .catch(error=>{
            console.log(error.message)
        
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
                    {/* {error && <Error error={error}/>} */}
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Username' value={username} required onChange={(e)=>setUsername(e.target.value)} type="text" id="username" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Password' value={password} required onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="form-control form-control-lg" />
                            
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" id="firstName" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" id="lastName" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Email' value={email} required onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} type="text" id="city" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='country' value={country} onChange={(e)=>setCountry(e.target.value)} type="text" id="country" className="form-control form-control-lg" />
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" id="phone" className="form-control form-control-lg" />
                        </div>


                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-lg px-5"  style={{backgroundColor:"#rgb(96, 80, 220)"}} type="submit">Register</button>

                    </form>
                    </div>

                    <div>
             
                   
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

export default RegisterPage