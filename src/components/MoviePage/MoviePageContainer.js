import React, { useContext, useEffect, useState } from "react";
import MoviePage from "./MoviePage";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading/Loading";
import style from "./MoviePage.module.css"
import { DomainLink } from "../../App";


const MoviePageContainer = ({ moviesInfo, actorInfo }) => {
    let location = useLocation().pathname;
    const [objOfActorInfo, setObjOfActorInfo] = useState(null)
    let nameInLocation = location.split('/')[4] //take name of movie that was clicked
    let replceName = nameInLocation.replace(/\-/g, " "); // if we have "-" in name replaced to " "
    let infoOfMovie = [...moviesInfo].filter(infoItem => infoItem.id == nameInLocation) // filter our array and take info of movie that was select
    let allInfo = infoOfMovie[0]
    let arrayOfActors
    let arrayOfPhotos
    useEffect(() => {
        if (allInfo && allInfo.actors != undefined) {
            let newObject = [];
            let nameArray
            let photoArray
            if (allInfo.actors && allInfo.actors.includes(',') && allInfo.actor_photos && allInfo.actor_photos.includes(',')) {
                nameArray = allInfo.actors.split(',')
                photoArray = allInfo.actor_photos.split(',')
                for (let i = 0; i < nameArray.length; i++) {
                    console.log([...allInfo.actors.split(',')][i].split(":"));


                    newObject.push({ name: [...allInfo.actors.split(',')][i].split(":")[1], photo: [...allInfo.actor_photos.split(',')][i], id: [...allInfo.actors.split(',')][i].split(":")[0] });
                }
                // let newObjectId = 

                // console.log({...newObject});
            }
            else {
                newObject.push({ name: allInfo.actors.split(":")[1], photo: allInfo.actor_photos, id: allInfo.actors.split(":")[0] })
            }
            setObjOfActorInfo(newObject)
            // console.log(objOfActorInfo);
        }

    }, [moviesInfo])


    // (allInfo.actors.split(',') ? allInfo.actors.split(',') : allInfo.actors)
    const domainName = useContext(DomainLink)
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    // console.log(allInfo.video);
    return (
        <div className={style.mainWrapper} >
            {allInfo ? <MoviePage imageSrc={`${domainName}/${allInfo.picture}`} actorId={actorInfo} infoOfActors={objOfActorInfo} domainLink={domainName} videoSrc={allInfo.video} comment={allInfo.comment} title={allInfo.title} /> : <Loading />}
        </div>
    )
}

export default MoviePageContainer;