import React from 'react'

function ProductPlaceHolder() {
  return (
    <section className='py-5'>
    <div className="container">
        <div className="row gx-5">
            <div className='col-md-6 '>
                <img
                    className='card-img-top '
                    src='https://dummyimage.com/600x400/b0b0b0/000000.jpg'
                    alt="..."
                />
            </div>
            <div className='col-md-6 align-content-center placeholder-glow'>
                <span className='placeholder col-4 '></span>
                <span className='placeholder col-12'></span>
                <span className='placeholder col-4'></span>
                <div className='lead'>
                  <span className='placeholder col-12'></span>
                  <span className='placeholder col-12'></span>
                  <span className='placeholder col-12'></span>
                </div>
                
                      </div>

        </div>
    </div>
</section>
  )
}

export default ProductPlaceHolder;