import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss'
import star from '../../public/assets/star.svg'
const ContextButton = ({text, type}) => {
    return (
        <div className={[styles.contextButtonContainer, styles[type==="left"?"contextLeft":type==="price"?"contextPrice":"contextRight"]].join(' ')}>
            <Image src={star} alt="star" 
            width={type==="price"?14:13} height={type==="price"?14:1313} 
            className={type==="price"?styles.contextPriceStar:styles.contextStar}/>
            {text}
        </div>
    );
}

export default ContextButton;
