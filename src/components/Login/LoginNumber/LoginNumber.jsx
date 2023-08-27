import React from "react";
import InputMask from 'react-input-mask';

const LoginNumber = ({ change, value }) => {
    return (
        <input onChange={change} name="email" value={value} type="email" placeholder={"输入号码"} ></input>
    )
}

export default LoginNumber;