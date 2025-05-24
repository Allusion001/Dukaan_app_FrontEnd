import React from 'react'
import styles from "./PaymentSection.module.css"
import api from '../../api';




function PaymentSection() {

  function paypalHandler(){

    const cart_code=localStorage.getItem('cart_code')


     api.post("create_payment/", {cart_code})
    .then(data => {
    console.log('Response from backend:');
    if (data.data.approval_url) {
        window.location.href = data.data.approval_url; // Redirect user to PayPal
    } else {
        console.error('No approval URL found');
    }
    })
    .catch(error => console.error('Error creating payment:', error));
     
  }


  return (
    <div className='col-md-4'>
        <div className={`card ${styles.card}`}>
            <div className='card-header' style={{backgroundColor:'#6050DC',color:'white'}}>
                <h5>Payment Option</h5>
            </div>
            <div className='card-body'>
                <button className={`btn btn-primary w-100 mb-3  ${styles.paypalButton}`} onClick={paypalHandler} id="paypal-button">
                    <i className='bi bi-paypal'></i>Pay With Paypal
                </button>

                {/* <button className={`btn btn-primary w-100 mb-3 ${styles.flutterwaveButton}`} id="flutterwave-button">
                    <i className='bi bi-credit-card'></i>Pay with Flutterwave
                </button> */}


            </div>
        </div>
        
    </div>
  )
}

export default PaymentSection;
