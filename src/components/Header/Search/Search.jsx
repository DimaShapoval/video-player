import React from "react";
import style from "./Search.module.css"
import { useNavigate } from "react-router-dom";


const Search = ({ inputValue, changeFunction, searchClick }) => {
    const navigate = useNavigate();
    return (
        <div className={style.wrapper} >
            <input onChange={changeFunction} className={style.searchInput} type="text" value={inputValue} placeholder="Search" />
            <span onClick={()=>{searchClick(inputValue)}} className="material-symbols-outlined">
                search
            </span>
        </div>
    )
}

export default Search;