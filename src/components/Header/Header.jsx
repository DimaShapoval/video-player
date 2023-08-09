import React from "react";
import style from "./Header.module.css"
import NavigationHeader from "./Navigation/Navigation";
import Login from "./Login/Login";
import { NavLink } from "react-router-dom";
import Burger from "./Bugrer/Burger";
import RightSide from "./RightSide/RightSide";

const Header = ({moviesInfo}) => {
    let windowWidth = window.innerWidth
    return (
        <div className={style.headerWrapper} >
            <div className={style.secondWrapper} >
                <div className={style.logoWrapper}>
                    <NavLink className={style.logo} to="./" ><h2>LOGO</h2></NavLink>
                </div>
                
                <RightSide className={style.rightSide} />
                 <Burger className={style.burger} />


            </div>

        </div>
    )
}

export default Header;