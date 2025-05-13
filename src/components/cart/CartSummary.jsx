import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

function CartSummary({cartTotal,tax,CartItem,numCartItems}) {

  const subTotal=cartTotal
  const cartTax=tax
  const total=(subTotal+cartTax).toFixed(2)
  console.log(cartTotal,"checking")

  useEffect(()=>{

  },[cartTotal,numCartItems])

  return (
         <div className="card cart-summary">
                <div className="card-body">
                    <h5 className="card-title mb-4">Order Summary</h5>
                    <div className="d-flex justify-content-between ">
                        <span>Subtotal</span>
                        <span>${subTotal}</span>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <span>Tax</span>
                        <span>${cartTax}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-3">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>
                    <Link to="/checkout">
                      <button className="btn btn-primary w-100" style={{backgroundColor:"#6050DC"}}>Proceed to Checkout</button>
                    </Link>
                </div>
            </div>

  )
}

export default CartSummary