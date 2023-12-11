import React from "react";
import InputMask from "react-input-mask";

const SignUpNumber = ({ change, value }) =>{
    return(

        <input onChange={change} value={value} name="email" placeholder={"Email"} ></input>


    )
}

export default SignUpNumber;