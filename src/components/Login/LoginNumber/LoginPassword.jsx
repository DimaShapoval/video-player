import React, { useState } from "react";

const LoginPassword = ({ typeOfInput, change, value }) => {
    return (
        <input value={value} name="password" onChange={change} type={typeOfInput} placeholder="输入密码" />
    )
}

export default LoginPassword;