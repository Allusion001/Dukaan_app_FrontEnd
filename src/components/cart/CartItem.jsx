import React, { useState } from 'react'
import api, { baseURL } from '../../api';

function CartItem({item,setCartTotal,cartItems,setNumCartItems,setCartItems}) {

  const [quantity,setQuantity]=useState(item.quantity)
  const [loading,setLoading]=useState(false)

  let itemData={quantity:quantity,item_id:item.id}
  let itemID={item_id:item.id}
  const cart_code=localStorage.getItem('cart_code')

  function deleteCartItem(){
    const confirmDelete=window.confirm("Are you want to delete this product from cart?")

    if(confirmDelete){
        api.post("delete_cartitem/",itemID)
        .then(res=>{
            console.log(res.data)
            setCartItems(cartItems.filter(cartItem=>cartItem.id!=item.id))
            api.get(`get_cart?cart_code=${cart_code}`)
            .then((res)=>{
                 setCartTotal(res.data.items.map(item=>item).reduce((acc,curr)=>acc+curr.total,0))
            })
         
            
        })

        .catch(err=>{
            console.log(err.message)
        })
    }
  }



  const updateQuantity=async (e)=>{
    setLoading(true)
    itemData={quantity:e.target.value,item_id:item.id}
  
    setQuantity(e.target.value)
    await api.patch("update_quantity/",itemData)
    .then((res)=>{
        setLoading(true)
        setCartTotal(cartItems.map((cartItem)=>cartItem.id===item.id?res.data.data:cartItem).reduce((acc,curr)=>acc+curr.total,0))
        setNumCartItems(cartItems.map((cartItem)=>cartItem.id===item.id?res.data.data:cartItem).reduce((acc,curr)=>acc+curr.quantity,0))
        
        }
    )
    
    .catch((err)=>console.log(err.message))

    
    
    
  }

  return (
    <div className="container  ">
    <div className="row">
        <div className="col-md-12">

  
            <div className="cart-item d-flex align-items-center mb-3 p-3" style={{backgroundColor:'#f8f9fa',borderRadius:'8px'}}>
                
                <img src={`${baseURL}${item.product.image}`} alt="Product 1" className="img-fluid rounded" 
                style={{width:'80px',height:'80px',objectFit:'cover'}}/>
                
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.product.name}</h5>
                    <p className="text-muted">${item.product.price}</p>
                </div>
                <div className="d-flex align-items-center">
                    <div className="input-group mx-2">
                       
                
                        <input type="number" className='form-control me-3' min={1} style={{width:'70px'}}
                        value={quantity} onChange={(e)=>{updateQuantity(e)}}/>
                        
                    </div>

                        
                    <button className='btn btn-danger btn-sm mx-2' onClick={deleteCartItem}>
                        delete
                    </button>
                    </div>
            </div>
            
           
       

        
        </div>
       
    </div>
</div>
  )
}

export default CartItem;