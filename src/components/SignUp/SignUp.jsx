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

                <p className={style.headerText} >Sign up</p>

              {resaultOfRequest ? <p className={style.headerText} >Confirm code via SMS</p> : <p className={style.headerText} >Sign up</p>}  

            </div>
            <div className={style.inputsWrapper} >
            {resaultOfRequest ? <ConfirmCode/> : <SignUpInputsContainer successRequest={successRequest} />}
                
            </div>
        </form>
    )
}

export default SignUp;