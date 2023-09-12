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
                <h2>警告/Warning</h2>
                <h5 className={style.chinaText}>如果您未满18岁，请离开该页面/</h5>
                <h5>If you are under 18 years, please leave the page</h5>
            </div>
            <div className={style.navWrapper} >
               <NavLink to={"/"} className={style.nav} >已满18+，点此进入</NavLink> 
            </div>
            
        </div>
    )
}


export default ConfirmPage;