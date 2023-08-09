import React from "react";
import style from "./FilmItems.module.css"
import playIMage from "../../../images/play.svg"
import { NavLink } from "react-router-dom";

const FilmItems = ({ imageSrc, title, itemId, pathToVideo }) => {    
    return (
        <div className={style.firstWrapper} >
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