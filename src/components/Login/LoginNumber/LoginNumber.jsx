import React from "react";
import InputMask from 'react-input-mask';

const LoginNumber = ({ change, value }) => {
    return (
        <InputMask onChange={change} name="number" value={value} mask={"(+86) 999-9999-9999"} placeholder={"输入号码"} ></InputMask>
    )
}

export default LoginNumber;