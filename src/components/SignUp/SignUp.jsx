import React, { useState } from "react";
import style from "./SignUp.module.css"
import SignUpInputsContainer from "./SignUpNumber/SignUpInputsContainer";
import ConfirmCode from "./ConfirmCode/ConfirmCode";

const SignUp = ({}) => {
    const [resaultOfRequest, setResaultOfRequest] = useState(false)
    const successRequest = () => {
        setResaultOfRequest(true)
    }
    return (
        <form className={style.wrapper}>
            <div className={style.headerTextWrapper} >
              {resaultOfRequest ? <p className={style.headerText} >通过短信确认代码</p> : <p className={style.headerText} >报名</p>}  
            </div>
            <div className={style.inputsWrapper} >
            {resaultOfRequest ? <ConfirmCode/> : <SignUpInputsContainer successRequest={successRequest} />}
                
            </div>
        </form>
    )
}

export default SignUp;