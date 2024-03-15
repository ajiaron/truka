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
                    notion here
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
                  <div className={eduStyles.educationTextContainer}>
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
                  <div className={eduStyles.educationTextContainer}>
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
       
   
          <section className={styles.propositionTopContainer}>
          
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
           
          </section>

    
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
                  style={{transform:(windowSize.width>1440)?"translateX(0)":"translateX(-27.5%)"}}>
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
