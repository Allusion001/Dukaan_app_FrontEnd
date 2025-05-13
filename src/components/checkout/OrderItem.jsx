import React from 'react'
import api, { baseURL } from '../../api'

function OrderItem({cartItem}) {
  return (
    <div className='d-flex justify-content-between  align-items-center mb-3' >
        <div className='d-flex align-items-center ' style={{width:'800px'}}>
            <img src={`${baseURL}${cartItem.product.image}`} alt="product" className='img-fluid ' style={{width:'60px',height:'60px',objectFit:'cover',borderRadius:'5px'}}/>
            <div className='ms-3'>
                <h6 className='mb-0'>
                    {cartItem.product.name}
                </h6>
                <small>Quantity : {cartItem.quantity}</small>
            </div>
            
        </div>
        <h6>${cartItem.total.toFixed(2)}</h6>
    </div>
  )
}

export default OrderItem