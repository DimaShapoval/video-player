import React, { useContext, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Main from "../Main/Main"
import MoviePageContainer from "../MoviePage/MoviePageContainer"
import style from "./Routing.module.css"
import { DomainLink } from "../../App"
import MainPlayer from "../MainPlayer/MainPlayer"
import MainFilter from "../Main/MainFilter/MainFilter"


const Routing = ({moviesInfo }) => {
    let location = useLocation().pathname
    let moviePageLocation = location.split('/')[1]
    let moviePageLocationForCategory = location.split('/')[2]
    let filterForMainByType = [...moviesInfo].filter(item => item.type == moviePageLocation) //filter movies by type
    let filterForMainByCategory = ( filterForMainByType.length != 0 ? filterForMainByType : [...moviesInfo].filter(item => item.category_name == moviePageLocation))//filter movies by type
    const context = useContext(DomainLink)
    const scrollMain = () => {
        console.log(window.scrollY);
        
    }
    
    // const history = 
    return (
        <div className={style.wrapper} >
            
            <Routes>
                
                <Route path='/'  element={<Main classForGalary="show" moviesInfo={moviesInfo} pathToVideo={moviePageLocation} infoForSlider={moviesInfo} context={context} className={style.main} />} />
                <Route path={`/${moviePageLocation}/view/*`} element={<MoviePageContainer  className={style.moviePage} moviesInfo={moviesInfo} />} />
                <Route path={`/${moviePageLocation}/*`} element={<MainFilter classForGalary="hide" className={style.main} infoForSlider={moviesInfo} moviesInfo={filterForMainByCategory} context={context} />} />                
            </Routes>
        </div>
    )
}


export default Routing;