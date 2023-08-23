import React, { useState, useEffect, useMemo } from 'react';
import style from "./ScrollTopPictures.module.css"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import ImageGallery from "react-image-gallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollTopPictures = ({ classForGalary, infoForSlider, context }) => {
    const [moviesInfo, setMovieInfo] = useState([])
    const location = useLocation().pathname
    const [scrollClass, setScrollClass] = useState(null)
    const [scrollImages, setScrollImages] = useState(null)
    const [slider, setSlider] = useState(null)
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        initialSlide: 0,
        accessibility: false,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };
    useMemo(() => {
        axios.get('https://akvani.com/php/send_film_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
            .then(res => {
                let data = res.data;
                setMovieInfo(data); //add info to state
            })
    }, [])
    useEffect(() => { //create items for carusel
        setScrollImages([...moviesInfo].map(item => item.id < 60 ?
            <h3 key={item.id} >
                <div className={style.imageWrapper} >
                    <img src={`${context}/${item.picture}`} alt="" key={item.id} style={{ backgroundSize: 'cover', width: 'auto', height: '300px' }} />
                </div>
            </h3> : null))

    }, [moviesInfo])
    useEffect(() => { //create carusel with items in useEffect because Slider not update if he render
        setSlider(() => {
            return (scrollImages ? <Slider className={style.slider} {...settings}>{scrollImages}</Slider> : <Slider{...settings}>{<h3>1</h3>}</Slider>)
        })
    }, [scrollImages, location.length])
    return (
        <div className={`${style.wrapper} ${scrollClass}`} >
            {scrollImages ? <Slider   className={style.slider} {...settings}>{scrollImages}</Slider> : null}
        </div>
    );

}

export default React.memo(ScrollTopPictures);