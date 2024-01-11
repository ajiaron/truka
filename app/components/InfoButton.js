import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss'
import star from '../../public/assets/star.svg'
const ContextButton = ({text, type}) => {
    return (
        <div className={[styles.contextButtonContainer, styles[type==="left"?"contextLeft":"contextRight"]].join(' ')}>
            <Image src={star} alt="star" width={13} height={13} className={styles.contextStar}/>
            {text}
        </div>
    );
}

export default ContextButton;
