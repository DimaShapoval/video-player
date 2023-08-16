import React from "react";
import FilmRows from "../Main/FilmRows/FilmRows";
import style from "./MainPlayer.module.css"


const MainPlayer = ({ moviesInfo, context }) => {
    return (
        <div className={style.mainWrapper} >
            <FilmRows context={context} moviesInfo={moviesInfo} />
        </div>
    )
}

export default MainPlayer;