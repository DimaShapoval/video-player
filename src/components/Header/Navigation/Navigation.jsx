import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"

const NavigationHeader = () =>{
    return(
        <div className={style.firstWrapper} >
           <div className={style.wrapper} >
            <NavLink to="/last-movies/page=1" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >Last Movie</NavLink>
            <NavLink to="/actors/page=1" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >Actors</NavLink>
        </div> 
        </div>
        
    )
}

export default NavigationHeader;