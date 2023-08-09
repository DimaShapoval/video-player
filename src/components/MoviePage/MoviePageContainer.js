import React, { useContext, useEffect, useState } from "react";
import MoviePage from "./MoviePage";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading/Loading";
import style from "./MoviePage.module.css"
import { DomainLink } from "../../App";


const MoviePageContainer = ({moviesInfo}) =>{
    let location = useLocation().pathname;
    let nameInLocation = location.split('/')[4] //take name of movie that was clicked
    let replceName = nameInLocation.replace(/\-/g, " "); // if we have "-" in name replaced to " "
    let infoOfMovie = [...moviesInfo].filter(infoItem => infoItem.id == nameInLocation) // filter our array and take info of movie that was select
    let allInfo = infoOfMovie[0]
    const domainName = useContext(DomainLink)
    // console.log(allInfo.video);
    return(
        <div className={style.mainWrapper} >
            {allInfo ? <MoviePage imageSrc={`${domainName}/${allInfo.picture}`} domainLink={domainName} videoSrc={allInfo.video} comment={allInfo.comment} title={allInfo.title} /> : <Loading/>}
        </div> 
    )
}

export default MoviePageContainer;