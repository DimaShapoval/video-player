import React, { useContext, useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Main from "../Main/Main"
import MoviePageContainer from "../MoviePage/MoviePageContainer"
import style from "./Routing.module.css"
import { DomainLink } from "../../App"
import MainPlayer from "../MainPlayer/MainPlayer"
import MainFilter from "../Main/MainFilter/MainFilter"
import axios from "axios"
import ActorPageContainer from "../Main/ActorPage/ActorPageContainer"
import ConfirmPage from "../ConfirmPage/ConfirmPage"


const Routing = ({ moviesInfo }) => {
    const [actors, setActors] = useState(null)
    let location = useLocation().pathname
    let moviePageLocation = decodeURIComponent(location.split('/')[1])
    let moviePageLocationForCategory = location.split('/')[2]
    let filterForMainByType = [...moviesInfo].filter(item => item.type == moviePageLocation) //filter movies by type
    let filterForMainByCategory = (filterForMainByType.length != 0 ? filterForMainByType : [...moviesInfo].filter(item => item.category_name == moviePageLocation))
    
    
    useEffect(()=>{
            axios.get('https://akvani.com/php/send_actors_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
                .then(res => {
                    setActors([...res.data]);
                })
    
        
    }, [moviesInfo, moviePageLocation])
    if (moviePageLocation === "last-movies") {
        filterForMainByCategory = [...moviesInfo].slice(-16)

    }
    else if(moviePageLocation === "actors" && actors){
            filterForMainByCategory = actors
    }
    else if(moviePageLocation === "search"){
        filterForMainByCategory = moviesInfo
    }

    
    const context = useContext(DomainLink)
    const scrollMain = () => {
        console.log(window.scrollY);

    }
   
    
    
    // console.log(filterForMainByCategory);

    // const history = 
    return (
        <div className={style.wrapper} >

            <Routes>
                <Route path="/confirm" element={<ConfirmPage />} />
                <Route path='/' element={<Main  classForGalary="show" moviesInfo={moviesInfo} pathToVideo={moviePageLocation} infoForSlider={moviesInfo} context={context} className={style.main} />} />
                <Route path={`/actor/view/*`} element={<ActorPageContainer moviesInfo={moviesInfo} actorsInfo={actors} context={context} />} />
                <Route path={`/${moviePageLocation}/view/*`} element={<MoviePageContainer className={style.moviePage} moviesInfo={moviesInfo}  actorInfo={actors} />} />
                <Route path={`/${moviePageLocation}/*`} element={<MainFilter scrollMain={scrollMain}  classForGalary="hide" className={style.main} infoForSlider={moviesInfo} moviesInfo={filterForMainByCategory} context={context} />} />
            </Routes>
        </div>
    )
}


export default Routing;