import React from "react"
import style from "./ConfirmCode.module.css"
import { useState } from "react";
import { useEffect } from "react";

const ConfirmCode = () => {
    const [inputsValues, setInputsValues] = useState({first: '', second: '', third: '', fourth: '', fifth: '', sixth: ''})
    const [ allCode, setAllCode ] = useState(null)
    const testJump = (elem) => {
        let maxLength = elem.getAttribute('maxlength');
        if(maxLength && elem.value.length == maxLength){
            elem = elem.nextSibling;
            if(elem && /number/.test(elem.type) || elem && /text/.test(elem.type)){
                elem.focus();
            }
        }
        else if(maxLength && elem.value.length < maxLength){
            elem = elem.previousSibling;
            if(elem && /number/.test(elem.type) || elem && /text/.test(elem.type)){
                elem.focus();
            }
        }
    }
    useEffect(()=>{
        setAllCode(Object.values(inputsValues).join(''))
    }, [inputsValues])
    const controlValue = (elem) => {
        if(/[^\d]/g.test(elem.value)){
            return false;
        }
        setInputsValues({...inputsValues, [elem.name]: elem.value})
    }
    return(
        <div className={style.wrapper} >
            <div className={style.inputWrapper}>
            <input type="text" pattern="[0-9]" name="first" value={inputsValues.first} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            <input type="text" pattern="[0-9]" name="second" value={inputsValues.second} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            <input type="text" pattern="[0-9]" name="third" value={inputsValues.third} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            <input type="text" pattern="[0-9]" name="fourth" value={inputsValues.fourth} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            <input type="text" pattern="[0-9]" name="fifth" value={inputsValues.fifth} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            <input type="text" pattern="[0-9]{1}"  name="sixth" value={inputsValues.sixth} onInput={e => {testJump(e.target); controlValue(e.target)}} maxLength={"1"} size={"1"}/>
            </div>
            <div className={style.submitWrapper} >
                <input type="button"  value={"进来"} />
            </div>
           
        </div>
    )
}

export default ConfirmCode;