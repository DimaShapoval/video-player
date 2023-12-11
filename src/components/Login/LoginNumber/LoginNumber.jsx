import React from "react";
import InputMask from 'react-input-mask';

const LoginNumber = ({ change, value }) => {
    return (
<<<<<<< HEAD
        <input onChange={change} name="email" value={value} type="email" placeholder={"Email"} ></input>
=======
        <InputMask mask="+(86)-999-9999-9999" onChange={change} name="email" value={value} placeholder={"电子邮件"} ></InputMask>
>>>>>>> faa59d96d908161701628d5460c0c0bf0fd78a24
    )
}

export default LoginNumber;