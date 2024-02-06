import React from 'react'
import image1 from '../assets/images/image1.jpg'; 
import styles from './Product.module.css';

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.productimage}>
        <img src={image1} alt="Sample Image" height="150" />
      </div>
      <div className={styles.productdetail}>
        <h4>Blue T-Shirt</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.productprice}>
      ₹2000
      </div>
    </div>
  )
}

export default Product
