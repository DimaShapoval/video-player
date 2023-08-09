import React, { useState } from "react";
import style from "./Burger.module.css"
import Routing from "../../Routing/Rounting";
import { NavLink } from "react-router-dom";


const Burger = () => {
    const [burgerTriger, setBurgerTriger] = useState(false);
    const [humburgerClass, setHumburgerClass] = useState(`${style.humburger}`)

    const toggleBurger = ()=>{
        setBurgerTriger(!burgerTriger);
        humburgerClass == `${style.humburgerActive}` ?
         setHumburgerClass(`${style.humburger}`) : setHumburgerClass(`${style.humburgerActive}`);
        
    }
    return (
        <div className={style.wrapper} >
            
            <div className={style.wrapper} >
                <div className={humburgerClass} onClick={toggleBurger} >
                    <div className={`${style.burger} ${style.burger1}`} ></div>
                    <div className={`${style.burger} ${style.burger2}`} ></div>
                    <div className={`${style.burger} ${style.burger3}`} ></div>
                </div>
            </div>
            {
            burgerTriger ? //check that burger clicked if true show our burger menu
        <div className={`${style.navigetor}  ${style.active}`} >
        <ul>
            <NavLink to="./movies" className={style.navLinks} >Movies</NavLink>
            <NavLink to="./series" className={style.navLinks} >Series</NavLink>
            <NavLink to="./cartoons" className={style.navLinks} >Cartoons</NavLink>
        </ul>
    </div> :
     <div className={style.navigetor} > 
     <ul>
         <NavLink to="./movies" className={style.navLinks} >Movies</NavLink>
         <NavLink to="./series" className={style.navLinks} >Series</NavLink>
         <NavLink to="./cartoons" className={style.navLinks} >Cartoons</NavLink>
     </ul>
 </div>
        
            }
            
        </div>


    )
}

export default Burger