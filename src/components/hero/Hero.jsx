import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () =>{
    return(
        <>
          <section className="hero-wrapper"> 
            <div className="paddings innerWidth flexCenter h-container">
                <div className=" flexColStart hero-l">
                    <div className="hero-title">
                    <div className="blur blur-h"></div>
                     <div className="orange"/>
                        <motion.h1
                          initial = {{y:"2rem" ,opacity :0}}
                          animate={{y:0 , opacity:1}}
                          transition={{type:"spring" , duration:3}}
                        > Discover <br />
                            Most Suitable <br /> 
                            Property
                        </motion.h1 >
                    </div>
                    <div className="p">
                    <p className="secondaryText"> Find a variety of properties that suit you very easily <br />
                     Forget all difficulties in finding a residence for you</p>
                     </div>

                     <div className=" flexCenter search">
                     <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">search</button>
                     </div>
            <div className=" flexCenter figures">
                <div><span className="w"><CountUp end={9000} start={8900} delay= {4} />  <span style={{color:"orange"}}>+</span></span><span> Premium Product</span></div>
                <div><span className="w"><CountUp end={2000} start={1900} delay= {4} />  <span style={{color:"orange"}}>+</span></span><span>Happy Customer</span></div>
                <div><span className="w"><CountUp end={28} start={15} delay= {4}/> <span style={{color:"orange"}}>+</span></span><span> Awards Winning</span></div>
            </div>


                </div>

                <div className=" flexCenter hero-r"></div>
                <motion.div
                  initial = {{x:"7rem" ,opacity :0}}
                  animate={{x:0 , opacity:1}}
                  transition={{type:"spring" , duration:3}}

                
                className="img-container" >
                    <img src="./hero-image.png" alt="" />
                    </motion.div>    
               
            </div>
          </section>
        </>
    )
}
export default Hero;