import React from "react";
import FilmItems from "../FilmItems/FilmItems";
import style from "./FilmRows.module.css"
import DomainLink from "../../../App"
import { NavLink, useLocation } from "react-router-dom";


const FilmRows = ({ moviesInfo, context, nameOfCategory, nav }) => {
    let location = useLocation().pathname
    let movieArray = moviesInfo.map((item, index) => {
        let itemTitle = item.title
        let itemId = item.id;
        let itemPicture = item.picture
        let itemType = item.type;
        if(location.split('/')[1] === 'actors'){
            itemTitle = item.actor_name
            itemId = item.actor_id
            itemPicture = item.photo
            itemType = "actor"

        }
        let link = String(itemTitle).replace(/\s/g, '-')
        return <FilmItems pathToVideo={itemType} imageSrc={`${context}/${itemPicture}`} itemId={itemId} title={link} key={index} />
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