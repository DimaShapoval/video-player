import React, { useState } from "react";

const SignUpPassword = ({ typeOfInput, name, change, value }) => {
    return (
        <input type={typeOfInput} name={name} onChange={change} value={value} placeholder="输入密码" />
    )
}

export default SignUpPassword;