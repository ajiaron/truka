'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from './components/navbar'
import Navpane from './components/Navpane'
import Package from './components/Package'
import BenefitCard from './components/BenefitCard'
import styles from '../styles/page.module.scss'
import propStyles from '../styles/proposition.module.scss'
import priceStyles from '../styles/pricing.module.scss'
import InfoButton from './components/InfoButton'
import Faqs from './components/Faqs'
import DotGrid from '../public/assets/dotgrid5.svg'
import Seperator from '../public/assets/seperator.svg'
import SeperatorAlt from '../public/assets/seperatorAlt.svg'
import SeperatorLong from '../public/assets/seperatorLong.svg'
import SeperatorLongAlt from '../public/assets/seperatorLongAlt.svg'
import Seperator5 from '../public/assets/seperator5.svg'
import Seperator6 from '../public/assets/seperator6.svg'
import PropVector from '../public/assets/propVector.svg'
import FaqsSeperator from '../public/assets/faqsSeperator.svg'
import DotGridAlt from '../public/assets/dotgridalt.svg'
import Corner from '../public/assets/corner.svg'
import Star from '../public/assets/staralt.svg'
import Plus from '../public/assets/plus.svg'
import Wave from '../public/assets/wave.svg'
import Trees from '../public/assets/trees.svg'
import star from '../public/assets/star.svg'
import Waves2 from '../public/assets/waves2.svg'
import TextCircle from '../public/assets/textcircle.svg'
import Ikigai from '../public/assets/ikigai.svg'
import SlideButton from '../public/assets/slidearrow.svg'
import People from '../public/assets/people.svg'
import Carousel11 from '../public/photos/imgc1-1.jpg'
import Carousel12 from '../public/photos/imgc1-2.jpeg'
import Carousel13 from '../public/photos/imgc1-3.jpeg'
import Carousel14 from '../public/photos/imgc1-4.jpeg'
import IkigaiPhoto from '../public/photos/pricing.jpg'
import Skills1 from '../public/photos/skills-1.jpeg'
import Skills2 from '../public/photos/skills-2.jpeg'
import CommunityPhoto from '../public/photos/community.jpeg'
import SupportPhoto from '../public/photos/support.jpeg'
import University from '../public/photos/university.jpeg'
import Vault from '../public/photos/vault.jpeg'
import Mentoring from '../public/photos/mentoring2.png'
import Club from '../public/photos/club.png'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'

