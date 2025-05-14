import React, { useEffect, useState } from 'react'
import api from '../../api'

function UserData() {


  const [userInfo,setUserInfo]=useState(null)

  useEffect(()=>{
    api.get("user_info")
    .then(res=>{
        setUserInfo(res.data)
        console.log(res.data,"cscs")
    })
    .catch(err=>{
        console.log(err.message)
    })
  },[])


  return (
    <>
        <div className='container '>
            <div className="row vh-100">
                <div className='col-md-3 ' style={{marginTop:'30px'}}>
                    <div className='card ' style={{height:'300px'}}>
                        <div className='h-50 text-center py-3  '>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-circle h-75"  >
                            </img>

                            <h2 className='lead py-3'>{userInfo?userInfo.username:"John Doe"}</h2>

                            <span>{userInfo?userInfo.email:"John Doe"}</span>

                         
                        </div>
                    </div>
                </div>
                <div className='col-md-9 border ' style={{marginTop:'30px',height:"250px"}}>
                    <div className='d-flex align-items-center justify-content-center text-white fw-bold ' style={{height:"60px",width:"100%",backgroundColor:"rgb(96, 80, 220)"}}><p  >Account Overview</p></div>
                    <div className='container my-4'>
                        <div className='row '>
                            <div className='col-md-6'>
                                <p className='col'>FullName : {userInfo?userInfo.firstName + userInfo.lastName:"John Doe"}</p>
                                <p className='col'>Email : {userInfo?userInfo.email:"John Doe"}</p>
                                <p className='col'>Phone : {userInfo?userInfo.phone:"John Doe"}</p>
                            </div>
                            <div className='col-md-6'>
                                <p className='col'>City : {userInfo?userInfo.city:"John Doe"}</p>
                                <p className='col'>UserName : {userInfo?userInfo.userName:"John Doe"}</p>
                              
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default UserData