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
            <p className={style.headerText} >Log in</p>
            {resaultOfRequest ? <p className={style.headerText} >Confirm code via SMS</p> : <p className={style.headerText} >Log in</p>}
            </div>
            <div className={style.inputsWrapper} >
            {resaultOfRequest ? <ConfirmCode/> : <LoginInputsContainer successRequest={successRequest}/>}
            </div>
        </form>
    )
}

export default Login;