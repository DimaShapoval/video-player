import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ConfirmPage.module.css"
import image from "../../images/18+_icon.svg.png"


const ConfirmPage = () =>{
    return(
        <div className={style.wrapper} >
            <div className={style.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={style.textWrapper} >
                <h2>Warning</h2>
                <h5>Site use cookies, apply this</h5>
            </div>
            <div className={style.navWrapper} >
               <NavLink to={"/"} className={style.nav} >Apply</NavLink> 
            </div>
            
        </div>
    )
}


export default ConfirmPage;