import React from "react";
import FilmItems from "../FilmItems/FilmItems";
import style from "./FilmRows.module.css"
import DomainLink from "../../../App"


const FilmRows = ({moviesInfo, context}) => {
    let movieArray = moviesInfo.map(item => {
        let itemTitle = item.title
        let link = String(itemTitle).replace(/\s/g, '-')
        console.log(context)
        return <FilmItems pathToVideo={item.type} imageSrc={`${context}/${item.picture}`} itemId={item.id} title={link} key={item.id} />
    })
    return (
        <div className={style.filmWrapper} >
            {movieArray}
        </div>
    )
}

export default FilmRows;