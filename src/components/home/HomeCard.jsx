import React from 'react';
import styles from "./HomeCard.module.css" 
import { Link } from 'react-router-dom';
import { baseURL } from '../../api';

function HomeCard({product2}) {
  return (
    <div className={`col-md-3 ${styles.col}`}>
        <Link to={`/product_detail/${product2.slug}`} className='text-decoration-none'>
            <div className={styles.card}>
                <div className={styles.cardImgWrapper}>
                    <img
                        src={`${baseURL}${product2.image}`}
                        className={styles.cardImgTop}
                    />
                    
                </div>
                <div className={styles.cardBody}>
                    {console.log(product2,"from homecard")}
                    <h5 className={`${styles.cardTitle} mb-1`}>{product2.name}</h5>
                    <h6 className={styles.cardText}>{product2.price}</h6>

                </div>

            </div>
        </Link>

    </div>
  )
}

export default HomeCard