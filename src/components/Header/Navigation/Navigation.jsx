import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"

const NavigationHeader = () =>{
    return(
        <div className={style.firstWrapper} >
           <div className={style.wrapper} >
            <NavLink to="/movies" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >电影</NavLink>
            <NavLink to="/series" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >系列</NavLink>
            <NavLink to="/cartoons" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >卡通</NavLink>
        </div> 
        </div>
        
    )
}

export default NavigationHeader;