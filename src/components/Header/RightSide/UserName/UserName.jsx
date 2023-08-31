import React, { useState, useEffect } from "react";
import style from "./UserName.module.css"
import { NavLink } from "react-router-dom";

const UserName = ({ username, logOutFunction }) => {

    const [showLogOut, setShowLogOut] = useState(false)

    const handleClick = () => {
        setShowLogOut(!showLogOut)
    }

    return (
        <div className={style.wrapper} >
            <p className={style.navLink} onClick={handleClick}>{username}</p>
            {
                showLogOut ? <div className={style.logoutWrapper} onClick={logOutFunction} ><p>登出</p></div> : null
            }
        </div>
    )
}


export default UserName