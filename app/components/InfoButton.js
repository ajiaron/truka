import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss'
import star from '../../public/assets/star.svg'
const ContextButton = ({text, type, width}) => {
    return (
        <div 
        style={{display:(width<480 && type!=="price")?"none":"visible"
            ,fontSize:(type==="price")?"18px":"12.5px", position:(type==="price")?"relative":"absolute",
        border:(type==="price")?".5px solid #FAF3D6": ".75px solid #FAF3D6"}}
        className={[styles.contextButtonContainer, styles[type==="left"?"contextLeft":type==="price"?"contextPrice":"contextRight"]].join(' ')}>
            <Image src={star} alt="star" 
            width={type==="price"?18:13} height={type==="price"?18:13} 
            className={type==="price"?styles.contextPriceStar:styles.contextStar}/>
            {text}
        </div>
    );
}

export default ContextButton;
