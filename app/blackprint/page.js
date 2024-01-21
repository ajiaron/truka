'use client';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/page.module.scss'
const Blackprint = () => {
    return (
        <div className={styles.iframeWrapper}>
        <style jsx global>{`
            body {
                background: ${"#1b1b1b"};
            }
        `}
        </style>
            <iframe className={styles.blackprint}
            src="https://blackprint.in" width="100%" height="100%"
            ></iframe>
        </div>

 
    );
}

export default Blackprint;
