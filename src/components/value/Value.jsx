import React, { useState } from "react";
import "./Value.css"
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from "../../utils/accordian";

const Value = () =>{
    const [className,setClassName] = useState(null)
    return(
        <>
          <section className="v-wrapper" >
            <div className="paddings  innerWidth flexCenter v-container" >
                <div className="v-left">
                <div className="img-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>   

            <div className="flexColStart  v-right">
                <sapn className="orangeText" >Our Value</sapn>
                <sapn className="primaryText">Value We Give to You</sapn>
                <sapn className="secondaryText">We always ready to help by providing the best services for you. <br /> We beleive a good blace to live can make you life better</sapn>

                <Accordion
                className="accordion"
                 allowMultipleExpanded={false}
                 preExpanded={[0]}
                > 
                
                 {data.map((item, i) => {
                            
                        return(
                        <AccordionItem className={`accordionitem  ${className}` } key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className=" flexCenter accordionitembutton">

                                <AccordionItemState>
                                    {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                </AccordionItemState>
                                <div className="flexCenter icon"> {item.icon} </div>
                                <span className=" primaryText"> {item.heading} </span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                                
                            </AccordionItemButton>

                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="secondaryText"> {item.detail} </p>
                        </AccordionItemPanel>

                        </AccordionItem>
                        )


                    })
                 }
                    


                </Accordion>
                

             
            </div> 
            </div>

          </section>
        </>
    )
}
export default Value;