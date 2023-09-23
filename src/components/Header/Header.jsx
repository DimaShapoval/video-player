import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Header.module.css"
import NavigationHeader from "./Navigation/Navigation";
import Login from "./Login/Login";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Burger from "./Bugrer/Burger";
import RightSide from "./RightSide/RightSide";
import Search from "./Search/Search";
import $ from "jquery"
import SearchContainer from "./Search/SearchContainer";

const Header = ({ moviesInfo, pageRender, returnFalseOfPageRender }) => {
    const navigate = useNavigate()
    const location = useLocation().pathname
    const windowSize = useRef([document.innerWidth, document.innerHeight]);
    const [pageScroll, setPageScroll] = useState(false)
    useEffect(() => {
        if (location === "/" && sessionStorage.getItem('scrollY') && pageRender) {
                    window.scrollTo({
                        top: sessionStorage.getItem('scrollY'),
                        behavior: "smooth"
                    })
                    sessionStorage.clear();
                    returnFalseOfPageRender()
                }
                


            setPageScroll(false)
        }
    , [location, moviesInfo])
    const backPosition = () => { //function that when you come to main page back same scroll position
        

        setPageScroll(true)
        navigate("/");


    }
    return (
        <div className={style.headerWrapper} >
            <div className={style.secondWrapper} >
                <div className={style.logoWrapper}>
                    <button type="button" className={style.logo} onClick={backPosition} ><h2 onClick={backPosition}>LOGO</h2></button>
                    <div className={style.search}>
                        <SearchContainer moviesInfo={moviesInfo} />
                    </div>


                </div>
                <RightSide moviesInfo={moviesInfo} className={style.rightSide} />

                <Burger className={style.burger} />


            </div>

        </div>
    )
}

export default Header;