import React from "react";
import style from "./Search.module.css"


const Search = ({ inputValue, changeFunction }) => {
    return (
        <div>
            <input onChange={changeFunction} className={style.searchInput} type="text" value={inputValue} placeholder="搜索" />
        </div>
    )
}

export default Search;