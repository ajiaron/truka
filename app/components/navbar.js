'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import styles from '../../styles/navbar.module.scss'
import logo from '../../public/assets/logoalt.svg'
import icon from '../../public/assets/logoTransparent.svg'
import star from '../../public/assets/star.svg'
import Link from 'next/link'
import staralt from '../../public/assets/staralt.svg'
import {usePathname} from 'next/navigation'; 
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'

const Navbar = () => {
    const pathname = usePathname();

    const [isHovered, setIsHovered] = useState(0);
    const handleMouseEnter = (e) => {
        setIsHovered(e);
    };
    const handleMouseLeave = () => {
        setIsHovered(0);
    };
    return (
        <div className={styles.navbarContainer}>
           <div className={styles.navbarWrapper}>
            <Link className={styles.navbarLogoWrapper} href="/">
                <div className={styles.navbarLogo}>
                <Image src={(pathname==="/")?icon:icon}
                 width={24.5}
                 height={24.5}
                 alt="logo"/>
                </div>
                <p className={styles.navbarLogoText}>
                    truka.
                </p>

            </Link>
            <div className={styles.navbarContentWrapper}>
                <Link href="/members" className={styles.navbarContentLink}
                onMouseEnter={()=>handleMouseEnter(1)} 
                onMouseLeave={()=>handleMouseLeave()}> 
                    <span className={styles.navbarContent}>
                        Members Club
                    </span>
                    <motion.div className={styles.navbarContentHighlight}
                        initial={{width:0}}
                        animate={{width:(isHovered===1)?"auto":0}}
                        transition={{
                            type:"spring",
                            stiffness:160,
                            damping:30
                        }}
                        exit={{width:0,
                        transition:{
                            type:"spring",
                            stiffness:160,
                            damping:30
                        }}}
                    />
                </Link>
 
                <Link href="/mansion" className={styles.navbarContentLink}
                    onMouseEnter={()=>handleMouseEnter(2)} 
                    onMouseLeave={()=>handleMouseLeave()}> 
                    <span className={styles.navbarContent}>
                        Mansion
                    </span>
                    <motion.div className={styles.navbarContentHighlight}
                        initial={{width:0}}
                        animate={{width:(isHovered===2)?"auto":0}}
                        transition={{
                            type:"spring",
                            stiffness:160,
                            damping:30
                        }}
                        exit={{width:0,
                        transition:{
                            type:"spring",
                            stiffness:160,
                            damping:30
                        }}}
                    />                
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
