'use client';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/page.module.scss'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'
import { Oval } from 'react-loader-spinner'

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
    useEffect(()=> {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://link.msgsndr.com/js/form_embed.js";

        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
    }, [])

    return (
        <>   
        <div className={styles.iframeContainer}>
                <style jsx global>{`
                    body {
                        background: ${"#252525"};
                    }
                `}
                </style>
                <div className={styles.iframeWrapper}>
                    <iframe
                   
                        src="https://api.leadconnectorhq.com/widget/form/LDLDHp64fuuSHDkePrGY"
                        style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                        id="inline-LDLDHp64fuuSHDkePrGY"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Pre Vetting Form"
                        data-height={`495`}
                        data-layout-iframe-id="inline-LDLDHp64fuuSHDkePrGY"
                        data-form-id="LDLDHp64fuuSHDkePrGY"
                        title="Pre Vetting Form"
                        className={styles.mansion}
                        onLoad={() => setLoading(false)}
                        loading={'lazy'}
                    >

                    </iframe>
                    <motion.div 
                        initial={{opacity:1}}
                        animate={{opacity:(!loading)?0:1}}
                        transition={{
                            type: "tween",
                            duration:.25,
                            delay:.5
                        }}
                    className={styles.loadingIframe}>
                        <Oval
                            color="#808080"
                            wrapperStyle={{position:"absolute"}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#454545"
                            strokeWidth={1}
                            strokeWidthSecondary={1}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Mansion;
