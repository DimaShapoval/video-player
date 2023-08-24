import React from "react";
import FilmItems from "../FilmItems/FilmItems";
import style from "./FilmRows.module.css"
import DomainLink from "../../../App"
import { NavLink, useLocation } from "react-router-dom";


const FilmRows = ({ moviesInfo, context, nameOfCategory, nav }) => {
    let location = useLocation().pathname
    let movieArray = moviesInfo.map(item => {
        let itemTitle = item.title
        let link = String(itemTitle).replace(/\s/g, '-')
        return <FilmItems pathToVideo={item.type} imageSrc={`${context}/${item.picture}`} itemId={item.id} title={link} key={item.id} />
    })
    let secondMovieArray = [...movieArray];
    if (location === "/") {
        for (let i = 0; i < [...movieArray].length; i++) {
            if (i > 7) {
                secondMovieArray.pop()
            }
        }
    }

    return (
        <div className={style.wrapper} >
            <div className={style.headerWrapper} >
                <h3 className={style.title} >{nameOfCategory}</h3>
                <NavLink className={style.nav} to={`/${nameOfCategory}/page=1`} >{nav}</NavLink>
            </div>

            <div className={style.filmWrapper} >
                {secondMovieArray}
            </div>
        </div>

    )
}

export default FilmRows;