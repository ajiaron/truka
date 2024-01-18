import React from 'react';
import Image from 'next/image'
import Check from '../../public/assets/check.svg'
import Dash from '../../public/assets/dash.svg'
import styles from '../../styles/page.module.scss'
import propStyles from '../../styles/proposition.module.scss'
import priceStyles from '../../styles/pricing.module.scss'
function PackageItem({text}) {
    return (
        <div className={priceStyles.packageDetailsContext}>
            <Image src={Check} width={23} height={18} alt={'check'} 
            style={{alignSelf:"center", transform:"translateY(-2px)"}}/>
            <p className={priceStyles.packageDetailsText}>
                {text}
            </p>
        </div>
    )
} 
const Package = ({type}) => {
    return (
        <div className={(type===1)?priceStyles.packageWrapper1:priceStyles.packageWrapper2}>

            {(type===1)?
            <div style={{position:"absolute", left:"-4px", height:"100%"}}>
                <div className={priceStyles.gradientBorder} >
                    
                </div>
            </div>:
             <div style={{position:"absolute", left:"-5px",marginRight:"auto", height:"100%"}}>
                <div className={priceStyles.gradientBorder} style={{ width:"5px",top:0, height:"75%"}} >
                    
                </div>
            </div>
            }
     
            {(type===2)&&
            <div style={{position:"absolute", top:"-5px", width:"100%"}}>
                <div className={priceStyles.gradientTop}/>
            </div>
            }

            <div className={priceStyles.packageHeaderContainer}>
                <p className={priceStyles.packageHeaderText}>
                    {`${type===1?"Monthly":"Annual"} Truka Plan`}
                </p>
                <p className={priceStyles.packageHeaderSubtext}>
                    {(type===1)?"Enjoy lifelong community and success for the price of a good meal."
                    :"Billed annually. Save money and your time, enjoy a year's worth of access."}
                </p>
                <div className={priceStyles.packageHeaderBorder}>
                    
                </div>
            </div>
            <div className={priceStyles.packagePriceContainer} style={{paddingLeft:(type===1)?"1rem":"0"}}>
                <p className={priceStyles.packagePriceSymbol}>
                    $
                </p>
         
                <p className={priceStyles.packagePriceText}
                style={{paddingLeft:(type===1)?".125rem":"0"}}>
                    {(type===1)?"46.99":"449.99"}
                </p>
                <p className={priceStyles.packagePriceSubtext}>
                    / {type===1?"month":"year"}
                </p>
           
            </div>
            <div className={[priceStyles.packageStartButton, 
            (type===1)?priceStyles.startButtonMonth:priceStyles.startButtonYear].join(' ')}>
                Get Started
            </div>
            <div className={priceStyles.packageDetailsContainer}
            style={{paddingLeft:(type===2)?".375rem":"0",}}>
                <PackageItem text={"Unlimited Access"}/>
                <PackageItem text={"Exclusive Community"}/>
                <PackageItem text={"Truka Resource Vault"}/>
                <PackageItem text={"Private Mentorship"}/>
                <PackageItem text={"Community Support"}/>
                {(type===2)&&
                <>
                <PackageItem text={"Personalized Blueprint"}/>
                <PackageItem text={"Live Industry Insight"}/>
                </>
                }
            </div>






            {(type===1)?
            <div style={{position:"absolute",marginLeft:"auto", right:"-4px", height:"100%"}}>
                <div className={priceStyles.gradientBorderAlt}>
                    
                </div>
            </div>
            :
            <div style={{position:"absolute",marginLeft:"auto", right:"-5px", height:"100%"}}>
                <div className={priceStyles.gradientBorderAlt}
                style={{width:"5px", transform:"rotate(180deg)",top:".75rem", height:"100%"}}>
                    
                </div>
            </div>
            }
            {(type===2)&&
            <div style={{position:"absolute", transform:"rotate(180deg)", bottom:"0", width:"100%"}}>
                <div className={priceStyles.gradientBottom}/>
            </div>
            }
   
        </div>
    );
}

export default Package;
