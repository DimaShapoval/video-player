import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"

const NavigationHeader = () =>{
    return(
        <div className={style.firstWrapper} >
           <div className={style.wrapper} >
            <NavLink to="/movies/page=1" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >电影</NavLink>
            <NavLink to="/series/page=1" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >系列</NavLink>
            <NavLink to="/cartoons/page=1" className={item=> item.isActive ? style.navLinksActive : style.navLinks} >卡通</NavLink>
        </div> 
        </div>
        
    )
}

export default NavigationHeader;