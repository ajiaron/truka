'use client';
import Image from 'next/image'
import styles from '../styles/page.module.scss'
import InfoButton from './components/InfoButton'
import DotGrid from '../public/assets/dotgrid5.svg'
import Seperator from '../public/assets/seperator.svg'
import SeperatorAlt from '../public/assets/seperatorAlt.svg'
import DotGridAlt from '../public/assets/dotgridalt.svg'
import Corner from '../public/assets/corner.svg'
import Star from '../public/assets/staralt.svg'
import Plus from '../public/assets/plus.svg'

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.contentContainerHero}>
                <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVector}/>
                <Image src={DotGrid} alt="dotgrid" width={300} height={300} className={styles.dotGrid}/>
              <div className={styles.heroTextContainer}>
                <p className={styles.heroText}>
                  Unlock Your Greatest Self.
                </p>
              </div>
              <div className={styles.heroSubtextContainer}>
                <p className={styles.heroSubtext} style={{fontWeight:500}}>
                  Be a part&nbsp;
                </p>
                <p className={styles.heroSubtext}>
                  of an&nbsp;
                </p>
                <p className={styles.heroSubtext} style={{fontWeight:500}}>
                  engaged community&nbsp;
                </p>
                <p className={styles.heroSubtext}>
                  of entrepeneurs<br/> working on becoming the&nbsp;
                </p>
                <p className={styles.heroSubtext} style={{fontWeight:500}}>
                  greatest version&nbsp;
                </p>
                <p className={styles.heroSubtext}>
                  of<br/> theirselves.
                </p>
              </div>
              <div className={styles.heroButtonContainer}>
                <div className={styles.heroButtonApply}>
                  <div style={{paddingTop:".25rem"}}>
                    <Image 
                        src={Star} alt="star-black" 
                        width={16} height={16}
                    />
                  </div>
                  <p className={styles.heroButtonApplyText}>
                    Apply Today
                  </p>

                </div>
                <div className={styles.heroButtonAlt}>
                  Explore Options
                </div>
              </div>
     
            </div>
            <div className={styles.contentContainerAlt}>
              <div className={styles.contextButtonWrapper}
                style={{top:"2.75rem", right:"5.5rem"}}>
              <InfoButton text={'exclusive education'} type={'right'}/>
              </div>
              
                <div className={styles.contentVideoContainer}>
                  Video Here.
                </div>

                <div className={styles.contextButtonWrapper}
                style={{bottom:"10.75rem", left:"71.5%"}}>
                <InfoButton text={'growth project'} type={'left'}/>
                </div>
                <div className={styles.contextButtonWrapper}
                style={{bottom:"3.875rem", right:"4.875rem"}}>
                <InfoButton text={'your community'} type={'right'}/>
                </div>

            </div>
            <Image src={DotGridAlt} alt="dotgrid" width={300} height={300} className={styles.dotGridAlt}/>
        </div>

        <section className={styles.landingSeperator}>
          <div className={styles.seperatorWrapper}>
            <Image src={Seperator} alt="seperator" width={610} height={34.5} className={styles.seperator}
        />
          </div>
          <div className={styles.subsectionContainer}>
            <div className={styles.subsectionContainerLeft}>
              <div style={{ width:"100%"}}>
                <p className={styles.subsectionText} style={{paddingLeft:"2px"}}>
                  A solution to the&nbsp;
                </p>
                <p className={styles.subsectionText} style={{fontWeight:"600"}}>
                  modern trap*&nbsp;
                </p>
                <p className={styles.subsectionText} style={{fontWeight:"600",textShadow:"0px 2px 8px rgba(250, 243, 214, 0.50)"}}>
                  <br/>embrace life-long fulfillment.
                </p>
              </div>
            
              <p className={styles.subsectionSubtext}  style={{paddingLeft:"3px"}}>
                  Events, Seminars, Socials, Dinners, and more!
              </p>
            </div>

            <div className={styles.subsectionSeperator}/>

            
            <div className={styles.subsectionContainerRight}>
              <div >
                <p className={styles.subsectionSubtext} >
                    *Escape the rat race and build&nbsp;
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"600"}}>
                    wealth&nbsp;
                </p>
                <p className={styles.subsectionSubtext} >
                    with a<br/>
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"600", }}>
                    community&nbsp;
                </p>
                <p className={styles.subsectionSubtext} >
                    you can&nbsp;
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"600"}}>
                    trust.
                </p>
              </div>
            </div>
          </div>


        </section>

        <section className={styles.carouselSection}>
        <div className={styles.seperatorWrapper} style={{marginLeft:"auto", top:"-.875rem"}}>
            <Image src={SeperatorAlt} alt="seperator" width={610} height={34.5} className={styles.seperatorBottom}/>
        </div>
          <div className={styles.carouselContainer}>

          </div>
        </section>
        <section className={styles.applyContainer}>
        <div className={styles.seperatorSubWrapper} style={{left:"3.125%"}}>
            <Image src={Plus} alt="seperator" width={100} height={34.5} className={styles.subSeperator}/>
        </div>
        <div className={styles.seperatorWrapper}>
            <Image src={Seperator} alt="seperator" width={610} height={34.5} style={{transform:"rotate(180deg)", top:"-1.125rem", right:"-1.125rem"}}
            className={styles.seperatorBottom}/>
        </div>
        </section>
    </main>

  )
}
