import React from "react";
import style from "./Loading.module.css"
import loadingImage from "../../../images/loading5.gif"

const Loading = () =>{
    return(
        <div className={style.wrapper} >
            <img src={loadingImage} alt="" />
        </div>
    )
}

export default Loading;
