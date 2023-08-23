import React from "react"
import style from "./SignUp.module.css"
import SignUp from "./SignUp";

const SignUpContainer = () => {
    return(
        <div className={style.pageWrapper} >
            <SignUp/>
        </div>
    )
}

export default SignUpContainer;