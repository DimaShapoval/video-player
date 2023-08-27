import React, { useEffect, useState } from "react"
import style from "./ActorPage.module.css"
import { useLocation } from "react-router-dom"
import Loading from "../../MoviePage/Loading/Loading"
import FilmRows from "../FilmRows/FilmRows"

const ActorPageContainer = ({ moviesInfo, actorsInfo, context }) => {
    const [ arrayOfActorMovies, setArrayOfActorMovies ] = useState(null)
    let location = useLocation().pathname.split('/')[4]
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    useEffect(() => {
        if(actorsInfo != null){
            let newArray = [...actorsInfo].map(item => {
            if(item.actor_id == location){ //take actor id in array and id in page
                return item.film_ids
            }
        })
        let filterNewArray = [...newArray].filter(item => item != undefined);
        let movieArray = [...moviesInfo].map(item =>{
            for(let i=0;i<[...filterNewArray[0]].length; i++){
                if([...filterNewArray[0]][i] == item.id){ // check and filter of ids
                    return item; // if true return info of movie
                }
            }
        })
        let movieFilter = [...movieArray].filter(item => item != undefined)
        setArrayOfActorMovies(movieFilter) // save in state
        }
        
    }, [moviesInfo])

    return (
        <div className={style.mainWrapper} >
            {arrayOfActorMovies ? <FilmRows nameOfCategory={""} nav={""} context={context} moviesInfo={arrayOfActorMovies} /> : <Loading/>}
        </div>
    )
}

export default ActorPageContainer;