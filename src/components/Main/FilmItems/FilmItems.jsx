import React from "react";
import style from "./FilmItems.module.css"
import playIMage from "../../../images/play.svg"
import { NavLink, useLocation } from "react-router-dom";

const FilmItems = ({ imageSrc, title, itemId, pathToVideo }) => {   
    let location = useLocation()
    const savePosition = () =>{
        if(location.pathname.length === 1){
            sessionStorage.removeItem('scrollY')
            sessionStorage.setItem('scrollY', window.scrollY);
            console.log(sessionStorage);
        }
        else{
            sessionStorage.removeItem('scrollY')
            console.log(sessionStorage);
        }
    } 
    return (
        <div className={style.firstWrapper} onClick={savePosition} >
            <div className={style.wrapper} >
            <div className={style.imageWrapper} >
                <div className={style.blurWrapper} >
                    <img src={playIMage} alt="" />
                    <NavLink className={style.navMovie} to={`/${pathToVideo}/view/${title}/${itemId}`} ></NavLink>
                </div>

                <img src={imageSrc} alt="" />
            </div>
            <div className={style.titleWrapper} >
                <p className={style.title}>{title}</p>
            </div>
        </div>
        </div>
        
    )
}

export default FilmItems;