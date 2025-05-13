import { useState,useEffect } from "react"
import api from "../api"



function useCartData(){
 
  const [cartItems,setCartItems]=useState("")
  const [cartTotal,setCartTotal]=useState(0)
  const tax=4.00
  const [loading,setLoading]=useState(false)

  const cart_code=localStorage.getItem('cart_code')

  useEffect(()=>{
    console.log(loading,"load")
    setLoading(true)
    api.get(`get_cart?cart_code=${cart_code}`)
    .then((res)=>{
      setLoading(false)
      setCartItems(res.data.items);
      setCartTotal(res.data.items.map(item=>item).reduce((acc,curr)=>acc+curr.total,0))
    })
    .catch((err)=>{
      console.log(err.message)
      setLoading(false)
    })
  },[cart_code])

return {cartItems,setCartItems,cartTotal,setCartTotal,loading,tax}  

}

export default useCartData;