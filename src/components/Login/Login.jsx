import React, { useState } from "react";
import style from "./Login.module.css"
import LoginInputsContainer from "./LoginNumber/LoginInputsContainer";
import ConfirmCode from "./ConfirmCode/ConfirmCode";

const Login = () => {
    const [resaultOfRequest, setResaultOfRequest] = useState(false)
    const successRequest = () => {
        setResaultOfRequest(true)
    }
    return (
        <form className={style.wrapper}>
            <div className={style.headerTextWrapper} >
            {resaultOfRequest ? <p className={style.headerText} >通过短信确认代码</p> : <p className={style.headerText} >登录</p>}
            </div>
            <div className={style.inputsWrapper} >
            {resaultOfRequest ? <ConfirmCode/> : <LoginInputsContainer successRequest={successRequest}/>}
            </div>
        </form>
    )
}

export default Login;