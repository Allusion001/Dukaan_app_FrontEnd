import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardContainer from "./CardContainer"
import api from '../../api';
import CardExample from '../ui/PlaceHolder';
import PlaceHolderContainer from '../ui/PlaceHolderContainer';
import Error from '../ui/Error';
import { randomValue } from '../../GenerateCartCode';




function HomePage() {



  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")

  useEffect(()=>{
    getProducts()
  },
  []);

  useEffect(()=>{
    if(localStorage.getItem('cart_code')===null){
      localStorage.setItem('cart_code',randomValue)
    }

  },[])

  const getProducts=()=>{
      api.get('/products')
      .then(res=>{
        console.log(res.data);
        setProducts(res.data)
        setLoading(false)
      })

      .catch(err=>{
        console.log(err)
        setError(err)
        setLoading(false)
      })
  }

  return (
    <>
        <Header/>
        {error && <Error error={error}/>}
        {loading && <PlaceHolderContainer/>}
        {loading || error!="" || <CardContainer products={products}/>}
        
    </>
  )
}

export default HomePage