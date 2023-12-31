import React, { useContext, useEffect, useState } from "react";
import style from "./Main.module.css"
import FilmItems from "../FilmItems/FilmItems";
import { useSelector } from "react-redux";
import axios from "axios";
import { NavLink, ScrollRestoration, useLocation } from "react-router-dom";
import FilmRows from "../FilmRows/FilmRows";
import ScrollTopPictures from "../ScrollTopPictures/ScrollTopPictures";







const MainFilter = ({ moviesInfo, context, classForGalary, infoForSlider, scrollMain }) => {
    const [countOfPages, setCountOfPages] = useState(null);
    const [arrayOfItems, setArrayOfItems] = useState(null)
    let location = useLocation().pathname.split('=')[1]
    let webLovation = useLocation().pathname
    let moviePageLocation = useLocation().pathname.split('/')[1]
    let searchValue = useLocation().pathname.split("/")[2]
    let array = [];

    useEffect(() => { //create navButtons of films
        if (Math.ceil([...moviesInfo].length / 16) <= 1) { //search how many films, and how many pages we need
            //if it's only one page we don't create buttons
            setCountOfPages(null)
            array = []
        }
        else {
            for (let i = 0; i < Math.ceil([...moviesInfo].length / 16); i++) { //if we have more then 1 page we create buttons
                array.push(i)
            }
            setCountOfPages(array.map((item, index) => {
                return <NavLink className={style.navPage} key={index} to={`./page=${item + 1}`} >{item + 1}</NavLink>
            }))
            array = []

        }


    }, [moviesInfo])

    useEffect(()=>{ //create list of items in one page
        let lastItem = (location * 16)-1;//find last item
        let firstItem = lastItem - 16//find first item of list
        let newArray;
        let newArrayForSearch;
        if(moviesInfo && moviePageLocation === 'search'){
            // filter by search value if user click to search
            newArrayForSearch = [...moviesInfo].filter((item, index)=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
            newArray = [...newArrayForSearch].map((item, index) => { 
                if (index >= firstItem && index <= lastItem) { //filter items by index
                    return item
                }
            })
        }
        else{
            newArray = [...moviesInfo].map((item, index) => { 
                if (index >= firstItem && index <= lastItem) { //filter items by index
                    return item
                }
            })
        }
        
        
        let filter = newArray.filter(item=>item!=undefined) //filter array we shuoldn't to have items with undefinded type
        setArrayOfItems([...filter]) //add to store our items and give it in props to FilmRows component
    }, [moviesInfo, location, searchValue])

    
    // anime hentai
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={style.mainWrapper} >
            {webLovation.split('/')[1] !== "actor" && webLovation.split('/')[2] !== "view" ? 
            <ScrollTopPictures classForGalary={classForGalary} infoForSlider={infoForSlider} moviesInfo={moviesInfo} context={context}/> : null}
            {arrayOfItems ? <FilmRows nameOfCategory={""} nav={""} scrollMain={scrollMain}  context={context} moviesInfo={arrayOfItems} /> : <p>Loading...</p>}
            <div className={style.pagesWrapper} >
                {countOfPages ? countOfPages : null}
            </div>

        </div>
    )
}

export default MainFilter;