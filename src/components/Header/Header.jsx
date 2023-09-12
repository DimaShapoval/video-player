import React, { useCallback, useEffect, useState } from "react";
import style from "./Header.module.css"
import NavigationHeader from "./Navigation/Navigation";
import Login from "./Login/Login";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Burger from "./Bugrer/Burger";
import RightSide from "./RightSide/RightSide";
import Search from "./Search/Search";
import SearchContainer from "./Search/SearchContainer";

const Header = ({ moviesInfo }) => {
    const navigate = useNavigate()
    const backPosition = () => { //function that when you come to main page back same scroll position
        setTimeout(() => {
            
            window.scrollBy(0, sessionStorage.getItem('scrollY'))
        }, 1000)
        navigate("/");
        
        setTimeout(()=>{
            sessionStorage.removeItem('scrollY')
        },2000)

    }
    return (
        <div className={style.headerWrapper} >
            <div className={style.secondWrapper} >
                <div className={style.logoWrapper}>
                    <button type="button" className={style.logo} onClick={backPosition} ><h2 onClick={backPosition}>LOGO</h2></button>
                    <div className={style.search}>
                    <SearchContainer moviesInfo={moviesInfo}  />
                    </div>
                    

                </div>
                <RightSide moviesInfo={moviesInfo} className={style.rightSide} />

                <Burger className={style.burger} />


            </div>

        </div>
    )
}

export default Header;