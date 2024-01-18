import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss';
const BenefitCard = ({title, text, image}) => {
    return (
        <div className={styles.membershipCardWrapper}>
            <div className={styles.membershipCardImage}>
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
