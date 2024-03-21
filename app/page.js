'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from './components/navbar'
import Navpane from './components/Navpane'
import Package from './components/Package'
import BenefitCard from './components/BenefitCard'
import v2styles from '../styles/v2.module.scss' 
import styles from '../styles/page.module.scss'
import eduStyles from '../styles/education.module.scss'
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

import Trees from '../public/assets/trees.svg'
import star from '../public/assets/star.svg'
import Waves2 from '../public/assets/waves2.svg'
import TextCircle from '../public/assets/textcircle.svg'
import wave from '../public/assets/orangewave.svg'
import waveAlt from '../public/assets/waveAlt.svg'
import Ikigai from '../public/assets/ikigai.svg'
import SlideButton from '../public/assets/slidearrow.svg'
import People from '../public/assets/people.svg'
import IkigaiPhoto from '../public/photos/pricing.jpg'
import Skills1 from '../public/photos/skills-1.jpeg'
import Skills2 from '../public/photos/skills-2.jpeg'
import CommunityPhoto from '../public/photos/community.jpeg'
import Features from '../public/assets/features.svg'
import Category1 from '../public/assets/category1.svg'
import Notion1 from '../public/assets/notion1.svg'
//import Notion2 from '../public/assets/notion2.png'
//import Notion3 from '../public/assets/notion3.png'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'

