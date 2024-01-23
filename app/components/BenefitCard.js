import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss';
const BenefitCard = ({title, text, image}) => {
    return (
        <div className={styles.membershipCardWrapper}>
            <div className={styles.membershipCardImage}
            style={{
                backgroundImage:`url(${(image)?image.src:""})`,
                border:(!image||image.length<1)?"1px dashed #7c8874":"none"
            }}>
                {/* put image here */}
            </div>
            <div className={styles.membershipCardContext}>
                <p className={styles.membershipCardTitle}>
                    {title}
                </p>
                <p className={styles.membershipCardSubtext}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default BenefitCard;
