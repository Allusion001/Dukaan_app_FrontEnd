import React from 'react'
import HomeCard from '../home/HomeCard'
import { useParams } from 'react-router-dom'

function RelatedProducts({similarProducts}) {
  return (
    
    <section>
        <h3 className='text-center py-3'>Related Products</h3>
        <div className='container'>
            <div className='row row-cols-xl-4 row-cols-lg-4 row-cols-sm-3 justify-content-center'>
                    {console.log(similarProducts,"checking")}
                    {similarProducts.map(similarProduct=>(
                        <HomeCard product2={similarProduct}/>
                    
                    ))}
         
                
 
               
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts