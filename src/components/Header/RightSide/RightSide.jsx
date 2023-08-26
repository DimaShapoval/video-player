import React from "react"
import NavigationHeader from "../Navigation/Navigation"
import Login from "../Login/Login"
import style from "../Header.module.css"
import SearchContainer from "../Search/SearchContainer"

const RightSide = ({ moviesInfo }) => {
    return (
        <div className={style.rightSide} >
            <NavigationHeader />
            <div className={style.secondItem} >
                <SearchContainer moviesInfo={moviesInfo} />
                <Login />
            </div>

        </div>
    )
}
export default RightSide