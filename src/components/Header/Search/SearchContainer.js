import React from "react";
import Search from "./Search";
import style from "./Search.module.css"

const SearchContainer = () =>{
    return(
        <div className={style.wrapper} >
            <Search/>
            {/* <p>Hu</p> */}
        </div>
    )
}

export default SearchContainer;