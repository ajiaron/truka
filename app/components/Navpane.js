import React, {useState, useEffect} from 'react';
import styles from '../../styles/navbar.module.scss'
import { FaBars } from "react-icons/fa";
import {motion, AnimatePresence, useScroll, useAnimation, inView} from 'framer-motion'
import Link from 'next/link'

const Navpane = ({isActive, handleLogin}) => {
    function handleNavigate(id) {
        onHandleScroll(id)
    }
    function handleStripeLogin() {
        window.location.href = `https://billing.stripe.com/p/login/4gw5mD0xQ6ZFczm7ss`
    }

    return (
        <>
        {
        <motion.div
        initial={{x:"100%"}}
        animate={{x:"0%"}}
        exit={{ x:"100%",
        transition:{
            type: "spring",
            bounce:0,
            duration:.75
        }}}
        transition={{
          type: "spring",
          bounce:0,
          duration:.75
        }}
         className={styles.navMenuContainer}>
            <div className={styles.menuContentContainer}>
            <Link href={'/'} style={{width:"100%", alignItems:"flex-start", display:"flex"}}>
            <span style={{pointerEvents:(isActive)?"auto":"none"}}
            className={styles.menuItemContainer} >
                Members Club
            </span>
            </Link>
            <Link href={'/mansion'} style={{width:"100%", alignItems:"flex-start", display:"flex"}}>
            <span style={{pointerEvents:(isActive)?"auto":"none"}}
            className={styles.menuItemContainer}>
                Mansion
            </span>
            </Link>
            <span style={{pointerEvents:(isActive)?"auto":"none"}}
            className={styles.menuItemContainer} >
                Get Connected
            </span>
            <span style={{pointerEvents:(isActive)?"auto":"none"}}
            onClick={()=>handleLogin()}
            className={styles.menuItemContainer}>
                Login
            </span>
            </div>
        </motion.div>

        }
        </>
    );
}

export default Navpane;
