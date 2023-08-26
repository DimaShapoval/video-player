import React, { useEffect, useState } from "react";
import Search from "./Search";
import style from "./Search.module.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SearchContainer = ({ moviesInfo }) => {
    const [searchValue, setSearchValue] = useState("")
    const navigator = useNavigate()
    const location = useLocation().pathname
    const inputChangeValue = (e) => {
        let elem = e.target;
        setSearchValue(elem.value)
    }
    const handleClick = (post) =>{
        setSearchValue("")
        navigator(`/${post.type}/view/${post.title}/${post.id}`) 
    }
    useEffect(()=>{
        setSearchValue("")
    }, [location])
    return (
        <div className={style.wrapper} >
            <Search inputValue={searchValue} changeFunction={inputChangeValue} />
            <div className={style.resualtWrapper} >
                {[...moviesInfo].filter(post => {
                if (searchValue === "") {
                    //if value of input is empty
                    return null;
                } else if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    //returns filtered array with same values
                    return post;
                }
            }).map((post, index) => (
                <div className={style.box} key={index}>
                  <p className={style.nav} onClick={()=>{handleClick(post)}} >{post.title}</p>
                </div>
              ))}
            </div>
            
        </div>
    )
}

export default SearchContainer;