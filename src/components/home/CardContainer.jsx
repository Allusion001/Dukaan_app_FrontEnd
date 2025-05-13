import React from 'react'
import HomeCard from './HomeCard'

function CardContainer({products}) {
  return (
    <section>
        <div className='container'>
            <div className='row'>
            <p className='text-center fw-bold lead h4 mb-5'>Our Products</p>
                {products.map((product)=><HomeCard product2={product} key={product.id}/>
                    
                )}
                
               
            </div>

        </div>
    </section>
  )
}

export default CardContainer