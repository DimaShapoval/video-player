import React from "react";

const SignUpNumber = ({ change, value }) =>{
    return(
        <input onChange={change} value={value} name="email" placeholder={"电子邮件"} ></input>
    )
}

export default SignUpNumber;