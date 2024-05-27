import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from 'react-icons/bi';
import OutSideClickHandler from "react-outside-click-handler";

const Header = () =>{
    const [menu,setMenu] = useState(false);
    const getMenu = (menu) =>{
        if (document.documentElement.clientWidth <= 800){
            return{right : !menu && "-100%"}
        }
    }
    return(
        
          <section className="h-wrapper " >
            <div className="  innerWidth paddings   h  flexCenter">
            
                <img src="./logo.png" alt="Logo" width={100} />
                 <OutSideClickHandler onOutsideClick={() =>(setMenu(false))}>
                <div className="flexCenter h-menu" style={getMenu(menu)}>
                    <a href="/">Residencies</a>
                    <a href="/">Our Values</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Get Started</a>
                    <button className="button"><a href="">Contact</a></button>
                </div>
                </OutSideClickHandler>
                <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
                <BiMenuAltRight size={30}/>
            </div>
            
            </div>
        
           
          </section>
        
    );
};
export default Header;