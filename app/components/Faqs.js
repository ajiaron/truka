import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss';
import DropdownArrow from '../../public/assets/faqsarrow.svg'
import {motion, AnimatePresence, useMotionValueEvent, useAnimation, inView} from 'framer-motion'


const Faqs = ({title, text}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <span className={styles.faqsContentItem} onClick={()=>setIsActive(!isActive)}>
            <div className={styles.faqsContentItemWrapper}>
                <p className={styles.faqsContentTitle}>
                    {title}
                </p>
                <Image src={DropdownArrow} width={45} height={33} alt={"dropdown"}
                style={{transform:`translateY(.125rem) rotate(${isActive?"90deg":"0deg"})`}}
                className={styles.faqsDropdownIcon}/>
            </div>

                {
                <motion.div 
                    initial={{height:0}}
                    transition= {{
                        type: "spring",
                        stiffness:160,
                        damping:30,
                        duration:.05
                    }}
                    animate={{height:(isActive)?"auto":0}}
                    exit={{height:0}}
                    className={styles.faqsDropdownContainer}>
                    <div style={{paddingBottom:"1.75rem"}}>
                        <p className={styles.faqsContentSubtext}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                  
                </motion.div>
                }

        </span>
    );
}

export default Faqs;
