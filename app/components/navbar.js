import React from 'react';
import Image from 'next/image'
import styles from '../../styles/navbar.module.scss'
import logo from '../../public/assets/logoalt.svg'
import star from '../../public/assets/star.svg'
import staralt from '../../public/assets/staralt.svg'
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
           <div className={styles.navbarWrapper}>
            <div className={styles.navbarLogoWrapper}>
                <div className={styles.navbarLogo}>
                <Image src={logo}
                 width={24.5}
                 height={24.5}
                 alt="logo"/>
                </div>
                <p className={styles.navbarLogoText}>
                    truka.
                </p>

            </div>
            <div className={styles.navbarContentWrapper}>
                <p className={styles.navbarContent}>
                    Members Club
                </p>
                <p className={styles.navbarContent}>
                    Community
                </p>
            </div>
            <div className={styles.navbarButtonContainer}>
                <div className={styles.signinButton}>
                    <div style={{paddingTop:"2px"}}>
                        <Image src={staralt} alt="star" 
                        width={16.5} height={16.5} style={{transform:"translateY(1px)"}}/>
                    </div>
                    Get Connected
                </div>
                <div className={styles.loginButton}>
                    Login
                </div>
            </div>
           </div>
        </div>
    );
}

export default Navbar;
