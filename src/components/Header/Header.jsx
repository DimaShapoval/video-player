import React, { useCallback, useEffect, useState } from "react";
import style from "./Header.module.css"
import NavigationHeader from "./Navigation/Navigation";
import Login from "./Login/Login";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Burger from "./Bugrer/Burger";
import RightSide from "./RightSide/RightSide";

const Header = ({ moviesInfo }) => {
    const navigate = useNavigate()
    const backPosition = () =>{ //function that when you come to main page back same scroll position
        navigate("/");
        setTimeout(()=>{
            window.scrollTo({
                top: sessionStorage.getItem('scrollY'),
                behavior: "smooth",
            });
            sessionStorage.removeItem('scrollY')
        }, 0)
        
    }
    return (
        <div className={style.headerWrapper} >
            <div className={style.secondWrapper} >
                <div className={style.logoWrapper}>
                    <button type="button" className={style.logo} onClick={backPosition} ><h2>LOGO</h2></button>
                </div>

                <RightSide moviesInfo={moviesInfo} className={style.rightSide} />
                <Burger className={style.burger} />


            </div>

        </div>
    )
}

export default Header;