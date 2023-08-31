import React, { useEffect, useState } from "react"
import NavigationHeader from "../Navigation/Navigation"
import Login from "../Login/Login"
import style from "../Header.module.css"
import SearchContainer from "../Search/SearchContainer"
import UserName from "./UserName/UserName"
import axios from "axios"

const RightSide = ({ moviesInfo }) => {
    const [ userInfo, setUserInfo ] = useState(null)
    useEffect(() => {
        if (localStorage.username) {
            setUserInfo(localStorage.username)
        }
    }, [])
    const logOut = () => {
        localStorage.removeItem('username')
        setUserInfo(null)
        axios.post('php/logout_process.php')
    }
    return (
        <div className={style.rightSide} >
            <NavigationHeader />
            <div className={style.secondItem} >
                <SearchContainer moviesInfo={moviesInfo} />
                {
                localStorage.username ? <UserName username={userInfo} logOutFunction={logOut} /> : <Login />
                }
                
            </div>

        </div>
    )
}
export default RightSide