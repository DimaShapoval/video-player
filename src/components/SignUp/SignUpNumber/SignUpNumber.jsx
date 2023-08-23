import React from "react";
import InputMask from 'react-input-mask';

const SignUpNumber = ({ change, value }) =>{
    return(
        <InputMask onChange={change} value={value} name="number" mask={"(+86) 999-9999-9999"} placeholder={"输入号码"} ></InputMask>
    )
}

export default SignUpNumber;