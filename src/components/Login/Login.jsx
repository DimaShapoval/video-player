import React from "react";
import style from "./Login.module.css"
import LoginInputsContainer from "./LoginNumber/LoginInputsContainer";

const Login = () => {
    return (
        <form className={style.wrapper}>
            <div className={style.headerTextWrapper} >
                <p className={style.headerText} >Log in</p>
            </div>
            <div className={style.inputsWrapper} >
                <LoginInputsContainer/>
            </div>
        </form>
    )
}

export default Login;