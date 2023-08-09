import React from "react";
import style from "./Login.module.css"
import { NavLink } from "react-router-dom";

const Login = ()=>{
    return(
        <div className={style.wrapper} >
            <NavLink to="./login" className={style.navLink} >Login</NavLink>
        </div>
    )
}


export default Login