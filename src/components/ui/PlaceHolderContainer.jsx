import React from 'react'
import CardExample from './PlaceHolder'

function PlaceHolderContainer() {

  const placeNumbers= [...Array(12).keys()].slice(0)

  return (

    <section>
        <div className='container '>
            <div className='row'>
                <p className='text-center fw-bold lead h4 mb-5'>Our Products</p>
                {placeNumbers.map((product)=><CardExample key={product}/>
                    
                )}
                
               
            </div>

        </div>
    </section>
  )
}

export default PlaceHolderContainer