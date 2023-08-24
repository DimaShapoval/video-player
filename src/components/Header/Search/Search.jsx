import React from "react";
import style from "./Search.module.css"


const Search = () =>{
    return(
        <div>
            <input className={style.searchInput} type="text"  placeholder="搜索" />
        </div>
    )
}

export default Search;