import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import api from '../../api'
import Spinner from '../ui/Spinner'
import useCartData from '../../hooks/useCartData'

function CartPage({numCartItems,setNumCartItems}) {

  const {cartItems,setCartItems,cartTotal,setCartTotal,loading,tax}  = useCartData()

  
  if(loading){
    return <Spinner/>
  }
  

  if(cartItems.length<1){
    return(
      <div className='alert alert-primary' role='alert'>
        You havnt added any items yet
      </div>
    )
  }

 
  return (
    <div className='container' style={{height:'100vh'}}>
         <h5 className="my-3">Your Shopping Cart</h5>
        <div className='row'>
            <div className='col-md-8' style={{overflow: 'scroll',height:'90vh'}}>
                {console.log(cartItems)}
                {cartItems!=null?
                  cartItems.map((cartItem)=>(
                  <CartItem item={cartItem} setCartTotal={setCartTotal} cartItems={cartItems}  setCartItems={setCartItems} setNumCartItems={setNumCartItems}/>))
                :
                ""
                }

                
            
            </div>
            <div  className='col-md-4'>
                <CartSummary cartTotal={cartTotal} tax={tax} cartItem={cartItems} setNumCartItems={setNumCartItems}/>
            </div>
        </div>
    </div>
  )
}

export default CartPage