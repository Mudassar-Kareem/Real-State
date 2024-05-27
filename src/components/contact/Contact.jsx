import React from "react";
import "./Contact.css";
import {MdCall} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";


const  Contact = () =>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="  flexColStart  c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText"> East to contact us</span>
                    <span className="secondaryText">We always ready to help by provide the best services for you. We beleive <br />
                     a place to live can make your life better </span>

                     <div className="flexColStart contactMode">
                        <div className="flexStart row">
                            <div className="  flexColCenter mode">
                                <div className=" flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={20} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span style={{fontWeight:"bold"}}>Call</span>
                                        <span className="secondaryText">0221 123 321</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>

                            </div>

                            <div className="  flexColCenter mode">
                                <div className=" flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={20} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span style={{fontWeight:"bold"}}>Chat</span>
                                        <span className="secondaryText">0221 123 321</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>

                            </div>
                        </div>

                        <div className="flexStart row">
                            <div className="  flexColCenter mode">
                                <div className=" flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={20} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span style={{fontWeight:"bold"}}>Video Call</span>
                                        <span className="secondaryText">0221 123 321</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>

                            </div>

                            <div className="  flexColCenter mode">
                                <div className=" flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={20} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span style={{fontWeight:"bold"}}>Message</span>
                                        <span className="secondaryText">0221 123 321</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>

                            </div>
                        </div>
                     </div>

 

                </div>


                <div className=" flexColEnd c-right">
                    <div className="img-container" style={{border:'4px solid green'}}>
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;