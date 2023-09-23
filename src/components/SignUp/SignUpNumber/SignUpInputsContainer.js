import React, { useState } from "react";
import SignUpNumber from "./SignUpNumber";
import style from "./SignUpNumber.module.css"
import SignUpPassword from "./SignUpPassword";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpInputsContainer = ({ successRequest }) => {
    const [showValuePassword, setshowValuePassword] = useState(["visibility_off", "password"])
    const [showValuePassword1, setshowValuePassword1] = useState(["visibility_off", "password"])
    const [inputValue, setInputValue] = useState({ email: '', password: '', confirm_password: '', username: '' });
    const [wrapperClassName, setWrapperClassName] = useState(`${style.wrapper}`)
    const EMAIL_REGEX = /^1[0-9]{10}$/;
    const navigator = useNavigate()
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
    const checkValueInRequest = (e) => { // check value of form and send it to backend
        if (inputValue.email === "" && inputValue.password === "" && inputValue.username || !EMAIL_REGEX.test(inputValue.email.split('-').join("").split(")")[1])  && inputValue.password.length < 6) {
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorAll}`)
        }
        else if(inputValue.username == ""){
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorUser}`)

        }
        else if(!EMAIL_REGEX.test(inputValue.email.split('-').join("").split(")")[1]) ){
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorEmail}`)
        }
        else if(inputValue.password != inputValue.confirm_password){
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorPassword}`)
        }
        else if(inputValue.password.length < 6){
            e.preventDefault();
            setWrapperClassName(`${style.wrapper} ${style.errorPassword}`)
        }
        else{
            e.preventDefault();
            console.log("hu");
            axios.post('php/register_process.php', inputValue, { headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
                if(res.data.status === "success"){
                    successRequest();
                }
                else{
                    e.preventDefault();
                    setWrapperClassName(`${style.wrapper} ${style.errorAll}`)
                }
            })
        }
    }
    
    return (
        <div className={wrapperClassName} >
            <label className={style.userLabel}>用户名</label>
            <input className={style.username} onChange={controlNumber} value={inputValue.username} name="username" placeholder="用户名" />
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
                <SignUpPassword value={inputValue.secondPassword} name="confirm_password" change={controlNumber} typeOfInput={showValuePassword1[1]} />
                <span onClick={handleClick1} className={`material-symbols-outlined`}>
                    {showValuePassword1[0]}
                </span>
            </div>
            <div className={style.submitWrapper} >
                <input onClick={checkValueInRequest} type="button"  value={"进来"} />
            </div>

        </div>
    )
}

export default SignUpInputsContainer