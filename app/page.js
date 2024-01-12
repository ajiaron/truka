'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/page.module.scss'
import InfoButton from './components/InfoButton'
import DotGrid from '../public/assets/dotgrid5.svg'
import Seperator from '../public/assets/seperator.svg'
import SeperatorAlt from '../public/assets/seperatorAlt.svg'
import SeperatorLong from '../public/assets/seperatorLong.svg'
import DotGridAlt from '../public/assets/dotgridalt.svg'
import Corner from '../public/assets/corner.svg'
import Star from '../public/assets/staralt.svg'
import Plus from '../public/assets/plus.svg'

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
            <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVectorAlt}/>
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
          <div style={{alignSelf:"center", width:"15%"}}>
             <div className={styles.subsectionSeperator}/>
          </div>


            
            <div className={styles.subsectionContainerRight}>
              <div >
                <p className={styles.subsectionSubtext} >
                    *Escape the rat race and build&nbsp;
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"500"}}>
                    wealth&nbsp;
                </p>
                <p className={styles.subsectionSubtext} >
                    with a<br/>
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"500", }}>
                    community&nbsp;
                </p>
                <p className={styles.subsectionSubtext} >
                    you can&nbsp;
                </p>
                <p className={styles.subsectionSubtext} style={{fontWeight:"500"}}>
                    trust.
                </p>
              </div>
            </div>
          </div>


        </section>

        <section className={styles.carouselSection}>
          <div className={styles.seperatorWrapper} style={{marginLeft:"auto", top:"-.95rem"}}>
              <Image src={SeperatorAlt} alt="seperator" width={610} height={34.5} className={styles.seperatorBottom}/>
          </div>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselItemContainer}>

            </div>
            <div className={styles.carouselItemContainer}>
            <p className={styles.placeholderText}>
              image carousel
            </p>
            </div>
            <div className={styles.carouselItemContainer}>

            </div>

          </div>
        </section>

        <div className={styles.seperatorSubWrapper} style={{marginRight:"auto", left:"2.75rem"}}>
            <Image src={Plus} alt="seperator" width={100} height={34.5} className={styles.subSeperator}/>
        </div>
        <div className={styles.seperatorWrapper} style={{marginLeft:"auto"}}>
            <Image src={Seperator} alt="seperator" width={610} height={34.5} style={{transform:"rotate(180deg)", top:"-1.125rem",right:"-1.125rem"}}
            className={styles.seperatorBottom}/>
        </div>

        <section className={styles.applyContainer}>

  
          <div className={styles.applyWrapperLeft}>
            <div className={styles.applyHeroContainer}>
                  <div style={{width:"100%"}}>
                    <p className={styles.applyHeroText}>
                      {`"`}{`We didn't re-invent `}
                    </p>
                    <p className={styles.applyHeroText} style={{fontWeight:"700"}}>
                      lifestyle,&nbsp;<br/>
                    </p>
                    <p className={styles.applyHeroText}>
                      just the way to&nbsp;
                    </p>
                    <p className={styles.applyHeroText} style={{fontWeight:"700"}}>
                      build it
                    </p>
                    <p className={styles.applyHeroText}>
                      {`."`}
                    </p>
                  </div>
                  <div className={styles.applyHeroContext}>
                    <div className={styles.applyHeroContextImage}>

                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                      <p className={styles.subtext} style={{fontWeight:"400", letterSpacing:"-.35px"}}>
                        Leo Valentino Chun
                      </p>
                      <p className={styles.subsectionSubtext} style={{transform:"translateY(1px)"}}>
                        CEO {'&'} Co-Founder of Truka.
                      </p>
                    </div>
                  </div>
                  <div style={{width:"100%", paddingTop:"2.325rem", transform:"translateX(-.125rem)"}}>
                    <p className={styles.subsectionSubtext}>
                      Escape the rat race and build&nbsp; 
                    </p>
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      wealth&nbsp;
                    </p>
                    <p className={styles.subtext}>
                      with a&nbsp;
                    </p>
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      community&nbsp;
                    </p>
                    <p className={styles.subtext}>
                      you <br/> can&nbsp;
                    </p>
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      trust
                    </p>
                    <p className={styles.subtext}>
                      .
                    </p>
                  </div>
                  <div style={{display:"flex", gap:"27px", paddingTop:"26px", transform:"translateX(-3px)"}}>
                      <span className={styles.applyTodayButton}>
                          Apply Today
                      </span>
                      <span className={styles.explorePrevButton}>
                          Explore Previous Events
                      </span>
                  </div>
                <div>
              </div>
            </div>
          </div>

          <div className={styles.applyWrapperRight}>
            <div style={{position:"relative", marginRight:"auto", left:".625rem",top:"-1.35rem"}}>
              <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVector}/>
            </div>
           
              <div className={styles.applyVideoContainer}>
                  video here.
              </div>
            <div style={{position:"relative", marginLeft:"auto", right:".875rem",bottom:"-1.65rem"}}>
              <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVectorAlt}/>
            </div>
          
          </div>

        </section>
        <div className={styles.seperatorWrapper} style={{marginLeft:"auto"}}>
            <Image src={SeperatorLong} alt="seperator" width={834} height={35} 
            style={{transform:"rotate(0deg)", top:"-1.125rem",right:"548px"}}
            className={styles.seperatorBottom}/>
        </div>

        <section className={styles.propositionTopContainer}>
          <p className={styles.placeholderText}>
          {windowSize.width && `Width: ${windowSize.width}`}&nbsp;
          {windowSize.height && `Height: ${windowSize.height}`}
          </p>
        </section>
        <section className={styles.propositionMidContainer}>
          <p className={styles.placeholderText}>
            mindset and skillset
          </p>
        </section>
        <section className={styles.propositionBottomContainer}>
          <p className={styles.placeholderText}>
            co-create with a community
          </p>
        </section>
        <section className={styles.testimonialContainer}>
          <p className={styles.placeholderText}>
            real people, real experiences
          </p>
        </section>
        <section className={styles.pricingContainer}>
          <p className={styles.placeholderText}>
            pricing, made easy
          </p>
        </section>
    </main>

  )
}
