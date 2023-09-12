import React, { useEffect, useState } from "react";
import style from "./Burger.module.css"
import Routing from "../../Routing/Rounting";
import { NavLink } from "react-router-dom";
import NavigationHeader from "../Navigation/Navigation";
import UserName from "../RightSide/UserName/UserName";
import Login from "../Login/Login";
import axios from "axios";


const Burger = () => {
    const [burgerTriger, setBurgerTriger] = useState(false);
    const [humburgerClass, setHumburgerClass] = useState(`${style.humburger}`)
    const [ userInfo, setUserInfo ] = useState(null)

    const toggleBurger = () => {
        setBurgerTriger(!burgerTriger);
        humburgerClass == `${style.humburgerActive}` ?
            setHumburgerClass(`${style.humburger}`) : setHumburgerClass(`${style.humburgerActive}`);

    }
    useEffect(() => {
        if (localStorage.username) {
            setUserInfo(localStorage.username)
        }
    }, [])
    const logOut = () => {
        localStorage.clear()
        setUserInfo(null)
        axios.post('php/logout_process.php')
    }
    return (
        <div className={style.wrapper} >

            <div className={style.wrapper} >
                <div className={humburgerClass} onClick={toggleBurger} >
                    <div className={`${style.burger} ${style.burger1}`} ></div>
                    <div className={`${style.burger} ${style.burger2}`} ></div>
                    <div className={`${style.burger} ${style.burger3}`} ></div>
                </div>
            </div>
            {
                burgerTriger ? //check that burger clicked if true show our burger menu
                    <div className={`${style.navigetor}  ${style.active}`} >
                        <ul>
                            <NavLink to="/movies/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >电影</NavLink>
                            <NavLink to="/series/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >系列</NavLink>
                            <NavLink to="/cartoons/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >卡通</NavLink>
                            <div className={style.navLinks} >
                            {localStorage.username ? <UserName username={userInfo} logOutFunction={logOut} /> : <Login />}
                            </div>
                            
                        </ul>
                    </div> :
                    <div className={style.navigetor} >
                        <ul>
                            <NavLink to="/movies/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >电影</NavLink>
                            <NavLink to="/series/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >系列</NavLink>
                            <NavLink to="/cartoons/page=1" className={item => item.isActive ? style.navLinksActive : style.navLinks} >卡通</NavLink>
                            {localStorage.username ? <UserName username={userInfo} logOutFunction={logOut} /> : <Login />}
                        </ul>
                    </div>

            }

        </div>


    )
}

export default Burger