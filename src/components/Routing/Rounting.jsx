import React, { useContext } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Main from "../Main/Main"
import MoviePageContainer from "../MoviePage/MoviePageContainer"
import style from "./Routing.module.css"
import { DomainLink } from "../../App"


const Routing = ({moviesInfo }) => {
    let location = useLocation().pathname
    let moviePageLocation = location.split('/')[1]
    let filterForMain = [...moviesInfo].filter(item => item.type == moviePageLocation)
    const context = useContext(DomainLink)
    return (
        <div className={style.wrapper} >
            <Routes>
                <Route path='/' element={<Main moviesInfo={moviesInfo} pathToVideo={moviePageLocation} context={context} className={style.main} />} />
                <Route path={`/${moviePageLocation}/view/*`} element={<MoviePageContainer  className={style.moviePage} moviesInfo={moviesInfo} />} />
                <Route path={`/${moviePageLocation}`} element={<Main className={style.main} moviesInfo={filterForMain} context={context} />} />
                
            </Routes>
        </div>
    )
}


export default Routing;