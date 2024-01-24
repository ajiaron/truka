'use client';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/page.module.scss'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'
import { Oval } from 'react-loader-spinner'
import Navbar from '../components/navbar';

const Mansion = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [loading, setLoading] = useState(true)
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
        <Navbar/>
        <div className={styles.mansionContainer}>
                <style jsx global>{`
                    body {
                        background: ${"#252525"};
                    }
                `}
                </style>
                <div className={styles.mansionIframeWrapper}>
                    <iframe
                        src="https://sensational-moments-097371.framer.app/"
                        style={{width: '100%', height: '100%', border: 'none'}}
                        title="Mansion Site"
                        className={styles.mansion}
                        onLoad={() => setLoading(false)}
                        loading={'lazy'}
                    >
                    </iframe>

                </div>
            </div>
        </>
    );
}

export default Mansion;
