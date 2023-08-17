import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'infinite-react-carousel';
import style from "./ScrollTopPictures.module.css"
import { useLocation } from 'react-router-dom';

const ScrollTopPictures = ({ classForGalary, infoForSlider, context }) => {
    const location = useLocation().pathname
    const [scrollClass, setScrollClass] = useState(null)
    const [scrollImages, setScrollImages] = useState(null)
    const [slider, setSlider] = useState(null)
    useEffect(() => { //create items for carusel
        setScrollImages([...infoForSlider].map(item => item.id < 100 ?
            <h3 key={item.id} >
                <div className={style.imageWrapper} >
                    <img src={`${context}/${item.picture}`} alt="" key={item.id} style={{ backgroundSize: 'cover', width: 'auto', height: '300px' }} />
                </div>
            </h3> : null))

    }, [infoForSlider, location.length])
    useEffect(() => { //create carusel with items in useEffect because Slider not update if he render
        setSlider(() => {
            return <Slider{...settings}>{scrollImages ? scrollImages : <h3>1</h3>}</Slider>
        })
    }, [scrollImages, location.length])
    // useEffect(() => { //check calss
    //     (classForGalary === "show" ? setScrollClass(`${style.wrapper} ${style.show}`) : setScrollClass(`${style.wrapper} ${style.hide}`))
    // }, [location.length])


    const settings = {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: 10,
        className: "lol",
        duration: 300,
        gutter: 40,
        initialSlide: 0
    };
    return (
        <div className={`${style.wrapper} ${scrollClass}`} >
            {scrollImages ? slider : null}
        </div>
    );

}

export default React.memo(ScrollTopPictures);