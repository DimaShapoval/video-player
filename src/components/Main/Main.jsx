import React, { useContext, useEffect, useState } from "react";
import style from "./Main.module.css"
import FilmItems from "./FilmItems/FilmItems";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmRows from "./FilmRows/FilmRows";
import { ScrollRestoration, useLocation } from "react-router-dom";
import ScrollTopPictures from "./ScrollTopPictures/ScrollTopPictures";







const Main = ({ moviesInfo, context, classForGalary, infoForSlider }) => {
    const [ categories, setCategories ] = useState(['anime', 'hentai']);
    // anime hentai
    let filmItems = categories.map((item, index) =>{
        let arrayOfInfo = [...moviesInfo].filter(info => info.category_name == item);
        return <FilmRows nameOfCategory={item} key={index} context={context} moviesInfo={arrayOfInfo} nav={'更多的'} />
    })
    return (
        <div className={style.mainWrapper} >
            <ScrollTopPictures classForGalary={classForGalary} infoForSlider={infoForSlider} moviesInfo={moviesInfo} context={context} />
            {filmItems}
        </div>
    )
}

export default Main;