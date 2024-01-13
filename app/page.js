'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/page.module.scss'
import propStyles from '../styles/proposition.module.scss'
import InfoButton from './components/InfoButton'
import DotGrid from '../public/assets/dotgrid5.svg'
import Seperator from '../public/assets/seperator.svg'
import SeperatorAlt from '../public/assets/seperatorAlt.svg'
import SeperatorLong from '../public/assets/seperatorLong.svg'
import SeperatorLongAlt from '../public/assets/seperatorLongAlt.svg'
import DotGridAlt from '../public/assets/dotgridalt.svg'
import Corner from '../public/assets/corner.svg'
import Star from '../public/assets/staralt.svg'
import Plus from '../public/assets/plus.svg'
import Wave from '../public/assets/wave.svg'
import Ikigai from '../public/assets/ikigai.svg'

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

        <div className={styles.seperatorWrapper} style={{marginRight:"auto"}}>
            <Image src={SeperatorLong} alt="seperator" width={834} height={35} 
            style={{transform:"translateX(104.125%)", top:"-1.1rem"}}
            className={styles.seperatorBottom}/>
        </div>


        <section className={styles.propositionTopContainer}>
          <div className={propStyles.propositionTopHeader}>
            <p className={propStyles.propositionTopHeaderText}>
              we are truka.
            </p>
            <p className={propStyles.propositionTopHeaderSubtext}>
              Learn the skills to build your future.
            </p>
          </div>
          <div className={propStyles.propositionTopContent}>
              <div className={propStyles.propositionTopLeft}>
                <div className={propStyles.topLeftContent}>
                  
                  <div style={{display:"flex", gap:"18.5px", alignItems:"center", transform:"translateX(-.125rem)"}}>
                      <div className={propStyles.propositionIcon}>
                        1. 
                      </div>
                      <p className={propStyles.propositionIconText}>
                        Learn
                      </p>
                  </div>
                  <div style={{paddingLeft:".25rem",paddingTop:"28.47px", display:"flex", gap:"17.42px", alignItems:"center"}}>
                    <Image src={Ikigai} alt="ikigai" width={67} height={57} style={{}}/>
    
                    <div style={{width:"100%"}}>
                      <p className={propStyles.propositionTitle}>
                        Learn your&nbsp;
                      </p>
                      <p className={propStyles.propositionTitle}
                      style={{borderBottom:"3px solid #E3A77C"}}>
                        Ikigai
                      </p>
                    </div>
                  </div>
                  <div className={propStyles.topLeftContext}>
                    <div style={{width:"100%"}} className={styles.subsectionSubtextAlt}>
                        From the principles of&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        Ikigai
                      </p>
                        ,&nbsp;position<br/> your life to get&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        paid&nbsp;
                      </p>
                        for what you&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        love&nbsp;
                      </p>
                        to<br/> do, what the&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        world needs
                      </p>
                      , and what<br/>{"you're"}&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        passionate&nbsp;
                      </p>
                      about.
                    </div>
                    <div style={{width:"100%", paddingTop:"1.325rem"}} className={styles.subsectionSubtextAlt}>
                        Make an impact in the world by providing<br/> your&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        unique value
                      </p>.
                    </div>
       
                  </div>
                  



                </div>
              </div>
              <div className={propStyles.propositionTopRight}>
                  <div className={propStyles.topRightImage}>
                    <div className={propStyles.exploreImageButton}>
                        <p className={propStyles.exploreImageText}>
                            Explore Skilled Professionals
                        </p>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FAF3D6"/>
                        </svg>
                    </div>
         
                  </div>
              </div>
          </div>
        </section>

        <div className={styles.seperatorWrapper} style={{marginLeft:"auto", transform:"translateY(-16%)"}}>
          <Image src={SeperatorLongAlt} alt="seperator" width={786} height={35} 
          className="seperator" style={{transform:"translateX(-8%)"}}/>
        </div>
        <div style={{position:"relative"}}>
        <div className={propStyles.propositionSeperator}/>


        </div>
 


        <section className={styles.propositionMidContainer}>
          <p className={styles.placeholderText}>
          {windowSize.width && `Width: ${windowSize.width}`}&nbsp;
          {windowSize.height && `Height: ${windowSize.height}`}
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
