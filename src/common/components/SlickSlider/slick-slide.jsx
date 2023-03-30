import React from "react";
import Slider from "react-slick";
import s from './slickSlider.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from "../../../projects/project/Project";
import project1 from '../../image/project1.png'
import project2 from '../../image/project2.png'
import project3 from '../../image/project3.png'

function NextArrow({onClick}) {
    return (
        <button className={s.slickArrowRight} onClick={onClick}><img
            src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/></button>)
}

function PrevArrow({onClick}) {
    return (
        <button className={s.slickArrowLeft} onClick={onClick}><img
            src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/></button>)

}

export function SlickSlide() {

    const sliderSettings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick/>,
        prevArrow: <PrevArrow onClick/>,
    }
    return (
        <div>
            <Slider {...sliderSettings}>
                <Project titleProject={"Project 1"} title={"Todolist"} id={1}
                         image={project1}
                         description={"This is a list-making app that allows users to write tasks, plans, and any other important things on a list, and then mark them as needed."}
                         stack={'Stack: TypeScript, React, Redux, React-Hook-Form, Axios, Ant Design. '}
                linkCode={'https://github.com/lunia56/Todolist2'}
                linkView={''}/>
                <Project titleProject={"Project 2"} title={"Teaching Cards"} id={2}
                         image={project2}
                         description={"This project is an indispensable aid in learning new information."}
                         stack={'Stack: TypeScript, React, Redux, React-Hook-Form, Axios, Ant Design. '}
                         linkCode={'https://github.com/Sm0ke070/cards'}
                         linkView={'https://sm0ke070.github.io/cards/#/'}
                />
                <Project titleProject={"Project 3"} title={"Social Network"} id={3}
                         image={project3}

                         description={"A social network that allows people to create profiles, make posts, find friends, and send messages."}
                         stack={'Stack: TypeScript, React, React-router-dom,  Redux, React-Hook-Form, Axios, '}
                linkCode={'"https://github.com/lunia56/Way-of-the-samurai-"'}
                         linkView={'https://lunia56.github.io/Way-of-the-samurai-/#/profile'}/>

            </Slider>
        </div>
    )
}