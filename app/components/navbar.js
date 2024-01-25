'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import styles from '../../styles/navbar.module.scss'
import logo from '../../public/assets/logoalt.svg'
import icon from '../../public/assets/logoTransparent.svg'
import iconAlt from '../../public/assets/trukaIcon.svg'
import star from '../../public/assets/star.svg'
import Link from 'next/link'
import staralt from '../../public/assets/staralt.svg'
import {usePathname} from 'next/navigation'; 
import {FaBars} from 'react-icons/fa'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'

const Navbar = ({handleMenu}) => {
    const pathname = usePathname();
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    const [isHovered, setIsHovered] = useState(0);
    const handleMouseEnter = (e) => {
        setIsHovered(e);
    };
    const handleMouseLeave = () => {
        setIsHovered(0);
    };
    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    return (
        <>
        {(pathname==="/mansion")?
        <div className={styles.navbarContainerAlt}>
             <div className={styles.navbarWrapperAlt}>
                <Link className={styles.navbarLogoWrapperAlt} href="/">
                    <div className={styles.navbarLogo}>
                    <Image src={iconAlt}
                    width={24.5}
                    height={24.5}
                    alt="logo"/>
                    </div>
                    <p className={styles.navbarLogoText}>
                        truka.
                    </p>

                </Link>
                <div className={styles.navbarContentWrapperAlt}>
                
                    <Link href="/mansion" className={styles.navbarContentLinkAlt}
                        onMouseEnter={()=>handleMouseEnter(2)} 
                        onMouseLeave={()=>handleMouseLeave()}> 
                        <span className={styles.navbarContentAlt}>
                            Mansion
                        </span>
                        <motion.div className={styles.navbarContentHighlightAlt}
                          initial={{width:"0%"}}
                          animate={{width:"95%"}}
                          transition={{
                            type:"spring",
                            bounce:0,
                            duration:.5,
                            delay:.75
                          }}
                        />                
                    </Link>
    
                </div>
          
           </div>
        </div>
        :
        <div className={styles.navbarContainer}>
           <div className={styles.navbarWrapper}>
            <Link className={styles.navbarLogoWrapper} href="/">
                <div className={styles.navbarLogo}>
                <Image src={(pathname==="/")?icon:icon}
                 width={(windowSize.width<400)?24.5:24.5}
                 height={(windowSize.width<400)?24.5:24.5}
                 alt="logo"/>
                </div>
                <p className={styles.navbarLogoText}>
                    truka.
                </p>

            </Link>
            
            {(windowSize.width<1200)?
                  
            <span className={styles.navmenuIcon} onClick={()=>handleMenu()}>
                <FaBars color="#fff" size={22}/>
            </span>:
            <>
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
            </>
      
            }
            
           </div>
                    
        </div>
    }
    </>
    );
}

export default Navbar;
