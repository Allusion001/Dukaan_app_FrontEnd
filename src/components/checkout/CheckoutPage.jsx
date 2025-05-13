import React from 'react'
import OrderSummary from './OrderSummary'
import OrderItem from './OrderItem'
import PaymentSection from './PaymentSection'
import useCartData from '../../hooks/useCartData'

function CheckoutPage() {

  const {cartItems,setCartItems,cartTotal,setCartTotal,loading,tax}  = useCartData()

  return (
    <div className='container my-3'>
        <div className='row'>
            {cartItems? <OrderSummary cartItems={cartItems} cartTotal={cartTotal} tax={tax}/>:""}
            <PaymentSection/>
           
        </div>
    </div>
  )
}

export default CheckoutPage