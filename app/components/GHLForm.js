import React, { useState, useEffect } from "react"
import v2styles from '../../styles/v2.module.scss'
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
    useAnimation,
    inView,
} from "framer-motion"

export default function GHLForm() {
    const [loading, setLoading] = useState(false)
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
    useEffect(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = "https://link.msgsndr.com/js/form_embed.js"

        document.body.appendChild(script)
        document.getElementById("inline-FIL241RgMI1hMsVewrZl").onload =
        function () {
            setLoading(false)
        }
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div style={{
            height: "fit-content",
            //width: "44.56%",
            width:(windowSize.width>480)?"fit-content":"fit-content",
    
            display: "flex",
            backgroundColor:"rgba(255, 255, 255, 0.13)",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            borderRadius:"27px",
            alignSelf:"center",
    
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "auto",
    
            marginRight: "auto",
            alignItems: "center",
        }}>
            {(loading) && (
                <p
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        fontFamily: "Helvetica Neue",
                        fontWeight: "300",
                        letterSpacing: ".75px",

                        fontSize: "1.125rem",
                        marginTop:"auto",
                        marginBottom:"auto",
                        alignSelf:"center",
                        color: "#fff",
                        marginTop:"50%"
                    }}
                >
                    (Please wait a moment...)
                </p>
            )}
            <motion.div
                style={styles.iframeWrapper}
                initial={{ opacity: loading||windowSize.width === undefined ? 0 : 1 }}
                animate={{ opacity: loading||windowSize.width === undefined ? 0 : 1 }}
                transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 1,
                }}
            >
<iframe
     className={v2styles.ghlForm}
  src="https://api.leadconnectorhq.com/widget/form/FIL241RgMI1hMsVewrZl"
  style={{
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "4px",
    marginLeft: "auto",
    marginRight: "auto",
    colorScheme:"normal",
    aspectRatio:"15/9",
    paddingLeft:(windowSize.width>480)?"20px":"4px",
    paddingRight:(windowSize.width>480)?"20px":"4px",
    //aspectRatio: "1440/779",
}}
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
<script src="https://link.msgsndr.com/js/form_embed.js" async></script>
            
            </motion.div>
        </div>
    )
}

const styles = {
    iframeContainer: {
        height: "fit-content",
        //width: "44.56%",
        width:"fit-content",

        display: "flex",
        backgroundColor:"rgba(255, 255, 255, 0.13)",
        paddingLeft:"1rem",
        paddingRight:"1rem",
        borderRadius:"27px",

        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",

        marginRight: "auto",
        alignItems: "center",
    },
    iframeWrapper: {
        minHeight: "auto",
        minWidth: "auto",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
    },
}
