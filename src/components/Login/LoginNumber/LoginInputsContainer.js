import React, { useState } from "react";
import LoginNumber from "./LoginNumber";
import style from "./LoginNumber.module.css"
import LoginPassword from "./LoginPassword";
import { NavLink } from "react-router-dom";

const LoginInputsContainer = () => {
    const [showValuePassword, setshowValuePassword] = useState(["visibility_off", "password"])
    const [inputValue, setInputValue] = useState({ number: '', password: '' });
    const [wrapperClassName, setWrapperClassName] = useState(`${style.wrapper}`)
   
    const handleClick = () => {//check click on eye
        (showValuePassword[1] === "password" ? setshowValuePassword(["visibility", "text"]) : setshowValuePassword(["visibility_off", "password"]))
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
    }
    return (
        <div className={wrapperClassName} >
            <label>电话号码</label>
            <LoginNumber change={controlNumber} value={inputValue.number} />
            <label className={style.label} >密码</label>
            <div className={style.passwordWrapper} >
                <LoginPassword value={inputValue.password} change={controlNumber} typeOfInput={showValuePassword[1]} />
                <span onClick={handleClick} className={`material-symbols-outlined`}>
                    {showValuePassword[0]}
                </span>
            </div>
            <div className={style.signUpWrapper} >
                <p>没有帐户？ 让我们 <NavLink to={"/sign-up"} >报名</NavLink></p>
            </div>
            <div className={style.submitWrapper} >
                <input onClick={checkValueInRequest} type="submit" value={"进来"} />
            </div>

        </div>
    )
}

export default LoginInputsContainer