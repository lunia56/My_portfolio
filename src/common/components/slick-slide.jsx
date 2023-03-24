import React from "react";
import Slider from "react-slick";
import s from './slickSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from "../../projects/project/Project";

function NextArrow({onClick}) {
    return (
        <button className={s.slickArrowRight} onClick={onClick}><img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/></button>)
}

function PrevArrow({onClick}) {
    return (
        <button className={s.slickArrowleft} onClick={onClick}><img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/></button>)

}

export function SlickSlide() {

    const sliderSettings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick/>,
        prevArrow: <PrevArrow onClick/>,
    }
    return (
        <div className={s.slickSlider}>
            <Slider {...sliderSettings}>
                <Project titleProject={"Project 1"} title={"lorem10 lorem10 lorem10  "} id={1}
                         image={'https://demo.themecon.net/onlyme/html/images/portfolio12.jpg'}
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>
                <Project titleProject={"Project 2"} title={"lorem10 lorem10 lorem10  "} id={2}
                         image={'https://demo.themecon.net/onlyme/html/images/portfolio11.jpg'}

                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>
                <Project titleProject={"Project 3"} title={"lorem10 lorem10 lorem10  "} id={3}
                         image={'https://demo.themecon.net/onlyme/html/images/portfolio13.jpg'}

                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>

            </Slider>
        </div>
    )
}