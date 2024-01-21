import React from 'react';
import Image from 'next/image'
import styles from '../../styles/navbar.module.scss'
import logo from '../../public/assets/logoalt.svg'
import star from '../../public/assets/star.svg'
import Link from 'next/link'
import staralt from '../../public/assets/staralt.svg'
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
           <div className={styles.navbarWrapper}>
            <Link className={styles.navbarLogoWrapper} href="/">
                <div className={styles.navbarLogo}>
                <Image src={logo}
                 width={24.5}
                 height={24.5}
                 alt="logo"/>
                </div>
                <p className={styles.navbarLogoText}>
                    truka.
                </p>

            </Link>
            <div className={styles.navbarContentWrapper}>
                <Link className={styles.navbarContent} href="/blackprint">
                    Members Club
                </Link>
                <Link className={styles.navbarContent} href='/blackprint'>
                    Community
                </Link>
            </div>
            <div className={styles.navbarButtonContainer}>
                <span className={styles.signinButton}>
                    <div style={{paddingTop:"2px"}}>
                        <Image src={staralt} alt="star" 
                        className={styles.connectStar}
                        width={16.5} height={16.5} style={{transform:"translateY(1px)"}}/>
                    </div>
                    Get Connected
                </span>
                <span className={styles.loginButton}>
                    Login
                </span>
            </div>
           </div>
        </div>
    );
}

export default Navbar;
