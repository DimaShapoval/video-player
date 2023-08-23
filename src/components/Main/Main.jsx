import React, { useContext, useEffect, useState } from "react";
import style from "./Main.module.css"
import FilmItems from "./FilmItems/FilmItems";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmRows from "./FilmRows/FilmRows";
import { ScrollRestoration, useLocation } from "react-router-dom";
import ScrollTopPictures from "./ScrollTopPictures/ScrollTopPictures";







const Main = ({ moviesInfo, context, classForGalary, infoForSlider }) => {
    return (
        <div className={style.mainWrapper} >
            <ScrollTopPictures classForGalary={classForGalary} infoForSlider={infoForSlider} moviesInfo={moviesInfo} context={context} />
            <FilmRows context={context} moviesInfo={moviesInfo} />
        </div>
    )
}

export default Main;