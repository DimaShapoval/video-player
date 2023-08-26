import React, { useContext, useEffect, useMemo, useState } from "react";
import style from "./Main.module.css"
import FilmItems from "./FilmItems/FilmItems";
import { useSelector } from "react-redux";
import axios from "axios";
import FilmRows from "./FilmRows/FilmRows";
import { ScrollRestoration, useLocation } from "react-router-dom";
import ScrollTopPictures from "./ScrollTopPictures/ScrollTopPictures";







const Main = ({ moviesInfo, context, classForGalary, infoForSlider }) => {
    const [ categories, setCategories ] = useState([]);
    useMemo(()=>{
        axios.get('https://akvani.com/php/category_send_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
        .then(res=>{
            let data = res.data
            setCategories([...data].map(item=>{
                return item.category_name
            }))
        })
    }, [] )
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