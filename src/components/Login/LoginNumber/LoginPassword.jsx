import React, { useState } from "react";

const LoginPassword = ({ typeOfInput, change, value }) => {
    return (
        <input value={value} name="password" onChange={change} type={typeOfInput} placeholder="Password" />
    )
}

export default LoginPassword;