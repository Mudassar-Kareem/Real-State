import React from "react";
import "./Residencies.css";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import {slidersettings} from "../../utils/common.js";
const Residencies = () =>{
    return(
        <>
         <section className="r-wrapper" >
            <div className=" paddings innerWidth r-container">
                <div className=" flexColStart r-head">
                    <h3 className="orangeText">Best  Choices</h3>
                    <h1 className="primaryText">Popular  Residencies</h1>
                </div>

                <Swiper {...slidersettings}>
                    
                    {
                        data.map((card, i) =>(
                            <SwiperSlide key={i} >
                             <div className="  r-card">
                                <img src={card.image} alt="" />
                                <span className="r-price secondaryText">
                                    <span style={{color:'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                 <span className="primaryText "> {card.name} </span>
                                 <span className="secondaryText "> {card.detail} </span>
                            </div> 

                            </SwiperSlide>
                        ) )
                    }
                    <SliderButtons/>
                </Swiper>
             
 
            </div>
         </section>
        </>
    )
}
export default Residencies;

const SliderButtons = () => {
    const Swiper = useSwiper();
       return(
           <div className="   r-buttons">
               <button onClick={() => Swiper.slidePrev()}> &lt;</button>
               <button onClick={() => Swiper.slideNext()}>&gt;</button> 
           </div>
       )
   }