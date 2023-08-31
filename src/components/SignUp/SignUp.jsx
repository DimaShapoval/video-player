import React from "react";
import style from "./SignUp.module.css"
import SignUpInputsContainer from "./SignUpNumber/SignUpInputsContainer";

const SignUp = () => {
    return (
        <form className={style.wrapper}>
            <div className={style.headerTextWrapper} >
                <p className={style.headerText} >报名</p>
            </div>
            <div className={style.inputsWrapper} >
                <SignUpInputsContainer/>
            </div>
        </form>
    )
}

export default SignUp;