import React, { useState } from "react";
import LoginNumber from "./LoginNumber";
import style from "./LoginNumber.module.css"
import LoginPassword from "./LoginPassword";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginInputsContainer = () => {
    const [showValuePassword, setshowValuePassword] = useState(["visibility_off", "password"])
    const [inputValue, setInputValue] = useState({ email: '', password: '' });
    const [wrapperClassName, setWrapperClassName] = useState(`${style.wrapper}`)
    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const navigator = useNavigate()



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
    const checkValueInRequest = (e) => {  // check value of from and send it in backend
        if (inputValue.email === "" && inputValue.password === "" || !EMAIL_REGEX.test(inputValue.email) && inputValue.password.length < 6) {
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorAll}`)
        }
        else if (!EMAIL_REGEX.test(inputValue.email)) {
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorEmail}`)
        }
        else if (inputValue.password.length < 6) {
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorPassword}`)
        }
        else {
            e.preventDefault();
            axios.post('login_process.php', inputValue, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    let data = res.data;
                    if (data.status === "success") {
                        navigator("/")
                        localStorage.setItem("username", data.username)
                        localStorage.setItem("userId", data.id)
                        console.log(localStorage.userId);
                    }
                    else {
                        e.preventDefault();
                        setWrapperClassName(`${style.wrapper} ${style.errorAll}`)
                    }
                })
        }

    }
    return (
        <div className={wrapperClassName} >
            <label>Email</label>
            <LoginNumber change={controlNumber} value={inputValue.email} />
            <label className={style.label} >Password</label>
            <div className={style.passwordWrapper} >
                <LoginPassword value={inputValue.password} change={controlNumber} typeOfInput={showValuePassword[1]} />
                <span onClick={handleClick} className={`material-symbols-outlined`}>
                    {showValuePassword[0]}
                </span>
            </div>
            <div className={style.signUpWrapper} >
                <p>Don't have an account?<NavLink to={"/sign-up"} >Sign up</NavLink></p>
            </div>
            <div className={style.submitWrapper} >
                <input onClick={checkValueInRequest} type="submit" value={"Come in"} />
            </div>

        </div>
    )
}

export default LoginInputsContainer