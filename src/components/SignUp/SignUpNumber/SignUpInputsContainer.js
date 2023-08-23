import React, { useState } from "react";
import SignUpNumber from "./SignUpNumber";
import style from "./SignUpNumber.module.css"
import SignUpPassword from "./SignUpPassword";
import { NavLink } from "react-router-dom";

const SignUpInputsContainer = () => {
    const [showValuePassword, setshowValuePassword] = useState(["visibility_off", "password"])
    const [showValuePassword1, setshowValuePassword1] = useState(["visibility_off", "password"])
    const [inputValue, setInputValue] = useState({ number: '', password: '', secondPassword: '' });
    const [wrapperClassName, setWrapperClassName] = useState(`${style.wrapper}`)
    const NUMBER_REGEX = /^1[0-9]{10}$/;
    const handleClick = () => {
        (showValuePassword[1] === "password" ? setshowValuePassword(["visibility", "text"]) : setshowValuePassword(["visibility_off", "password"]))
    }
    const handleClick1 = () => {
        (showValuePassword1[1] === "password" ? setshowValuePassword1(["visibility", "text"]) : setshowValuePassword1(["visibility_off", "password"]))
    }
    const controlNumber = (e) => { //create control of inputs that we send to backend later
        let elem = e.target
        let name = elem.name
        setInputValue({ ...inputValue, [name]: elem.value });//check input and add value of this in array of state  
        if (wrapperClassName != `${style.wrapper}`) {
            setWrapperClassName(`${style.wrapper}`)
        }

    }
    const checkValueInRequest = (e) => {
        if (inputValue.number === "" && inputValue.password === "") {
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorAll}`)
        }
        else if(!NUMBER_REGEX.test(inputValue.number)){
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorNumber}`)
        }
    }
    return (
        <div className={wrapperClassName} >
            <p>输入有效值</p>
            <label>电话号码</label>
            <SignUpNumber change={controlNumber} value={inputValue.number} />
            <label className={style.label} >创建密码</label>
            <div className={style.passwordWrapper} >
                <SignUpPassword value={inputValue.password} name="password" change={controlNumber} typeOfInput={showValuePassword[1]} />
                <span onClick={handleClick} className={`material-symbols-outlined`}>
                    {showValuePassword[0]}
                </span>
            </div>
            <label className={style.label} >重复输入密码</label>
            <div className={style.passwordWrapper} >
                <SignUpPassword value={inputValue.secondPassword} name="secondPassword" change={controlNumber} typeOfInput={showValuePassword1[1]} />
                <span onClick={handleClick1} className={`material-symbols-outlined`}>
                    {showValuePassword1[0]}
                </span>
            </div>
            <div className={style.submitWrapper} >
                <input onClick={checkValueInRequest} type="submit"  value={"进来"} />
            </div>

        </div>
    )
}

export default SignUpInputsContainer