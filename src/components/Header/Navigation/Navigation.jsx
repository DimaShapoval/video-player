import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"

const NavigationHeader = () =>{
    return(
        <div className={style.firstWrapper} >
           <div className={style.wrapper} >
            <NavLink to="/movies" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >Movies</NavLink>
            <NavLink to="/series" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >Series</NavLink>
            <NavLink to="/cartoons" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >Cartoons</NavLink>
        </div> 
        </div>
        
    )
}

export default NavigationHeader;