function Category({name}) {
  return (
    <div className={eduStyles.educationSeperatorCategory}>
        {name}
      
    </div>
  )
}
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
        
        
          <section className={v2styles.contentContainerV2}>

              <div className={v2styles.contentContainerHeroV2}>
  
                <div className={v2styles.heroHeaderContainer}>
                  <p className={v2styles.heroHeaderV2}>
                    the truka experience - success kit
                  </p>
                </div>
                <div className={v2styles.heroTextContainerV2}>
                  <p className={v2styles.heroTextV2}>
                    Unleash your {(windowSize.width)<1025&&<br/>}
                  </p>
                  <p className={v2styles.heroTextV2} style={{textShadow:(windowSize.width>480)?"0px 0px 6px #FAE691":"0px 1px 6px rgba(250, 243, 214, 0.50)"}}>
                    Potential.
                  </p>
                </div>
                <div className={v2styles.heroSubtextContainerV2}>
                  <p className={v2styles.heroSubtextV2}>
                    Transform Chaos into Clarity, Isolation into Community, and Potential into Achievement with the Truka Success Kit.
                  </p>
                </div>
                <div className={v2styles.heroButtonContainerV2}>
                  <div className={v2styles.heroButtonApplyV2}>
                    <div>
                      <Image 
                          style={{position:"absolute", transform:"translateX(2.65rem) translateY(-.5rem)"}}
                          src={Star} alt="star-black" 
                          width={(windowSize.width>480)?17:16} height={(windowSize.width>480)?17:16}
                      />
                    </div>
                    <p className={v2styles.heroButtonApplyTextV2}>
                
                      Get Instant Access Today
                    </p>

                  </div>
                </div>
      
              </div>
              <div className={v2styles.contentContainerAltV2}>
                  <div className={v2styles.contentVideoContainerV2}>

                  </div>                  
              </div>
       
          </section>

            {/* section 1 */}

          <section className={eduStyles.educationContainer}>
              <div className={eduStyles.educationForegroundAlt}>
                <Image src={waveAlt} 
                  fill
                  objectFit='contain'
                  alt="foreground"
                  className={eduStyles.waveVectorAlt}
                  />
              </div>
            <div className={eduStyles.educationTopContainer}>
              <div className={eduStyles.educationTopHeader}>
                why the truka success kit
              </div>
              <div className={eduStyles.panelContainer}>
           
                <div style={{position:"relative", transform:`translateX(0%)`, zIndex:"0", marginRight:"auto"}}>
                  <Image src={TextCircle} width={244} height={244} alt={"text-circle"} className={eduStyles.textCircleV2}/>
                </div>
             
     
                <div className={eduStyles.educationTopPanel}>
       
                  <p className={eduStyles.educationPanelText}>
                    Enrich Your Productivity
                  </p>
                </div>
                
                <span className={eduStyles.educationAccessButton}>
                  Get Instant Access
                  {(windowSize.width>480 && windowSize.width<769 || windowSize.width>1024)&&
                    <svg xmlns="http://www.w3.org/2000/svg" width={"28"} height={"18"} viewBox="0 0 28 18" fill="none">
                    <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#0a0a0a"/>
                    </svg>
                  }
                </span>
                     
              </div>

            
          
            </div>
            
            <div className={eduStyles.educationSeperator}>
              <Image src={Plus} width={35} height={35} className={eduStyles.plusSymbol}/>
              <div className={eduStyles.educationSeperatorWrapper}>
                <Category name={"Foundation"}/>
                <Category name={"Growth"}/>
                <Category name={"Connection"}/>

              </div>
              <Image src={Plus} width={35} height={35} className={eduStyles.plusSymbol}/>
          
            </div>
            
            
            <div className={eduStyles.educationBottomContainer}>
              
              <div className={eduStyles.educationForeground}>
                <Image src={wave} 
                  fill
                  objectFit='contain'
                  alt="foreground"
                  className={eduStyles.waveVector}
                  />
              </div>
            
                <div className={eduStyles.educationBottomWrapper}>
                  <div className={eduStyles.educationTextContainer} style={{paddingLeft:".2rem"}}>
                    <p className={eduStyles.educationTextHeader}>
                      Foundation
                    </p>
                    <div className={eduStyles.educationTitleContainer} style={{paddingTop:"1rem"}}>
                      <p className={eduStyles.educationTitle}>
                          Live a more<br/>
                      </p>
                      <p className={eduStyles.educationTitle} style={{color:"#FF8E3C"}}>
                          productive life.
                      </p>
                    </div>
                    <div className={eduStyles.educationSubtextContainer} 
                    //style={{paddingTop:"1.975rem"}}
                    style={{paddingTop:"1.45rem"}}
                    >
                      <p className={eduStyles.educationSubtext}>
                      Streamline your productivity with the&nbsp;
                      </p>
                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Truka Life Manager Notion Template.
                      </p>
                    </div>
                  </div>
                  <div className={eduStyles.educationWrapperImageTop}>

                  </div>
                </div>

                <div className={eduStyles.educationBottomWrapperAlt} style={{marginTop:"5.75rem"}}>
                  <div className={eduStyles.educationWrapperImageMid}>

                  </div>
                  <div className={eduStyles.educationTextContainer} 
                  style={{marginBottom:".5rem", paddingLeft:".5rem", minWidth:"36.75%"}}>
                    <p className={eduStyles.educationTextHeader}>
                      Growth
                    </p>
                    <div className={eduStyles.educationTitleContainer} 
                    style={{paddingTop:"0.72625rem"}}
                    //style={{paddingTop:".75rem"}}
                    >
                      <p className={eduStyles.educationTitle}>
                          Network and Grow within a&nbsp;
                      </p>
                      <p className={eduStyles.educationTitle} style={{color:"#7978F8"}}>
                          community.
                      </p>
                    </div>
                    <div className={eduStyles.educationSubtextContainer} 
                    style={{paddingTop:"1.75rem"}}
                      //style={{paddingTop:"1.5rem"}}
                    >
                      <p className={eduStyles.educationSubtext}>
                        Learn and grow within a commnunity of<br/>
                      </p>

                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Like-Minded Entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={eduStyles.educationBottomWrapper} style={{marginTop:"4.78rem"}}>
                  <div className={eduStyles.educationTextContainer} style={{paddingLeft:".2rem"}}>
                    <p className={eduStyles.educationTextHeader}>
                      Connection
                    </p>
                    <div className={eduStyles.educationTitleContainer} 
                    style={{paddingTop:"1.35125rem"}}
                    //style={{paddingTop:"1.5625rem"}}
                    >
                      <p className={eduStyles.educationTitle}>
                          Gain new untapped<br/>
                      </p>
                      <p className={eduStyles.educationTitle} style={{color:"#EC7878"}}>
                          knowledge.
                      </p>
                    </div>
                    <div className={eduStyles.educationSubtextContainer} 
                    style={{paddingTop:"1.35125rem"}}
                     // style={{paddingTop:"1.421875rem"}}
                     >
                      <p className={eduStyles.educationSubtext}>
                      Gain access to the Truka Education Vault and achieve&nbsp;
                      </p>
                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Real-Time Breakthroughs&nbsp;
                      </p>
                      <p className={eduStyles.educationSubtext}>
                        with&nbsp;{/*<br/>*/}
                      </p>
                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Truka Connect Calls.
                      </p>
                    </div>
                  </div>

                  <div className={eduStyles.educationWrapperImageBottom}>

                  </div>
                </div>
            </div>
          </section>


         

       
   
          <section className={v2styles.propositionContainer}>
            <div className={styles.testimonialWrapper}>
                <div className={styles.testimonialHeaderContainer}>
                  <div style={{width:"auto", display:"flex"}}>
        
                    <p className={styles.testimonialHeaderText} style={{
                      textShadow:"0px 0.75px 13.125px rgba(250, 230, 145, 0.60)",
                      fontWeight:"300"}}>
                      Real&nbsp;
                    </p>
                    <p className={styles.testimonialHeaderText}
                    style={{textShadow:"0px 0.75px 13.125px rgba(250, 230, 145, 0.60)",
                    fontWeight:"800"}}>
                      people
                    </p>
                    <p className={styles.testimonialHeaderText} style={{
                      textShadow:"0px 0.75px 13.125px rgba(250, 230, 145, 0.60)",
                      fontWeight:"300"}}>
                      ,{windowSize.width>480?"":<br/>} Real&nbsp;
                    </p>
                    <p className={styles.testimonialHeaderText}
                      style={{textShadow:"0px 0.75px 13.125px rgba(250, 230, 145, 0.60)",
                      fontWeight:"800"}}>
                      experiences
                    </p>
                    <p className={styles.testimonialHeaderText} style={{
                      textShadow:"0px 0.75px 13.125px rgba(250, 230, 145, 0.60)",
                      fontWeight:"300"}}>
                      .
                    </p>
                  </div>
      
                  <div className={styles.testimonialHeaderSubtext} style={{marginTop:".5rem"}}>
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
              
              <div className={v2styles.propositionHeaderContainer}>
                <p className={v2styles.propositionHeaderTitle}>
                  the truka success kit pathway
                </p>
                <p className={v2styles.propositionHeaderText}>
                  How It Works.
                </p>
              </div>

              <div className={propStyles.propositionTopContent}>
                <div className={propStyles.propositionTopLeft} >
                  <div className={propStyles.topLeftContent}>
                    {(windowSize.width>1024)?
                    <div style={{display:"flex", gap:"18.5px", alignItems:"center", transform:"translateX(0.2rem)"}}>
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
                    <div style={{paddingLeft:(windowSize.width>1024)?".5rem":"1.125rem",paddingTop:"2rem", display:"flex", gap:(windowSize.width>480)?"17.42px":"8px", alignItems:"flex-start"}}>
                      <Image src={Ikigai} alt="ikigai" width={(windowSize.width>480)?67:60} height={(windowSize.width>480)?57:50} style={{transform:"translateY(-.125rem)"}}/>
      
                      <div style={{width:"100%", paddingTop:(windowSize.width>768)?"0":".425rem"}}>
                        <div style={{width:"80%"}}>
                          <p className={propStyles.propositionTitle}>
                            Sign Up for&nbsp;
                          </p>
                          <p className={propStyles.propositionTitle}
                          style={{ 
                            borderBottom:(windowSize.width>768)?"3px solid #E3A77C":"2px solid #E3A77C"}}>
                            Free
                          </p>
                          <p className={propStyles.propositionTitle}>
                            &nbsp;{'&'} Instantly Access the Truka Life Manager
                          </p>
                        </div>
                        <div className={propStyles.topLeftContext} style={{width:"92%"}}>
                          <div className={styles.subsectionSubtextAlt}>
                              It begins with the 
                            <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500"}}>
                              &nbsp;Truka Life Manager<br/> Notion
                            </p>
                         
                              &nbsp;Template, your first step out of the fog of disorganization.
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={propStyles.propositionTopRight}>
                  <div className={v2styles.notionContainerTop}>
                
                    <div className={propStyles.caseStudiesButton}>
                      Get Instant Access
                      {(windowSize.width>480)&&
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                      </svg>
                    }
                    </div>
                  </div>
                </div>
            </div>

            <div className={propStyles.midWrapper}>
              <div className={propStyles.midWrapperLeft}>
                <div className={v2styles.notionContainerMid}
                style={{marginRight:"0", marginLeft:"5.7rem"}}>
                    <div className={propStyles.caseStudiesButton}>
                      Get Instant Access
                      {(windowSize.width>480)&&
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                      </svg>
                    }
                    </div>
                </div>
                {/*
              
                */}
              </div>
              <div className={propStyles.midWrapperRight} style={{marginTop:"1.75rem"}}>

                <div className={propStyles.midWrapperContext}>
                  <div style={{display:"flex", gap:"15.75px", alignItems:"center", paddingRight:".5rem"}}>
                      <div className={propStyles.propositionMidIcon}>
                        2.
                      </div>
                      <p className={propStyles.midIconText}>
                        advance
                      </p>
                  </div>
                  <div className={propStyles.midTitleContainer}>
                    <div style={{
                      position:"relative", display:"inline", paddingRight:(windowSize.width>480)?"1.125rem":"1.25rem"}}>
                      <Image src={Trees} alt="trees" width={(windowSize.width>480)?75.5:65}height={(windowSize.width>480)?51.5:44}
                      style={{transform:"translateY(.425rem)"}}/>
                    </div>
                    <div style={{width:"100%"}} className={propStyles.propositionTitle}>
                        Join the<br/>
                      <p className={propStyles.propositionTitle} 
                      style={{
                      lineHeight:"133%",
                        borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7"}}>
                        Community
                      </p>
                      &nbsp;{'&'}&nbsp;Start<br/>
                      <p className={propStyles.propositionTitle} 
                        style={{
                          paddingBottom:".425rem",
                          lineHeight:"127%",
                          borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7"}}>
                        Learning
                      </p>
                    </div>
                  </div>
                  <div className={[propStyles.midRightContext, styles.subsectionSubtextAlt].join(' ')}
                  style={{paddingTop:(windowSize.width>768 || windowSize.width <= 480)?"4.325rem":"3rem"}}>

                          Step into a realm of continuous growth within <br/>our vibrant community of like-minded <br/>entrepreneurs.
                  </div>
              
                </div>
              </div>
            </div>
           
            <div className={propStyles.propositionTopContent} style={{marginBottom: "12.1625rem"}}>
              <div className={propStyles.propositionTopLeft} style={{justifyContent:"flex-start", paddingLeft:"0rem", paddingTop:"1.5rem", transform:"translateX(-.125rem)"}}>
                <div className={propStyles.topLeftContent}>
  
                    <div style={{display:"flex", alignItems:"center", gap:"15.75px"}}>
                      <div className={propStyles.bottomPropositionIcon}>
                        3.
                      </div>
                      <p className={propStyles.bottomIconText}>
                        connect
                      </p>
                    </div>
                    <div className={propStyles.bottomTitleContainer} >
                      <div style={{alignSelf:"flex-start", paddingTop:".25rem"}}>
                        <Image src={People} alt={"people"} width={(windowSize.width>480)?65:61} height={(windowSize.width>480)?75:72}/>
                      </div>
                      <div className={propStyles.bottomTitleWrapper} style={{width:"100%", transform:(windowSize.width>480)?"translateY(-.25rem)":"translateY(0)"}}>
                        <p className={propStyles.propositionTitle} style={{whiteSpace:"nowrap"}}>
                          Participate in Truka<br/> Connect Calls for&nbsp;<br/>
                        </p>
                        <p className={propStyles.propositionTitle} style={{borderBottom:"3px solid #7978F8"}}>
                          Personalized
                        </p>
                        <p className={propStyles.propositionTitle}>
                          <br/>Guidance
                        </p>

                        <div className={[propStyles.bottomSubtextContainer, styles.subsectionSubtextAlt].join(' ')}>
                          <div style={{width:"95%", marginTop:".75rem"}}>
                            The&nbsp;
                            <p className={[styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')} style={{fontWeight:"500"}}>
                              Truka Connect calls&nbsp;
                            </p>
                            are where your journey accelerates, turning the solitary pursuit of success into a shared voyage.
                          </div>
                        </div>
      
                      </div>
                      
                    </div>
                 
                </div>
     
              </div>
              <div className={propStyles.propositionTopRight}>
                <div className={v2styles.notionContainerBottom}>
                    <div className={propStyles.caseStudiesButton}>
                      Get Instant Access
                      {(windowSize.width>480)&&
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                      </svg>
                    }
                    </div>
                </div>
              </div>   
            </div>

            <div className={v2styles.formSection}>
                <div className={v2styles.formHeaderContainer}>
                  <div style={{display:"inline", width:"auto"}}>
                    <p className={v2styles.formHeaderText}>
                      Ready to transform your
                    </p>
                    <p className={v2styles.formHeaderText} style={{fontWeight:"700"}}>
                      life and business?
                    </p>
                  </div>
                  <div style={{display:"inline", width:"auto", textAlign:"center", transform:"scaleY(.98)"}} className={v2styles.formHeaderSubtext}>
                    <>
                      <p className={styles.subsectionSubtextAlt} style={{letterSpacing:"0.4px"}}>
                        Sign up now to gain instant access to the&nbsp;
                      </p>
                      <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500",letterSpacing:"0.2px"}}>
                        Truka Success Kit&nbsp;
                      </p>
                      <p className={styles.subsectionSubtextAlt} style={{letterSpacing:"0.4px"}}>
                        and embark on your journey to entrepreneurial mastery.
                      </p>
                    </>
                    <div style={{marginTop:"1.75rem"}}>
                      <p className={styles.subsectionSubtextAlt} style={{letterSpacing:"0.4px"}}>
                        Enter your name and email to get&nbsp;
                      </p>
                      <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500",letterSpacing:"0.2px"}}>
                        started.
                      </p>
                    </div>
                  </div>

                </div>

                <div className={v2styles.formContainer}>
                  <div className={v2styles.formWrapper}>
                    <span className={v2styles.formInputField}>
                      <input
                      name="name"
                      className={v2styles.inputField}
                      placeholder={"Name"}
                      />
                    </span>
                    <span className={v2styles.formInputField}>
                      <input
                      name="email"
                      className={v2styles.inputField}
                      placeholder={"Email"}
                      />
                    </span>
                  </div>
                  <div className={v2styles.heroButtonContainerV2} style={{marginTop:"1.5rem"}}>
                    <div className={v2styles.heroButtonApplyV2} style={{background:"#d2854fc5",
                      width:"90%",transform:"translateX(0)", marginLeft:"auto", marginRight:"auto"}}>
                      <div>
                        <Image 
                            style={{position:"absolute", transform:"translateX(2.65rem) translateY(-.5rem)"}}
                            src={Star} alt="star-black" 
                            width={(windowSize.width>480)?17:16} height={(windowSize.width>480)?17:16}
                        />
                      </div>
                      <p className={v2styles.heroButtonApplyTextV2}>
                  
                        Get Instant Access Today
                      </p>

                    </div>
                  </div>
      
                </div>


            </div>

          </section>

              
          <section className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <div className={styles.footerLeftContent}>
                <div style={{width:"100%"}}>
                  <p className={v2styles.propositionHeaderTitle} style={{paddingBottom:"1px"}}>
                    the truka success kit pathway
                  </p>
                  <p className={styles.footerTitle}>
                    Start your success journey<br/>
                  </p>
                  <p className={styles.footerTitle} style={{borderBottom:"1.5px solid #F87719", paddingBottom:".425rem"}}>
                    today.
                  </p>
                </div>

                <div className={[propStyles.caseStudiesButton, v2styles.footerButtonAlt].join(' ')} style={{marginLeft:"0", transform:"translateX(-.5rem)", width:"21rem", gap:"1.5rem", paddingLeft:".5rem", height:"4.45rem"}}>
                      Get Instance Access
                      {(windowSize.width>480)&&
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none" className={v2styles.footerArrow}>
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                      </svg>
                    }
                </div>
              </div>
              <div className={styles.footerImageContainer}>
                  <p className={styles.placeholderText} 
                 >
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
