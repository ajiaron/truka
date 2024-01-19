import React from 'react';
import Image from 'next/image';
import styles from '../../styles/page.module.scss';
import DropdownArrow from '../../public/assets/faqsarrow.svg'

const Faqs = ({title, text}) => {
    return (
        <div className={styles.faqsContentItem}>
            <div className={styles.faqsContentItemWrapper}>
                <p className={styles.faqsContentTitle}>
                    {title}
                </p>
                <Image src={DropdownArrow} width={45} height={33} alt={"dropdown"}
                style={{transform:"translateY(.25rem)"}}/>
            </div>
        </div>
    );
}

export default Faqs;