function Card({name, index, role, image, width, handlePosition}) {
  return (
    <span className={propStyles.bottomCarouselItem}
    onMouseEnter={()=>handlePosition((width<1024)?0:(index===0)?1:(index===6)?-1:0)} 
    onMouseLeave={()=>handlePosition((width<1024)?0:(index===0)?1:(index===6)?-1:0)}
    >
      <div className={propStyles.bottomCarouselImage}>

      </div>
      <div style={{display:"flex", flexDirection:"column", width:"100%", paddingTop:".325rem", transform:"translateY(.25rem)"}}>
        <p className={propStyles.bottomCarouselText}>
          {name}
        </p>
        <p className={propStyles.bottomCarouselSubtext}>
          Role Title
        </p>
      </div>
    </span>
  )
}
function Slider({type, handleSlide}) {
  return (
    <span className={styles.slideButtonContainer}
    onClick={()=>handleSlide((type==="left")?0:(type==="right")?-1:0)}
    style={{transform:`rotate(${type==="left"?"0deg":"180deg"})`,
    }}>
      <Image src={SlideButton} width={28.5} height={26.5} alt="arrow" className={styles.slideButtonArrow}/>
    </span>
  )
}
function Testimonial({quote, name, title, width}) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCardImage}>

      </div>
      <div className={styles.testimonialContextContainer}>
        <p className={styles.testimonialQuote}>
          {`"${quote}"`}
        </p>
        <div style={{paddingTop:(width>768)?"1.375rem":".75rem"}}>
          <p className={styles.testimonialQuoteSubtext}>
            {name}
          </p>
          <p className={styles.testimonialQuoteSubtext} style={{fontWeight:"300", paddingTop:"1px"}}>
            {title}
          </p>
        </div>
       
      </div>
    </div>
  )
}
export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [carousel1Position, setCarousel1Position] = useState(0)
  const [carousel2Position, setCarousel2Position] = useState(0)
  const [testimonialPosition, setTestimonialPosition] = useState(0)
  const [cardPosition, setCardPosition] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(0);
  const [menuActive, setMenuActive] = useState(false)


  const gaTrackingId = 'G-JP2GFR7QN8';

  const handlePayment = (link) => {
      window.location.href = link
  }
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
  function navigatePortal() {
    window.location.href = `https://billing.stripe.com/p/login/6oEaGXcXi0yl3tu144`
  }
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Google Analytics script loaded');
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 
              gtag('config', '${gaTrackingId}');
            `
          }}
        />
      </Head>

      <Navbar handleMenu={()=>setMenuActive(!menuActive)} handleLogin={()=>navigatePortal()}/>

     <main className={styles.main}>
      
         {
            (windowSize.width<=1280)&&
            <AnimatePresence>
              {(menuActive)&&
              <Navpane isActive={menuActive} handleLogin={()=>navigatePortal()}/>
              }
            </AnimatePresence>
            
          }
        <section className={styles.contentContainer}>
            <div style={{position:"relative", top:"-6rem", left:"-.675rem"}}>
              <Image src={DotGrid} alt="dotgrid" width={300} height={300} className={styles.dotGrid}/>
            </div>
            <div className={styles.contentContainerHero}>
              <div style={{position:"relative", top:"-1.175rem", left:"-3.775rem"}}>
              <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVector}/>
              </div>

              <div className={styles.heroTextContainer}>
                <p className={styles.heroText}>
                  Unlock Your{(windowSize.width)<1025&&<br/>} Greatest Self.
                </p>
              </div>
              <div className={styles.heroSubtextContainer}>
                {(windowSize.width>1439)?
                <>
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
                </>:
                <>
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
                    of entrepeneurs working on becoming the&nbsp;
                  </p>
                  <p className={styles.heroSubtext} style={{fontWeight:500}}>
                    greatest version&nbsp;
                  </p>
                  <p className={styles.heroSubtext}>
                    of theirselves.
                  </p>
                </>
                }
              </div>
              <div className={styles.heroButtonContainer}>
                <div className={styles.heroButtonApply}>
                  <div style={{paddingTop:".25rem"}}>
                    <Image 
                        src={Star} alt="star-black" 
                        width={(windowSize.width>480)?16:15} height={(windowSize.width>480)?16:15}
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
              {(windowSize.width<=480)?null:
              <div className={styles.contextButtonWrapper}
                style={{top:"2.75rem", right:"5.5rem"}}>
              <InfoButton text={'exclusive education'} type={'right'} width={windowSize.width}/>
              </div>
              }
              
                <div className={styles.contentVideoContainer}>
                  video here
                </div>
                {/*
                <div className={styles.contextButtonWrapper}
                style={{bottom:"10.75rem", right:"-28.2rem"}}> 
                <InfoButton text={'growth project'} type={'left'}/>
                </div> 
                */}
              {(windowSize.width<=480)?null:
                  <div className={styles.contextButtonWrapper}
                  style={{bottom:"10.75rem", right:"-71.4%"}}> 
                  <InfoButton text={'growth project'} type={'left'} width={windowSize.width}/>
                  </div>
              }
              {(windowSize.width<=480)?null:
                  <div className={styles.contextButtonWrapper}
                  style={{bottom:"3.875rem", right:"4.875rem"}}>
                  <InfoButton text={'your community'} type={'right'} width={windowSize.width}/>
                  </div>
                }
            
                
                

            </div>
          <div style={{position:"relative", top:"2.325rem", right:".725rem"}}>
          <Image src={DotGridAlt} alt="dotgrid" width={300} height={300} className={styles.dotGridAlt}/>
          </div>
         
   
           <div style={{display:(windowSize.width>=1400)?"block":"none",position:"relative", top:(windowSize.width>1280)?"2.35rem":"5rem", right:(windowSize.width>1280)?"3.375rem":"1rem"}}>
           <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVectorAlt}/>
           </div>
            
        </section>

          {/* section 1 */}




        <section className={styles.landingSeperator}>
          <div className={styles.seperatorWrapper}>
            <Image src={Seperator} alt="seperator" width={610} height={34.5} className={styles.seperator}
        />
          </div>
          {(windowSize.width<769)&&
              <div className={styles.seperatorTopContainer} style={{marginRight:"auto",marginLeft:"auto"}}>
                  <Image src={Plus} alt="seperator" width={16} height={16} className={styles.subSeperatorSmall}/>
                  <Image src={Plus} alt="seperator" width={16} height={16} className={styles.subSeperatorSmall}/>
              </div>
              }
          <div className={styles.subsectionContainer}>
            <div className={styles.subsectionContainerLeft}>
              <div style={{ width:"100%"}}>
                <p className={styles.subsectionText} style={{paddingLeft:"2px"}}>
                  A solution to the&nbsp;
                </p>
                <p className={styles.subsectionText} style={{fontWeight:"600"}}>
                  modern trap*&nbsp;
                </p>
                <p className={styles.subsectionText} style={{fontWeight:"600",textShadow:(windowSize.width>480)?"0px 2px 8px rgba(250, 243, 214, 0.50)":"0px 1px 6px rgba(250, 243, 214, 0.50)"}}>
                  <br/>embrace life-long fulfillment.
                </p>
              </div>
            
              <p className={styles.subsectionSubtext}  style={{paddingLeft:(windowSize.width>1024)?"3px":"1px"}}>
                  Events, Seminars, Socials, Dinners, and more!
              </p>
            </div>
            {(windowSize.width>1024)&&
            <div style={{alignSelf:"center", width:"15%"}}>
              <div className={styles.subsectionSeperator}/>
            </div>
            }

            
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
                <p className={[styles.subsectionSubtext, styles.subsectionLine].join(' ')} style={{fontWeight:"500", }}>
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
          
          {(windowSize.width>480)&&
          <div className={styles.seperatorWrapper} style={{marginLeft:"auto", top:"-1.125rem"}}>
              <Image src={SeperatorAlt} alt="seperator" width={610} height={34.5} className={styles.seperatorBottom}/>
          </div>
          }
          {(windowSize.width>768)?
          <motion.div     
          initial={{x:0}}
          animate={{x:`${carousel1Position*36}%`}}   
          transition={{
            type:"spring",
            bounce:0,
            duration:1
          }}
          className={styles.carouselContainer}>
            <div className={styles.carouselItemContainer}
            style={{
              backgroundImage: `url(${Carousel11.src})`,
            }}>
            </div>  
            <div className={styles.carouselItemContainer}
              style={{
                backgroundImage: `url(${Carousel12.src})`,
              }}>
  
            </div>
            <div className={styles.carouselItemContainer}
              style={{
                backgroundImage: `url(${Carousel13.src})`,
              }}>

            </div>
            <div className={styles.carouselItemContainer}
              style={{
                backgroundImage: `url(${Carousel14.src})`,
              }}>
            </div>
          </motion.div>
          :
          <motion.div     
          className={styles.carouselContainer}>
       

              <div className={styles.carouselItemContainer}
              style={{
                backgroundImage: `url(${Carousel11.src})`,
              }}>
              </div>  
              <div className={styles.carouselItemContainer}
                style={{
                  backgroundImage: `url(${Carousel12.src})`,
                }}>
    
              </div>
              <div className={styles.carouselItemContainer}
                style={{
                  backgroundImage: `url(${Carousel13.src})`,
                }}>

              </div>
              <div className={styles.carouselItemContainer}
                style={{
                  backgroundImage: `url(${Carousel14.src})`,
                }}>
              </div>
         
      
          </motion.div>}
          {(windowSize.width>768)&&
          <div className={styles.sliderContainer}>
              <div style={{position:"relative"}}>
                <Slider type={"left"} handleSlide={(val)=>setCarousel1Position(val)}/>
              </div>
              <div style={{position:"relative"}}>
                <Slider type={"right"} handleSlide={(val)=>setCarousel1Position(val)}/>
              </div>
          </div>
          }
        </section>

        {(windowSize.width>768)&&<>

        <div className={styles.seperatorSubWrapper} style={{marginRight:"auto", left:"2.75rem"}}>
            <Image src={Plus} alt="seperator" width={100} height={34.5} className={styles.subSeperator}/>
        </div>
        <div className={styles.seperatorWrapper} style={{marginLeft:"auto"}}>
            <Image src={Seperator} alt="seperator" width={610} height={34.5} style={{transform:"rotate(180deg)", top:"-1.125rem",right:"-1.125rem"}}
            className={styles.seperatorBottom}/>
        </div>
        <div style={{position:"relative", marginRight:"auto", transform:`translateX(-12vw) translateY(${windowSize.width>1024?"-17.25vh":"-10rem"})`}}>
          <div style={{position:"fixed"}}>
            <Image src={PropVector} width={windowSize.width*1.165} height={windowSize.height} alt="gradient"/>
          </div>
        </div>
        </>
        }


        <section className={styles.applyContainer}>
    
          <div className={styles.applyWrapperLeft}>
            <div className={styles.applyHeroContainer}>
                  <div style={{width:"100%", textAlign:(windowSize.width>480)?"left":"left"}}>
                    <p className={styles.applyHeroText}>
                      {`"`}{`We didn't re-invent `}
                    </p>
                    
                    <p className={styles.applyHeroText} style={{fontWeight:"700"}}>
                      lifestyle,&nbsp;{(windowSize.width>1024 && windowSize.width < 1280)?"":<br/>}
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
                  <div className={styles.applySubtextContainer}>
                    <p className={styles.subsectionSubtext}>
                      Escape the rat race and build&nbsp; 
                    </p>
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      wealth&nbsp;
                    </p>
                    <p className={styles.subtext}>
                      with a&nbsp;{(windowSize.width>1024 && windowSize.width < 1280)&&<br/>}
                    </p>
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      community&nbsp;
                    </p>
                    {(windowSize.width > 480 )?
                    <p className={styles.subtext}>
                      you {(windowSize.width>1024 && windowSize.width < 1280)?"":<br/>} can&nbsp;
                    </p>
                    :
                    <p className={styles.subtext}>
                      you can&nbsp;
                    </p>
                    }
                    <p className={styles.subtext} style={{fontWeight:500}}>
                      trust
                    </p>
                    <p className={styles.subtext}>
                      .
                    </p>
                  </div>
                  {(windowSize.width>768)? // refactor this
                  <div style={{display:"flex", gap:"27px", paddingTop:"26px", transform:"translateX(-3px)"}}>
                      <span className={styles.applyTodayButton}>
                          Apply Today
                      </span>
                      <span className={styles.explorePrevButton}>
                          Explore Previous Events
                      </span>
                  </div>:
                  <div className={styles.applyButtonContainer}>
                      <span className={styles.applyTodayButton}>
                          Apply Today
                      </span>
                      <span className={styles.explorePrevButton}>
                          Explore Previous Events
                      </span>
                  </div>
                  }
                <div>
              </div>
            </div>
          </div>

          <div className={styles.applyWrapperRight}>
            <div style={{display:(windowSize.width <= 1280)?"none":"block",position:"relative", marginRight:"auto", left:(windowSize.width>1280)?".625rem":"1.5rem",top:"-1.35rem"}}>
              <Image src={Corner} alt="corner" width={42} height={42} className={[styles.cornerVector, styles.cornerSubVector].join(' ')}/>
            </div>
              <div className={styles.applyVideoContainer}>
                  video here.
              </div>
            <div style={{display:(windowSize.width>1280)?"block":"none",position:"relative", marginLeft:"auto", right:(windowSize.width>1280)?".875rem":"-1.5rem",bottom:"-1.65rem"}}>
              <Image src={Corner} alt="corner" width={42} height={42} className={[styles.cornerVectorAlt, styles.cornerSubVector].join(' ')}/>
            </div>
          </div>
          
        </section>

        {(windowSize.width>1024)&&
        <div className={styles.seperatorWrapper} style={{marginRight:"auto"}}>
            <Image src={SeperatorLong} alt="seperator" width={(windowSize.width>1280)?834:500} height={35} 
            style={{transform:"translateX(104.125%)", top:"-1.1rem"}}
            className={styles.seperatorBottom}/>
        </div>
        }

  
        <section className={styles.propositionTopContainer}>
          {(windowSize.width>768)&&
          <div className={propStyles.propositionTopHeader}>
            <p className={propStyles.propositionTopHeaderText}>
              we are truka.
            </p>
            <p className={propStyles.propositionTopHeaderSubtext}>
              Learn the skills to build your future.
            </p>
          </div>
        }
          <div className={propStyles.propositionTopContent}>
              <div className={propStyles.propositionTopLeft}>
                <div className={propStyles.topLeftContent}>
                  {(windowSize.width>1024)?
                  <div style={{display:"flex", gap:"18.5px", alignItems:"center", transform:"translateX(-.125rem)"}}>
                      <div className={propStyles.propositionIcon}>
                        1. 
                      </div>
                      <p className={propStyles.propositionIconText}>
                        Learn
                      </p>
                  </div>:
                  <div style={{display:"flex",gap:"1rem", alignItems:"center", transform:"translateX(0rem)", paddingLeft:"1.175rem"}}>
                      <div className={propStyles.propositionIcon}>
                        1. 
                      </div>
                      <p className={propStyles.propositionIconText}>
                        Learn
                      </p>
                  </div>
                  }
                  <div style={{paddingLeft:(windowSize.width>1024)?".25rem":"1.125rem",paddingTop:"28.47px", display:"flex", gap:(windowSize.width>480)?"17.42px":"8px", alignItems:"center"}}>
                    <Image src={Ikigai} alt="ikigai" width={(windowSize.width>480)?67:60} height={(windowSize.width>480)?57:50} style={{}}/>
    
                    <div style={{width:"100%", paddingTop:(windowSize.width>768)?"0":".425rem"}}>
                      <p className={propStyles.propositionTitle}>
                        Learn your&nbsp;
                      </p>
                      <p className={propStyles.propositionTitle}
                      style={{borderBottom:(windowSize.width>768)?"3px solid #E3A77C":"2px solid #E3A77C"}}>
                        Ikigai
                      </p>
                    </div>
                  </div>
                  <div className={propStyles.topLeftContext}>
                    {(windowSize.width>480)?
                    <div style={{width:"100%"}} className={styles.subsectionSubtextAlt}>
                        From the principles of&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        Ikigai
                      </p>
                        ,&nbsp;position{(windowSize.width>768)&&<br/>} your life to get&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        paid&nbsp;
                      </p>
                        for{(windowSize.width<=768)&&<br/>} what you&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        love&nbsp;
                      </p>
                        to{(windowSize.width>768)&&<br/>} do, what the&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        world needs
                      </p>
                      , and what{(windowSize.width>768)&&<br/>} {"you're"}&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        passionate&nbsp;
                      </p>
                      about.
                    </div>:
                    <div style={{width:"100%", display:"inline-block", whiteSpace:"inherit", paddingRight:"1.5em"}} className={styles.subsectionSubtextAlt}>
                        From the principles of&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        Ikigai
                      </p>
                        ,&nbsp;position your life to get&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        paid&nbsp;
                      </p>
                        for what you&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        love&nbsp;
                      </p>
                        to do, what the&nbsp;
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                        world needs,&nbsp;
                      </p>
  

                      and what {"you're"}
             
                    
                      <p className={styles.subtext} style={{fontWeight:"500"}}>
                      &nbsp;passionate&nbsp;
                      </p>
                      about.
                      </div>
             
                  }
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
                  <div className={propStyles.topRightImage}
                  style={{
                    backgroundImage:`url(${IkigaiPhoto.src})`
                  }}>
                    <div className={propStyles.exploreImageButton}>
                        <p className={propStyles.exploreImageText}>
                            Explore Skilled Professionals
                        </p>
                      {(windowSize.width>480 && windowSize.width<769 || windowSize.width>1024)&&
                        <svg xmlns="http://www.w3.org/2000/svg" width={"28"} height={"18"} viewBox="0 0 28 18" fill="none">
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FAF3D6"/>
                        </svg>
                      }
                    </div>
         
                  </div>
              </div>
          </div>
        </section>
        
 
        {(windowSize.width>1439)&&<>
        <div className={styles.seperatorWrapper} style={{marginLeft:"auto", transform:`translateY(-15%)`, display:(windowSize.width>1280)?"block":"none"}}>
          <Image src={SeperatorLongAlt} alt="seperator" width={786} height={35} 
          className="seperator" style={{transform:"translateX(-8%)"}}/>
        </div>
        <div style={{position:"relative"}}>
          <div className={propStyles.propositionSeperator}/>
        </div>
        </>
        }
              
 
        
        <section className={styles.propositionMidContainer}>
          <div className={propStyles.midWrapper}>
            <div className={propStyles.midWrapperLeft}>
              <div className={propStyles.midImageLeft}
                 style={{
                  backgroundImage:`url(${Skills1.src})`
                }}>
   
              </div>
              <div className={propStyles.midImageRight}
                 style={{
                  backgroundImage:`url(${Skills2.src})`
                }}>
  
              </div>
            </div>
            <div className={propStyles.midWrapperRight}>

              <div className={propStyles.midWrapperContext}>
                <div style={{display:"flex", gap:"15.75px", alignItems:"center"}}>
                    <div className={propStyles.propositionMidIcon}>
                      2.
                    </div>
                    <p className={propStyles.midIconText}>
                      advance
                    </p>
                </div>
                <div className={propStyles.midTitleContainer}>
                  <div style={{position:"relative", display:"inline", paddingRight:(windowSize.width>480)?"1.75rem":"1.25rem"}}>
                    <Image src={Trees} alt="trees" width={(windowSize.width>480)?75.5:65}height={(windowSize.width>480)?51.5:44}/>
                  </div>
                  <div style={{width:"100%"}} className={propStyles.midTitleText}>
                      Level up your<br/>
                    <p className={propStyles.midTitleText} 
                    style={{borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7", paddingBottom:(windowSize.width>480)?".4rem":".125rem"}}>
                      mindset
                    </p>
                    &nbsp;and&nbsp;
                    <p className={propStyles.midTitleText} 
                      style={{borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7", paddingBottom:(windowSize.width>480)?".4rem":".125rem"}}>
                      skillset.
                    </p>
                  </div>
                </div>
                <div className={[propStyles.midRightContext, styles.subsectionSubtextAlt].join(' ')}
                style={{paddingTop:(windowSize.width>768 || windowSize.width <= 480)?"1.625rem":"3rem"}}>
                  <div style={{width:"100%"}}>
                  Get to where you want to be. Become{<br/>} the&nbsp;
                    <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500"}}>
                      master&nbsp;
                    </p>
                    of your&nbsp;
                    <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500"}}>
                      craft
                    </p>
                    .
                  </div>
                
                </div>
                <div className={[propStyles.midRightContext, styles.subsectionSubtextAlt].join(' ')}
                style={{paddingTop:(windowSize.width>768)?"2rem":".625rem"}}>
                    Access our&nbsp;
                    <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500"}}>
                      exclusive resource vault.
                    </p>
                </div>

              </div>

            </div>

          </div>
          <div className={propStyles.midWrapperCarousel}>
            <div className={propStyles.midCarouselImage}>
           
            </div>
            <div className={propStyles.midCarouselImage}>
              <p className={styles.placeholderText}>
                image carousel 2.
              </p>
            </div>
            <div className={propStyles.midCarouselImage}>
         
            </div>
          </div>
        </section>

        {(windowSize.width>768)&&<>
        <div className={styles.seperatorWrapper} style={{transform:"translateY(-1.1rem)", marginRight:"auto"}}>
          <Image src={Seperator5} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(3.875%)"}}/>
        </div>
        <div className={styles.seperatorSubWrapper} style={{marginLeft:"auto", right:"6.125%", transform:"translateY(.75px)"}}>
            <Image src={Plus} alt="seperator" width={34.5} height={34.5} className={styles.subSeperator}/>
        </div>
        </>
        }
    



        <section className={styles.propositionBottomContainer}>
          <div className={propStyles.propositionBottomWrapper}>
            <div className={propStyles.propositionBottomContent}>
              <div className={propStyles.bottomContentLeft}>
                <div className={propStyles.bottomContentContext}>
                  <div style={{display:"flex", alignItems:"center", gap:"15.75px"}}>
                    <div className={propStyles.bottomPropositionIcon}>
                      3.
                    </div>
                    <p className={propStyles.bottomIconText}>
                      excel
                    </p>
                  </div>
                  <div className={propStyles.bottomTitleContainer} >
                    <div>
                      <Image src={People} alt={"people"} width={(windowSize.width>480)?75:61} height={(windowSize.width>480)?88:72}/>
                    </div>
                    <div className={propStyles.bottomTitleWrapper} style={{width:"100%", transform:(windowSize.width>480)?"translateY(-.25rem)":"translateY(0)"}}>
                      <p className={propStyles.midTitleText}>
                        Co-create with <br/>a&nbsp;
                      </p>
                      <p className={propStyles.midTitleText} style={{borderBottom:"3px solid #7978F8", paddingBottom:".325rem"}}>
                        community
                      </p>
                      
                    </div>
                  </div>
                  <div className={[propStyles.bottomSubtextContainer, styles.subsectionSubtextAlt].join(' ')}>
                    <div style={{width:"100%", display:"inline"}}>
                      Your not in this&nbsp;
                      <p className={[styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')} style={{fontWeight:"500"}}>
                        journey&nbsp;
                      </p>
                      alone. Network<br/>with like-minded individuals to create<br/>something spectacular.
                    </div>
                  </div>
                </div>
              </div>
              <div className={propStyles.bottomContentRight}>
                <div className={propStyles.bottomRightImage}
                  style={{
                    backgroundImage:`url(${CommunityPhoto.src})`
                  }}>
                </div>
              </div>
            </div>
            {(windowSize.width>1439)?
            <motion.div className={propStyles.propositionBottomCarousel}
            initial={{x:0}}
            animate={{x:`${cardPosition*7.135}vw`}}
            transition={{
              type:"spring",
              bounce:0,
              duration:1
            }}>
              <Card name={"Andrew Schlag"} index={0} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Leo Valentino"} index={1}  width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Conner Rue"} index={2} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Junior Gudino"} index={3} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Henry Zheng"} index={4} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Alexis Morgan"} index={5} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Sara Sandoval"} index={6} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
            </motion.div>:
               <motion.div     
               className={propStyles.propositionBottomCarouselAlt}>
            
            <Card name={"Andrew Schlag"} index={0} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Leo Valentino"} index={1}  width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Conner Rue"} index={2} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Junior Gudino"} index={3} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Henry Zheng"} index={4} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Alexis Morgan"} index={5} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
              <Card name={"Sara Sandoval"} index={6} width={windowSize.width} handlePosition={(val)=>setCardPosition(val)}/>
           
               </motion.div>
            }
            <div className={propStyles.caseStudiesButton}>
              Truka Case Studies
              {(windowSize.width>480)&&
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FAF3D6"/>
              </svg>
            }
            </div>
          </div>
      
        </section>

        {(windowSize.width>480)&&
        <div className={styles.seperatorWrapper} style={{transform:"translateY(-1.075rem)", marginLeft:"auto"}}>
          <Image src={Seperator6} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(-104.75%)"}}/>
        </div>
        }

        <section className={styles.testimonialContainer}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialHeaderContainer}>
              <p className={styles.testimonialHeaderText}>
                Real people,{windowSize.width>480?"":<br/>} real experiences.
              </p>
              <div className={styles.testimonialHeaderSubtext}>
 
                See how&nbsp;
                <p className={styles.testimonialHeaderSubtext} style={{fontWeight:"500"}}>
                  Truka&nbsp;
                </p>
                 has changed the lives for many.
              </div>
            </div>
            {(windowSize.width>480)?
            <motion.div 
            initial={{x:0}}
            animate={{x:`${testimonialPosition*50}vw`}}
            transition={{
              type:"spring",
              bounce:0,
              duration:1
            }}
            className={styles.testimonialCardWrapper}>
              <Testimonial 
                quote={"Every entrepreneur has something to gain from the Truka community."}
                name={"Conner Rue"} 
                title={"CEO of Capable Investments"}/>
              <Testimonial 
                quote={"What Truka gave me is a feeling of belonging and community"}
                name={"Alessia Nezhati"} 
                title={"Co-Founder of Ideaify"}/>
              <Testimonial 
                quote={"I love what Truka stands for."} 
                name={"Row Gallegos"} 
                title={"Founder of Noire Prosperity"}/>
            </motion.div>:
            <div 
            initial={{x:0}}
            className={styles.testimonialCardWrapper}>
              <Testimonial 
                quote={"Every entrepreneur has something to gain from the Truka community."}
                name={"Conner Rue"} 
                title={"CEO of Capable Investments"}
                width={windowSize.width}/>
              <Testimonial 
                quote={"What Truka gave me is a feeling of belonging and community"}
                name={"Alessia Nezhati"} 
                title={"Co-Founder of Ideaify"}
                width={windowSize.width}/>
              <Testimonial 
                quote={"I love everything that Truka stands for, it's a must try."} 
                name={"Row Gallegos"} 
                title={"Founder of Noire Prosperity"}
                width={windowSize.width}/>
            </div>
          }
          {(windowSize.width > 1024)&&
            <div className={styles.testimonialSliderContainer}>
              <span className={styles.testimonialSlide}
              style={{backgroundColor:(testimonialPosition===1)?"#F87719":"#d9d9d9"}}
              onClick={()=>setTestimonialPosition(1)}/>
              <span className={styles.testimonialSlide}
               style={{backgroundColor:(testimonialPosition===0)?"#F87719":"#d9d9d9"}}
               onClick={()=>setTestimonialPosition(0)}/>
              <span className={styles.testimonialSlide}
               style={{backgroundColor:(testimonialPosition===-1)?"#F87719":"#d9d9d9"}}
               onClick={()=>setTestimonialPosition(-1)}/>

            </div>
            
          }

          </div>
        </section>
    
        {(windowSize.width>768)&&
        <div className={styles.seperatorWrapper} style={{transform:"rotate(180deg) translateY(-1.1rem)", marginRight:"auto"}}>
          <Image src={Seperator6} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(-107.5%)"}}/>
        </div>
        }




        <section className={styles.pricingContainer}>


         { /*<div className={styles.foregroundWrapper}/>*/}
          <div className={styles.pricingForeground}>
            <Image src={Waves2} 
              fill
              objectFit='contain'
              alt="foreground"
              className={styles.pricewaves}
              />
          </div>

          <div style={{position:"relative", transform:`translateX(0)`}}>
            <Image src={TextCircle} width={288} height={288} alt={"text-circle"} className={priceStyles.textCircle}/>
          </div>
          
 
          <div className={priceStyles.pricingTopContainer}>
            
            
            <div className={priceStyles.pricingLogoContainer}>
              <div className={priceStyles.pricingHeaderContainer}>
                <p className={priceStyles.pricingHeaderText}>
                  Pricing, made easy.
                </p>
              </div>
              <p className={priceStyles.pricingLogoText}>
                truka.
              </p>
              <div style={{marginLeft:"auto", marginRight:"auto"}} className={priceStyles.pricingLogoSubtext}>
                members club
                <div style={{display:"inline", transform:(windowSize.width>480)?"translateY(-1.325rem) translateX(.425rem)":"translateY(-1.125rem) translateX(0)", position:"absolute"}}>
                  <p className={priceStyles.pricingLogoTrademark}>&trade;</p>
                </div>
              </div>
            </div>
            {(windowSize.width>1439)?
            <div className={styles.contextPriceWrapper}>
              <div className={(windowSize.width>480)?styles.contextButtonWrapper:styles.contextButtonWrapperSmall}
                style={{transform:"scale(1.025) translateY(-.5rem) translateX(.55rem)"}}>
                  <InfoButton text={'only accepting 50 applicants'} type={'price'} width={windowSize.width}/>
              </div>
            </div>:
              <div 
              style={{display:"visible", fontWeight:500
              ,fontSize:"18px", position:"relative", marginLeft:(windowSize.width>1024)?"0":"1rem"}}
              className={[styles.contextButtonContainer, styles.contextPrice].join(' ')}>
                  <Image src={star} alt="star" 
                  width={18} height={18}
                  className={styles.contextPriceStar}/>
                  ONLY ACCEPTING 50 APPLICANTS
              </div>
          }
          </div>
          {(windowSize.width>810)&&
            <div style={{position:"relative", marginLeft:"auto", right:(windowSize.width>1024)?"19%":"20%", top:(windowSize.width>1024)?"9.375vh":"-.75rem"}}>
                <div className={priceStyles.packageSale}>
                    20% off
                </div>
            </div>
          }
          <div className={priceStyles.packageContainer}>
            <Package type={1} handlePayment={()=>handlePayment("https://buy.stripe.com/14k5m49U01pK4ne144")}/>
            {(windowSize.width<=768)&&
              <div style={{position:"relative", width:(windowSize.width<=480)?"90%":"100%",display:"flex", marginLeft:"auto",marginRight:"auto"}}>
                  <div className={priceStyles.packageSale} style={{position:"relative", marginLeft:"auto", marginRight:".5rem"}}>
                      20% off
                  </div>
              </div>
            }
            <Package type={2} handlePayment={()=>handlePayment("https://buy.stripe.com/28o8ygd6c2tO4ne001")}/>
          </div>
          
        </section>
    

        <section className={styles.membershipContainer}>
          <div className={styles.membershipHeaderContainer}>
            Membership Benefits
          </div>
          <div className={styles.membershipCardContainer}>
            {(windowSize.width>768 || windowSize.width <= 480)?<>
            <div className={styles.membershipCardRow}>
              <BenefitCard title={"Community Support"} 
              text={`Hundreds of different members across all industries and levels here to support you in all areas of life.`}
              image={SupportPhoto}/>
              <BenefitCard title={"Truka University Access"} 
              text={`High Quality Education from industry experts, time-tested strategies, and modern day tactics.`}
              image={University}/>
              <BenefitCard title={"Truka Resource Vault"} 
              text={`Access to Success Frameworks, Tools, and Resources Custom made for Truka Club Members.`}
              image={Vault}/>
            </div>
            <div className={styles.membershipCardRow}>
              <BenefitCard title={"Private Member Calls"} 
              text={"2-3x a Week Calls & Trainings, Guided Support, and Framework Walkthroughs."}
              image={Club}/>
              <BenefitCard title={"Exclsive Community Access"} 
              text={"Full Access to The Truka Members Club™ community group, the App, and all Truka Courses."}
              image={""}/>
              <BenefitCard title={"One-on-One Mentoring"} 
              text={"Exclusive mentoring to advance your career to the next level."}
              image={Mentoring}/>
            </div>
            </>:
            <>
              <div className={styles.membershipCardRow}>
                <BenefitCard title={"Community Support"} 
                text={`Hundreds of different members across all industries and levels here to support you in all areas of life.`}
                image={SupportPhoto}/>
                <BenefitCard title={"Truka University Access"} 
                text={`High Quality Education from industry experts, time-tested strategies, and modern day tactics.`}
                image={University}/>

              </div>
              <div className={styles.membershipCardRow}>
              <BenefitCard title={"Truka Resource Vault"} 
                text={`Access to Success Frameworks, Tools, and Resources Custom made for Truka Club Members.`}
                image={Vault}/>
                <BenefitCard title={"Private Member Calls"} 
                text={"2-3x a Week Calls & Trainings, Guided Support, and Framework Walkthroughs."}
                image={Club}/>
             
              </div>
              <div className={styles.membershipCardRow}>
              <BenefitCard title={"Exclsive Community Access"} 
                text={"Full Access to The Truka Members Club™ community group, the App, and all Truka Courses."}
                image={""}/>
                <BenefitCard title={"One-on-One Mentoring"} 
                text={"Exclusive mentoring to advance your career to the next level."}
                image={Mentoring}/>
              </div>
            </>
            }
          </div>
          
        </section>


        <section className={styles.faqsContainer}>
          <div className={styles.faqsWrapper}>
            <div className={styles.faqsHeaderContainer}>
              <p className={styles.faqsHeaderText}>
                Frequently Asked Questions
              </p>
              {(windowSize.width>1280)&&
              <div className={styles.seperatorWrapper} style={{top:"0.25rem"}}>
                <Image src={FaqsSeperator} width={541.5} height={35.5} alt={"seperator"}/>
              </div>
            }
            </div>
            <div className={styles.faqsContentContainer}>
              <Faqs title={"What is Truka?"}/>
              <Faqs title={"Why Truka?"}/>
              <Faqs title={"How can i get a membership with Truka?"}/>
              <Faqs title={"How can I pay for my membership?"}/>
              <Faqs title={"Will the membership be available internationally?"}/>
              <Faqs title={"Any additional questions?"}/>
            </div>
          </div>
        </section>



        <section className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeftContent}>
              <div style={{width:"100%"}}>
                <p className={styles.footerTitle}>
                  Attend our next webinar for&nbsp;
                </p>
                <p className={styles.footerTitle} style={{borderBottom:"1px solid #F87719", paddingBottom:".1rem"}}>
                  free
                </p>
              </div>

              <p className={styles.footerSubtext}>
                See if Truka is right for you.
              </p>
              <span className={styles.footerButton}>
                Get Started
               
              </span>
            </div>
            <div className={styles.footerImageContainer}>
                <p className={styles.placeholderText} 
                style={{transform:"translateX(-27.5%)"}}>
                  Footer Image
                </p>
            </div>
          </div>
        </section>
        {(windowSize.width>768 || windowSize.width <= 480)&&<>
     </>}

      

    </main>
    </>
  )
}
