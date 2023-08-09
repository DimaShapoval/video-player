import React from "react"
import NavigationHeader from "../Navigation/Navigation"
import Login from "../Login/Login"
import style from "../Header.module.css"

const RightSide = () => {
    return (
        <div className={style.rightSide} >
            <NavigationHeader />
            <Login />
        </div>
    )
}
export default RightSide