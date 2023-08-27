import React from "react";
import style from "./FilmItems.module.css"
import playIMage from "../../../images/play.svg"
import { NavLink, useLocation } from "react-router-dom";

const FilmItems = ({ imageSrc, title, itemId, pathToVideo }) => {   
    let location = useLocation()
    console.log();
    const savePosition = () =>{
        if(location.pathname.length === 1){ //if you don't come to any page main scroll position save to sessionStorage
            sessionStorage.removeItem('scrollY')
            sessionStorage.setItem('scrollY', window.scrollY);
        }
        else{ //else we remove sessonStorage item with scroll info
            sessionStorage.removeItem('scrollY')
        }
    } 
    return (
        <div className={style.firstWrapper} onClick={savePosition} >
            <div className={style.wrapper} >
            <div className={style.imageWrapper} >
                <div className={style.blurWrapper} >
                    {location.pathname.split("/")[1] != "actors" ? <img src={playIMage} alt="" /> : null}
                    {location.pathname.split("/")[1] != "actors" ? <NavLink className={style.navMovie} to={`/${pathToVideo}/view/${title}/${itemId}`} ></NavLink> 
                    : <NavLink className={style.navMovie} to={`/${pathToVideo}/view/${title}/${itemId}/page=1`} ></NavLink>}
                    
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