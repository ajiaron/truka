'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Head from 'next/head';
import Navbar from './components/navbar'
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
import Waves2 from '../public/assets/waves2.svg'
import TextCircle from '../public/assets/textcircle.svg'
import Ikigai from '../public/assets/ikigai.svg'
import People from '../public/assets/people.svg'
import {motion, AnimatePresence, useScroll,useMotionValueEvent, useAnimation, inView} from 'framer-motion'


function Card() {
  return (
    <div className={propStyles.bottomCarouselItem}>
      <div className={propStyles.bottomCarouselImage}>

      </div>
      <div style={{display:"flex", flexDirection:"column", width:"100%", paddingTop:".325rem", transform:"translateY(.25rem)"}}>
        <p className={propStyles.bottomCarouselText}>
          Full name
        </p>
        <p className={propStyles.bottomCarouselSubtext}>
          Role Title
        </p>
      </div>
    </div>
  )
}
function Testimonial({quote, name, title}) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCardImage}>

      </div>
      <div className={styles.testimonialContextContainer}>
        <p className={styles.testimonialQuote}>
          {`"${quote}"`}
        </p>
        <div style={{paddingTop:"1.375rem"}}>
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
  const gaTrackingId = 'G-JP2GFR7QN8';
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
    <main className={styles.main}>
      

        <div className={styles.contentContainer}>
        <div style={{position:"relative", top:"-6rem", left:"-.675rem"}}>
                <Image src={DotGrid} alt="dotgrid" width={300} height={300} className={styles.dotGrid}/>
                </div>
            <div className={styles.contentContainerHero}>
                <Image src={Corner} alt="corner" width={42} height={42} className={styles.cornerVector}/>
               
                
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
                {/*
                <div className={styles.contextButtonWrapper}
                style={{bottom:"10.75rem", right:"-28.2rem"}}> 
                <InfoButton text={'growth project'} type={'left'}/>
                </div> 
                
                */}
                <div className={styles.contextButtonWrapper}
                style={{bottom:"10.75rem", left:"28.2rem"}}> 
                <InfoButton text={'growth project'} type={'left'}/>
                </div>
                <div className={styles.contextButtonWrapper}
                style={{bottom:"3.875rem", right:"4.875rem"}}>
                <InfoButton text={'your community'} type={'right'}/>
                </div>

            </div>
          <div style={{position:"relative", top:"2.325rem", right:".725rem"}}>
          <Image src={DotGridAlt} alt="dotgrid" width={300} height={300} className={styles.dotGridAlt}/>
          </div>
         
   
           
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
              image carousel 1.
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
        <div style={{position:"relative", marginRight:"auto", transform:"translateX(-12vw) translateY(-17.25vh)"}}>
          <div style={{position:"fixed"}}>
            <Image src={PropVector} width={windowSize.width*1.165} height={windowSize.height} alt="gradient"/>
          </div>
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

        <div className={styles.seperatorWrapper} style={{marginLeft:"auto", transform:"translateY(-15%)"}}>
          <Image src={SeperatorLongAlt} alt="seperator" width={786} height={35} 
          className="seperator" style={{transform:"translateX(-8%)"}}/>
        </div>
        <div style={{position:"relative"}}>
          <div className={propStyles.propositionSeperator}/>
        </div>
 

        <section className={styles.propositionMidContainer}>
          <div className={propStyles.midWrapper}>
            <div className={propStyles.midWrapperLeft}>
              <div className={propStyles.midImageLeft}>
                <p className={styles.placeholderText}>
                  image 1
                </p>
              </div>
              <div className={propStyles.midImageRight}>
                <p className={styles.placeholderText}>
                  image 2
                </p>
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
                  <div style={{position:"relative", display:"inline", paddingRight:"1.75rem"}}>
                    <Image src={Trees} alt="trees" width={75.5}height={51.5}/>
                  </div>
                  <div style={{width:"100%"}} className={propStyles.midTitleText}>
                      Level up your<br/>
                    <p className={propStyles.midTitleText} 
                    style={{borderBottom:"3px solid #D7F9B7", paddingBottom:".4rem"}}>
                      mindset
                    </p>
                    &nbsp;and&nbsp;
                    <p className={propStyles.midTitleText} 
                    style={{borderBottom:"3px solid #D7F9B7", paddingBottom:".4rem"}}>
                      skillset.
                    </p>
                  </div>
                </div>
                <div className={[propStyles.midRightContext, styles.subsectionSubtextAlt].join(' ')}
                style={{paddingTop:"1.625rem"}}>
                  <div style={{width:"100%"}}>
                  Get to where you want to be. Become<br/> the&nbsp;
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
                style={{paddingTop:"2rem"}}>
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

        <div className={styles.seperatorWrapper} style={{transform:"translateY(-1.1rem)", marginRight:"auto"}}>
          <Image src={Seperator5} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(3.875%)"}}/>
        </div>
        <div className={styles.seperatorSubWrapper} style={{marginLeft:"auto", right:"6.125%", transform:"translateY(.75px)"}}>
            <Image src={Plus} alt="seperator" width={34.5} height={34.5} className={styles.subSeperator}/>
        </div>




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
                      advance
                    </p>
                  </div>
                  <div className={propStyles.bottomTitleContainer} style={{gap:"38px"}}>
                    <div>
                      <Image src={People} alt={"people"} width={75} height={88}/>
                    </div>
                    <div style={{width:"100%", transform:"translateY(-.25rem)"}}>
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
                      <p className={styles.subsectionSubtextAlt} style={{fontWeight:"500"}}>
                        journey&nbsp;
                      </p>
                      alone. Network<br/>with like-minded individuals to create<br/>something spectacular.
                    </div>
                  </div>
                </div>
              </div>
              <div className={propStyles.bottomContentRight}>
                <div className={propStyles.bottomRightImage}>
                  <p className={styles.placeholderText}>
                    image 3
                  </p>
                </div>
              </div>
            </div>
            <div className={propStyles.propositionBottomCarousel}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className={propStyles.caseStudiesButton}>
              Truka Case Studies
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18" fill="none">
                <path d="M27.2955 8.3295C27.7348 8.76884 27.7348 9.48116 27.2955 9.9205L20.136 17.08C19.6967 17.5193 18.9844 17.5193 18.545 17.08C18.1057 16.6406 18.1057 15.9283 18.545 15.489L24.909 9.125L18.545 2.76104C18.1057 2.3217 18.1057 1.60939 18.545 1.17005C18.9844 0.730708 19.6967 0.730708 20.136 1.17005L27.2955 8.3295ZM26.5 10.25L0.250001 10.25V8L26.5 8V10.25Z" fill="#FAF3D6"/>
              </svg>
            </div>
          </div>
      
        </section>

        <div className={styles.seperatorWrapper} style={{transform:"translateY(-1.075rem)", marginLeft:"auto"}}>
          <Image src={Seperator6} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(-104.75%)"}}/>
        </div>


        <section className={styles.testimonialContainer}>
          <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialHeaderContainer}>
              <p className={styles.testimonialHeaderText}>
                Real people, real experiences.
              </p>
              <div className={styles.testimonialHeaderSubtext}>
 
                See how&nbsp;
                <p className={styles.testimonialHeaderSubtext} style={{fontWeight:"500"}}>
                  Truka&nbsp;
                </p>
                 has changed the lives for many.
              </div>
            </div>
            <div className={styles.testimonialCardWrapper}>
              <Testimonial 
                quote={"What Truka gave me is a feeling of belonging and community"}
                name={"Martha Jackson"} 
                title={"Spokesperson & Entrepreneur"}/>
              <Testimonial 
                quote={"What Truka gave me is a feeling of belonging and community"}
                name={"Martha Jackson"} 
                title={"Spokesperson & Entrepreneur"}/>
              <Testimonial 
                quote={"I love what Truka stands for."} 
                name={"Jen Garfield"} 
                title={"CEO of TechSpark"}/>
            </div>
            <div className={styles.testimonialSliderContainer}>
              <div className={styles.testimonialSlide}/>
              <div className={styles.testimonialSlide}/>
              <div className={styles.testimonialSlide}/>
              <div className={styles.testimonialSlide}/>
            </div>

          </div>
        </section>

        <div className={styles.seperatorWrapper} style={{transform:"rotate(180deg) translateY(-1.1rem)", marginRight:"auto"}}>
          <Image src={Seperator6} alt="seperator" width={851} height={35} 
          className="seperator" style={{position:"absolute", transform:"translateX(-107.5%)"}}/>
        </div>


        <section className={styles.pricingContainer}>


         { /*<div className={styles.foregroundWrapper}/>*/}
          <div className={styles.pricingForeground}>
            <Image src={Waves2} 
              fill
              objectFit='contain'
              alt="foreground"/>
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
                <div style={{display:"inline", transform:"translateY(-1.325rem) translateX(.425rem)", position:"absolute"}}>
                  <p className={priceStyles.pricingLogoTrademark}>&trade;</p>
                </div>
              </div>
            </div>
            <div className={styles.contextPriceWrapper}>
              <div className={styles.contextButtonWrapper}
                style={{transform:"scale(1.025) translateY(-.5rem) translateX(.55rem)"}}>
                  <InfoButton text={'only accepting 50 applicants'} type={'price'}/>
              </div>
            </div>
          </div>
            <div style={{position:"relative", marginLeft:"auto", right:"19%", top:"9.375vh"}}>
                <div className={priceStyles.packageSale}>
                    20% off
                </div>
            </div>
          <div className={priceStyles.packageContainer}>
            <Package type={1}/>
            <Package type={2}/>
          </div>
        </section>


        <section className={styles.membershipContainer}>
          <div className={styles.membershipHeaderContainer}>
            Membership Benefits
          </div>
          <div className={styles.membershipCardContainer}>
            <div className={styles.membershipCardRow}>
              <BenefitCard title={"Community Support"} 
              text={`Hundreds of different members across all industries and levels here to support you in all areas of life.`}/>
              <BenefitCard title={"Truka University Access"} 
              text={`High Quality Education from industry experts, time-tested strategies, and modern day tactics.`}/>
              <BenefitCard title={"Truka Resource Vault"} 
              text={`Access to Success Frameworks, Tools, and Resources Custom made for Truka Club Members.`}/>
            </div>
            <div className={styles.membershipCardRow}>
              <BenefitCard title={"Private Member Calls"} 
              text={"2-3x a Week Calls & Trainings, Guided Support, and Framework Walkthroughs."}/>
              <BenefitCard title={"Exclsive Community Access"} 
              text={"Full Access to The Truka Members Club™ community group, the App, and all Truka Courses."}/>
              <BenefitCard title={"One-on-One Mentoring"} 
              text={"Exclusive mentoring to advance your career to the next level."}/>
            </div>
          </div>
        </section>



        <section className={styles.faqsContainer}>
          <div className={styles.faqsWrapper}>
            <div className={styles.faqsHeaderContainer}>
              <p className={styles.faqsHeaderText}>
                Frequently Asked Questions
              </p>
              <div className={styles.seperatorWrapper} style={{top:"0.25rem"}}>
                <Image src={FaqsSeperator} width={541.5} height={35.5} alt={"seperator"}/>
              </div>
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

            </div>
          </div>
        </section>

    </main>
    </>
  )
}
