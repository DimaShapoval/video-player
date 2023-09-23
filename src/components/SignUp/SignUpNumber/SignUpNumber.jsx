import React from "react";
import InputMask from "react-input-mask";

const SignUpNumber = ({ change, value }) =>{
    return(
        <InputMask mask="+(86)-999-9999-9999" onChange={change} name="email" value={value} placeholder={"电话号码"} ></InputMask>
    )
}

export default SignUpNumber;