import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
                <span className={styles.content}>
                    <i class="fas fa-tty"></i>
                    Toll free 1800 200 1234
                </span>
                <span className={styles.content}>
                <i class="fab fa-facebook-f"></i>
                    www.facebook.com/cripumps
                </span>
                <span className={styles.content}>
                    <img src="./images/www.png" alt="www" className={styles.www}/>
                    www.crigroups.com
                </span>

        </div>
    )
}

export default Footer
