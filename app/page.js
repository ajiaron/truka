'use client';
import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from './components/navbar'
import v2styles from '../styles/v2.module.scss' 
import styles from '../styles/page.module.scss'
import eduStyles from '../styles/education.module.scss'
import propStyles from '../styles/proposition.module.scss'
import Star from '../public/assets/staralt.svg'
import Plus from '../public/assets/plus.svg'
import Trees from '../public/assets/trees.svg'
import TextCircle from '../public/assets/textcircle.svg'
import wave from '../public/assets/orangewave.svg'
import waveAlt from '../public/assets/waveAlt.svg'
import Ikigai from '../public/assets/ikigai.svg'
import SlideButton from '../public/assets/slidearrow.svg'
import People from '../public/assets/people.svg'
import GHLForm from './components/GHLForm'
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
        <div className={[v2styles.testimonialImage, (name==="Conner Rue")?v2styles.testimonial1:(name==="Alessia Nezhati")?v2styles.testimonial2:v2styles.testimonial3].join(' ')}>

        </div>
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
  const formRef = useRef(null);

  const gaTrackingId = 'G-JP2GFR7QN8';

  const handlePayment = (link) => {
      window.location.href = link
  }
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
                    the truka experience{(windowSize.width>480)&&` - success kit`}
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
                    Transform Chaos into Clarity, Loneliness to Connection, and Possibilities to Reality with the Truka Success Kit.
                  </p>
                </div>
                <div className={v2styles.heroButtonContainerV2}>
                  <span className={v2styles.heroButtonApplyV2}
                  onClick={()=>scrollToForm()}>
                    <div>
                      <Image 
                      className={v2styles.buttonStar}
                          style={{position:"absolute", 
                          transform:(windowSize.width>1024)?"translateX(2.65rem) translateY(-.475rem)":"translateX(0) translateY(-.475rem)"}}
                          src={Star} alt="star-black" 
                          width={(windowSize.width>480)?17:16} height={(windowSize.width>480)?17:16}
                      />
                    </div>
                    <p className={v2styles.heroButtonApplyTextV2}>
                
                      Get FREE Access Now
                    </p>

                  </span>
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
                    Increase your <br/>Productivity and Revenue
                  </p>
                </div>
                
                <span className={eduStyles.educationAccessButton}
                 onClick={()=>scrollToForm()}>
                  Get FREE Access NOW
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
              {(windowSize.width>768)&&
              <>
              <div className={eduStyles.educationSeperatorWrapper}>
                <Category name={"Foundation"}/>
                <Category name={"Growth"}/>
                <Category name={"Connection"}/>

              </div>
                {(windowSize.width>768)&&
              <Image src={Plus} width={35} height={35} className={eduStyles.plusSymbol}/>
                }
              </>
            }
          
            </div>
            
            
            <div className={eduStyles.educationBottomContainer}>
            {(windowSize.width>=840)&&
              <div className={eduStyles.educationForeground}>
                <Image src={wave} 
                  fill
                  objectFit='contain'
                  alt="foreground"
                  className={eduStyles.waveVector}
                  />
              </div>
}       
            
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
                        Truka Life Manager.
                      </p>
                    </div>
                  </div>
                  <div className={eduStyles.educationWrapperImageTop}>

                  </div>
                </div>
                {(windowSize.width>768 && windowSize.width<=1280)?
                <div className={eduStyles.educationBottomWrapper}
                style={{marginTop:"3.75rem"}}>
                
                  <div className={eduStyles.educationTextContainer} 
                  style={{paddingLeft:".2rem"}}>
                    <p className={eduStyles.educationTextHeader}>
                      Growth
                    </p>
                    <div className={eduStyles.educationTitleContainer} 
                    style={{paddingTop:"1rem"}}
                    //style={{paddingTop:".75rem"}}
                    >
                      <p className={eduStyles.educationTitle}>
                          Network and Grow within<br/> a&nbsp;
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
                        Learn and grow within a community of{(windowSize.width>1024)?<br/>:' '}
                      </p>

                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Like-Minded Entrepreneurs.
                      </p>
                    </div>
                  </div>
                  <div className={eduStyles.educationWrapperImageMid}>

                  </div>
                </div>
                :
                <div className={eduStyles.educationBottomWrapperAlt} style={{marginTop:(windowSize.width>768)?"5.75rem":"3.5rem"}}>
                  <div className={eduStyles.educationWrapperImageMid}>

                  </div>
                  <div className={eduStyles.educationTextContainer} 
                  style={{ 
                    marginBottom:".5rem", paddingLeft:(windowSize.width>768)?".5rem":(windowSize.width>480)?"12.5%":"16%", minWidth:(windowSize.width>480 && windowSize.width <=768)?"31.75%":"36.75%"}}>
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
                        Learn and grow within a community of{(windowSize.width>768)?<br/>:' '}
                      </p>

                      <p className={eduStyles.educationSubtext} style={{fontWeight:"500"}}>
                        Like-Minded Entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>
}
                <div className={eduStyles.educationBottomWrapper} style={{marginTop:(windowSize.width>768)?"4.78rem":"3.5rem"}}>
                  <div className={eduStyles.educationTextContainer} style={{paddingLeft:".2rem"}}>
                    <p className={eduStyles.educationTextHeader}>
                      Connection
                    </p>
                    <div className={eduStyles.educationTitleContainer} 
                    style={{paddingTop:(windowSize.width>768)?"1.35125rem":".785rem"}}
                    //style={{paddingTop:"1.5625rem"}}
                    >
                      <p className={eduStyles.educationTitle}>
                          Increase and implement{(windowSize.width>768)?<br/>:' '}
                      </p>
                      <p className={eduStyles.educationTitle} style={{color:"#EC7878"}}>
                          new knowledge.
                      </p>
                    </div>
                    <div className={eduStyles.educationSubtextContainer} 
                    style={{paddingTop:"1.35125rem"}}
                     // style={{paddingTop:"1.421875rem"}}
                     >
                      <p className={eduStyles.educationSubtext}>
                      Gain access to the Truka Education Vault and achieve&nbsp;
                      </p>
                      <p className={eduStyles.educationSubtext} style={{fontWeight:"300"}}>
                        Real-Time Breakthroughs, Increase in Revenue, and Connect with other like-minded entrepreneurs&nbsp;
                      </p>
                      <p className={eduStyles.educationSubtext}>
                        {(windowSize.width < 481) &&<br/>}with&nbsp;{/*<br/>*/}
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
            <div className={v2styles.propositionBackground}>

       
   
              <div className={styles.testimonialWrapper}>
                  <div className={styles.testimonialHeaderContainer}>
                    <div style={{width:"auto"}}>
          
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

                        display:"inline",
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
                      quote={"The Truka Success Kit didn't just organize my day; it reorganized my life."} 
                      name={"Glenn Paramore"} 
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
                      quote={"The Truka Success Kit didn't just organize my day; it reorganized my life."} 
                      name={"Glenn Paramore"} 
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
                      <div style={{display:"flex",gap:"1rem", alignItems:"center", transform:"translateX(0rem)", paddingLeft:"0rem"}}>
                          <div className={propStyles.propositionIcon}>
                            1. 
                          </div>
                          <p className={propStyles.propositionIconText}>
                            Learn
                          </p>
                      </div>
                      }
                      <div style={{paddingLeft:(windowSize.width>1024)?".5rem":"0em",paddingTop:(windowSize.width>1024)?"2rem":"1rem", display:"flex", gap:(windowSize.width>480)?"17.42px":"8px", alignItems:"flex-start"}}>
                      {(windowSize.width>480)&&
                        <Image src={Ikigai} alt="ikigai" width={(windowSize.width>480)?67:60} height={(windowSize.width>480)?57:50} style={{transform:"translateY(-.125rem)"}}/>
                      }
                        <div style={{width:"100%", paddingTop:(windowSize.width>768)?"0":".425rem"}}>
                          <div style={{width:(windowSize.width>768)?"80%":"100%"}}>
                            <p className={propStyles.propositionTitle}>
                              Sign Up Now for&nbsp;
                            </p>
                            <p className={propStyles.propositionTitle}
                            style={{ 
                              borderBottom:(windowSize.width>768)?"3px solid #E3A77C":"2px solid #E3A77C"}}>
                              FREE
                            </p>
                            <p className={propStyles.propositionTitle}>
                              &nbsp;{'&'} Instantly Access the Truka Life Manager
                            </p>
                          </div>
                          <div className={propStyles.topLeftContext} style={{width:(windowSize.width>768)?"92%":"100%"}}>
                            <div className={[styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')}>
                                It begins with the 
                              <p className={[styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')} style={{fontWeight:"500"}}>
                                &nbsp;Truka Life Manager,<br/>
                              </p>
                          
                                your first step out of the fog of disorganization.
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={propStyles.propositionTopRight}>
                    <div className={v2styles.notionContainerTop}>
                  
                      <span className={propStyles.caseStudiesButton}
                       onClick={()=>scrollToForm()}>
                        Get FREE Access Now
                        {(windowSize.width>480)&&
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                          <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                        </svg>
                      }
                      </span>
                    </div>
                  </div>
              </div>

              <div className={propStyles.midWrapper}>
                <div className={propStyles.midWrapperLeft}>
                  <div className={v2styles.notionContainerMid}
                  style={{
                  //  marginRight:"0", 
                  //marginLeft:"5.7rem",
                  }}>
                      <span className={propStyles.caseStudiesButton}
                       onClick={()=>scrollToForm()}>
                        Get FREE Access Now
                        {(windowSize.width>480)&&
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                          <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                        </svg>
                      }
                      </span>
                  </div>
                  {/*
                
                  */}
                </div>
                <div className={propStyles.midWrapperRight} style={{marginTop:(windowSize.width>1024)?"1.75rem":"1.25rem"}}>

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
                    {(windowSize.width>480)&&
                      <div style={{
                        position:"relative", display:"inline", paddingRight:(windowSize.width>480)?"1.125rem":"1.25rem"}}>
                        <Image src={Trees} alt="trees" width={(windowSize.width>480)?75.5:65}height={(windowSize.width>480)?51.5:44}
                        style={{transform:"translateY(.425rem)"}}/>
                      </div>
                    }
                      <div style={{width:"100%"}} className={propStyles.propositionTitle}>
                          Plug into the<br/>
                        <p className={propStyles.propositionTitle} 
                        style={{
                        lineHeight:"133%",
                          borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7"}}>
                          Community
                        </p>
                        &nbsp;{'&'}&nbsp;Start<br/>
                        <p className={propStyles.propositionTitle} 
                          style={{
                            paddingBottom:(windowSize.width>480)?".425rem":".125rem",
                            lineHeight:"127%",
                            borderBottom:(windowSize.width>480)?"3px solid #D7F9B7":"2px solid #D7F9B7"}}>
                          Growing
                        </p>
                      </div>
                    </div>
                    <div className={[propStyles.midRightContext, styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')}
                    style={{paddingTop:(windowSize.width>1280)?"4.325rem":"2.5rem"}}>

                            Step into a realm of continuous growth within {(windowSize.width>1280)?<br/>:" "}our vibrant community of like-minded {(windowSize.width>1280)?<br/>:" "}entrepreneurs.
                    </div>
                
                  </div>
                </div>
              </div>
            
              <div className={propStyles.propositionTopContent} style={{marginBottom: (windowSize.width>768)?(windowSize.width<=1280)?"8rem":"12.1625rem":"6.5rem"}}>
                <div className={propStyles.propositionTopLeft} style={{justifyContent:"flex-start", paddingLeft:"0rem", paddingTop:(windowSize.width>=1146&&windowSize.width<=1280)?"1.75rem":"1.5rem", transform:`translateX(${(windowSize.width>480)?"-.125rem":"0"})`}}>
                  <div className={propStyles.topLeftContent}>
    
                      <div style={{display:"flex", alignItems:"center", gap:(windowSize.width>480)?"15.75px":".5rem"}}>
                        <div className={propStyles.bottomPropositionIcon}>
                          3.
                        </div>
                        <p className={propStyles.bottomIconText}>
                          connect
                        </p>
                      </div>
                      <div className={propStyles.bottomTitleContainer} >
                        {(windowSize.width>480)&&
                        <div style={{alignSelf:"flex-start", paddingTop:".25rem"}}>
                          <Image src={People} alt={"people"} width={(windowSize.width>480)?65:61} height={(windowSize.width>480)?75:72}/>
                        </div>}
                        <div className={propStyles.bottomTitleWrapper} style={{width:(windowSize.width>768 && windowSize.width <=1024)?"100%":"100%", transform:(windowSize.width>480)?"translateY(-.25rem)":"translateY(0)"}}>

                          <p className={propStyles.propositionTitle} style={{whiteSpace:(windowSize.width>768 && windowSize.width <=1024)?"normal":"nowrap"}}>
                          Participate in Truka{(windowSize.width>768 && windowSize.width<=1280)?" ":<br/>} Connect Calls {(windowSize.width>768 && windowSize.width<=1280)&&<br/>}for&nbsp;{(windowSize.width<=768 || windowSize.width>1280)&&<br/>}
                          </p>
                        
                          <p className={propStyles.propositionTitle} style={{borderBottom:(windowSize.width>480)?"3px solid #7978F8":"2px solid #7978F8"}}>
                            Personalized
                          </p>
                          <p className={propStyles.propositionTitle}>
                            {(windowSize.width>768 && windowSize.width<=1280)?" ":<br/>}Guidance 
                          </p>

                          <div className={[propStyles.bottomSubtextContainer, styles.subsectionSubtextAlt].join(' ')}>
                            <div style={{width:(windowSize.width>480)?"95%":"100%", marginTop:(windowSize.width>480)?(windowSize.width<=1280 && windowSize.width>768)?"2rem":".75rem":"1.25rem"}}>
                              The&nbsp;
                              <p className={[styles.subsectionSubtextAlt, propStyles.subsectionSubtextSmall].join(' ')} style={{fontWeight:"500"}}>
                                Truka Connect calls&nbsp;
                              </p>
                              is where your journey turns from a lonely one to a shared and exciting path to living your purpose fully.
                            </div>
                          </div>
        
                        </div>
                        
                      </div>
                  
                  </div>
      
                </div>
                <div className={propStyles.propositionTopRight}>
                  <div className={v2styles.notionContainerBottom}>
                      <span className={propStyles.caseStudiesButton}
                       onClick={()=>scrollToForm()}>
                          Get FREE Access Now
                        {(windowSize.width>480)&&
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                          <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                        </svg>
                      }
                      </span>
                  </div>
                </div>   
              </div>

              <div className={v2styles.formSection} ref={formRef}>
                  <div className={v2styles.formHeaderContainer}>
                    <div style={{display:"inline", width:"auto"}}>
                      <p className={v2styles.formHeaderText}>
                        Ready to transform your
                      </p>
                      <p className={v2styles.formHeaderText} style={{fontWeight:"700"}}>
                        life and business?
                      </p>
                    </div>
                    <div style={{display:"inline", 
                    width:(windowSize.width<=768 && windowSize.width>480)?"80%":(windowSize.width>768 && windowSize.width <=1024)?"80%":(windowSize.width>1024 && windowSize.width <=1280)?"100%":"auto", textAlign:"center", transform:"scaleY(.98)"}} className={v2styles.formHeaderSubtext}>
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
            
                      <GHLForm />
              
                  
                   {/*
                    <iframe
                       className={v2styles.ghlForm}
                        src="https://api.leadconnectorhq.com/widget/form/FIL241RgMI1hMsVewrZl"
                        style={{width:"100%",height:"100%",border:"none",borderRadius:"4px"}}
                        id="inline-FIL241RgMI1hMsVewrZl" 
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Form 1"
                        data-height="400"
                        data-layout-iframe-id="inline-FIL241RgMI1hMsVewrZl"
                        data-form-id="FIL241RgMI1hMsVewrZl"
                        title="Form 1"
                            >
                      </iframe>
                      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                   */}
                      {/*<>
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
                      </>*/}
                    </div>

                    {/*
                    <div className={v2styles.heroButtonContainerV2} style={{marginTop:(windowSize.width>480)?"1.5rem":"1rem"}}>
                      <span className={v2styles.heroButtonApplyV2} onClick={()=>scrollToForm()}
                        style={{background:"#d2854fc5",
                        width:"90%",transform:"translateX(0)", marginLeft:"auto", marginRight:"auto"}}>
                        <div>
                          <Image 
                              style={{position:"absolute", transform:(windowSize.width>768)?"translateX(2.65rem) translateY(-.5rem)":"translateX(.125rem) translateY(-.5rem)"}}
                              src={Star} alt="star-black" 
                              width={(windowSize.width>480)?17:16} height={(windowSize.width>480)?17:16}
                          />
                        </div>
                        <p className={v2styles.heroButtonApplyTextV2}>
                          Get Instant Access Today
                        </p>
                      </span>
                    </div>
                    */ }
          
              </div>
            </div>
          </section>

              
          <section className={styles.footerContainer}>
        
            <div className={styles.footerContent}>

              <div className={styles.footerLeftContent}>
                <div style={{width:"100%"}} className={v2styles.footerHeaderContainer}>
                  <p className={v2styles.propositionHeaderTitle} style={{paddingBottom:"1px", width:(windowSize.width>768)?"auto":"90%"}}>
                    the truka success kit pathway
                  </p>
                  {(windowSize.width<=1024)&&
                  <div className={styles.footerImageContainer}
                  style={{marginTop:"1.5rem", marginBottom:"1.5rem"}}>
                    <div className={v2styles.footerImage}>
                    
                    </div>
                  </div>
                  }
                  <div className={v2styles.footerTitleContainer}>
                    <p className={styles.footerTitle}>
                      Start your success journey{(windowSize.width>1024)?<br/>:" "}
                    </p>
                    <p className={styles.footerTitle} style={{borderBottom:"1.5px solid #F87719", paddingBottom:(windowSize.width>768)?".425rem":".275rem"}}>
                      today.
                    </p>
                  </div>
                </div>


                <div 
                className={v2styles.footerButtonContainer}>
                  <span onClick={()=>scrollToForm()}
                  className={[propStyles.caseStudiesButton, v2styles.footerButtonAlt].join(' ')} 
                  style={{marginLeft:(windowSize.width>1024)?"0":"auto",
                  marginRight:(windowSize.width>1024)?"0":"auto", transform:`translateX(${(windowSize.width>1024)?"-.5rem":"0"})`,
                  width:(windowSize.width>=1024)?"21rem":"75%", 
                  gap:"1.5rem", 
                  paddingLeft:(windowSize.width>1024)?".5rem":"1.75rem", 
                  height:(windowSize.width>=768)?"4.45rem":"4rem"}}>
                     Gain FREE Access Now
                      <svg xmlns="http://www.w3.org/2000/svg" width={(windowSize.width<390)?"22":"28"} height={(windowSize.width < 390)?"16":"18"} viewBox={(windowSize.width<390)?"0 0 28 18":"0 0 28 18"} fill="none" className={v2styles.footerArrow}>
                        <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FFF"/>
                      </svg>
                  </span>
                  {(windowSize.width>1024)&&<>
                  <p className={v2styles.footerPolicy} style={{transform:"scale(1.1) translateY(-1px)"}}>
                  |&nbsp;
                  </p>
                  <Link href={'/privacy'} className={v2styles.privacyLink}>
                  <p className={v2styles.footerPolicy}>
                  Privacy Policy
                  </p>
                  </Link>
                  </>
                }
                </div>
                {(windowSize.width<=1024)&&
                <Link href={'/privacy'} className={v2styles.privacyLink}>
                  <p className={v2styles.footerPolicy}>
                  Privacy Policy &nbsp;|&nbsp; 2024
                  </p>
                </Link>
                }
              </div>
          
              {(windowSize.width>1024)&&
              <div className={styles.footerImageContainer}>
                <div className={v2styles.footerImage}>
                
                </div>
              </div>
              
              }
            </div>
            
          </section>


      </main>
    </>
  )
}
