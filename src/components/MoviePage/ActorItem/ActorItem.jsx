import React from "react";
import style from "./ActorItem.module.css"
import { useNavigate } from "react-router-dom";

const ActorItem = ({ nameOfActor, photoOfActor, idOfActor }) => {
    const navigator = useNavigate()
    return(
        <div className={style.wrapper} onClick={()=>{
            navigator(`/actor/view/${nameOfActor}/${idOfActor}/page=1`)
        }} >
            <img src={photoOfActor} alt="Image of Actor" />
            <h3>{nameOfActor}</h3>
        </div>
    )
}


export default ActorItem