import React from "react";
import style from "./ActorItem.module.css"

const ActorItem = ({ nameOfActor, photoOfActor }) => {
    return(
        <div className={style.wrapper} >
            <img src={photoOfActor} alt="Image of Actor" />
            <h3>{nameOfActor}</h3>
        </div>
    )
}


export default ActorItem