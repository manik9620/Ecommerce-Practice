import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
        <nav  className={styles.navbar} >   
            <Link to="/"><h2>Logo</h2></Link>
            <ul>
                <Link to="/cart"><li>Cart</li></Link>
            </ul>
        </nav>
    </>
  )
}

export default navbar
