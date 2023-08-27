import React from "react";
import InputMask from 'react-input-mask';

const SignUpNumber = ({ change, value }) =>{
    return(
        <input onChange={change} value={value} name="email" placeholder={"输入号码"} ></input>
    )
}

export default SignUpNumber;