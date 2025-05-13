import React, { useEffect, useState } from 'react'
import ProductPlaceHolder from './ProductPlaceHolder'
import RelatedProducts from './relatedProducts'
import { useParams } from 'react-router-dom'
import api from '../../api'
import { baseURL } from '../../api'
import { toast } from 'react-toastify'


function ProductPage() {
  const [product,setProduct]=useState({})
  const [similarProducts,setSimilarProducts]=useState([])
  const {slug}=useParams()
  const [loading,setLoading]=useState(true)
  const [inCart,setInCart]=useState(false)


  const cart_code=localStorage.getItem('cart_code')

  const newItem={cart_code:cart_code,product_id:product.id}

  useEffect(()=>{
      if(product.id){
        api.get(`product_in_cart?product_id=${product.id}&cart_code=${cart_code}`)
        .then((res)=>{
          setInCart(res.data.product_in_cart)
        })
      }
  },[cart_code,product.id])

  const addItem=()=>{
    api.post("add_item/",newItem).
    then(res=>setInCart(true))
    toast.success("Product Added to Cart")
  }

  useEffect(()=>{
    getProducts()
  },[slug])

  const getProducts=async ()=>{
        console.log(product,"checking product axios")
        await api.get(`product_detail/${slug}`)
        .then(res=>{console.log(res.data,"gsgsgsg")
         setProduct(res.data)
         setSimilarProducts(res.data.similar_products)
         setLoading(false)})
  }

  if(loading){
    return <ProductPlaceHolder/>
  }

  return (
    <div>

        <section className='py-5'>
            <div className="container">
                <div className="row gx-5">
                    <div className='col-md-6'>
                        <img
                            className='card-img-top'
                            src={`${baseURL}${product.image}`}
                            alt="..."
                        />
                    </div>
                    <div className='col-md-6 align-content-center '>
                        <div className='small mb-1 '>SKU-123456</div>
                        <h1>Shop Item Template</h1>
                        <div className='mb-5'>
                            <span className='text-decoration-line-through'>$45.00</span>
                            <span> $40.00</span>
                        </div>
                        <p className='lead'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?
                        </p>
                        <button className='btn btn-outline-dark' disabled={inCart} onClick={addItem}>{inCart?"Product Added to Cart":"Add to Cart"}</button>

                    </div>

                </div>
            </div>
        </section>

        <RelatedProducts similarProducts={similarProducts}/>
    </div>
  )
}

export default ProductPage