import React from "react";

const SignUpNumber = ({ change, value }) =>{
    return(
        <input onChange={change} value={value} name="email" placeholder={"Email"} ></input>
    )
}

export default SignUpNumber;