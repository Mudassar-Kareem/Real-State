import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <>
          <section className="f-swipper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="  flexColStart f-left">
                    <img src="./logo2.png" alt="" width={100} />
                    <div className="sp ">
                    <span className="secondaryText">Our vision is to make all people</span>
                    <span className="secondaryText">  the best place to live for them</span>
                    </div>
                </div>
                <div className=" f-right">
                    <h1 className="primaryText">Information</h1>
                    <span className="secondaryText">145 New York, FL 5467, USA</span>
                    <div className="f">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                    </div>
                    
                </div>
            </div>
          </section>
        </>
    )
}
export default Footer;