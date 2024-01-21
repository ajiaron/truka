import React from 'react';
import styles from '../../styles/page.module.scss'
const Blackprint = () => {
    return (
        <div className={styles.iframeWrapper}>
            <iframe className={styles.blackprint}
            src="https://blackprint.in" width="100%" height="100%"
            ></iframe>
        </div>

 
    );
}

export default Blackprint;
