import React from "react"
import Login from "./Login"
import style from "./Login.module.css"

const LoginContainer = () => {
    return(
        <div className={style.pageWrapper} >
            <Login/>
        </div>
    )
}

export default LoginContainer;