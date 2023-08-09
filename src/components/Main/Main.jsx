import React, { useContext, useEffect, useState } from "react";
import style from "./Main.module.css"
import FilmItems from "./FilmItems/FilmItems";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmRows from "./FilmRows/FilmRows";

const Main = ({moviesInfo, context}) => {
    return (
        <div className={style.mainWrapper} >
            <FilmRows context={context} moviesInfo={moviesInfo}  />

        </div>
    )
}

export default Main;