import React from 'react'
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.header}>
            <img src='./images/logo.png' alt="Logo" className={styles.image}/>
        </div>
    )
}

export default Header;