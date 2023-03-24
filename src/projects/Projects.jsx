import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import s from "./Projects.module.scss"
import Project from "./project/Project";
import {Title} from "../common/components/Title";
import {SlickSlide} from "../common/components/slick-slide";
import React, {useRef} from "react";

function Projects() {
    const social = {
        // backgroundImage: `url(${})`
        //     выше вставляем импортиррованную картинку и затем этот объект прокидываем в каждый проект в свойство style
        //     свойство оптимизирует картинку по середине родителя
        //     backgroundSize:cover
        //     backgroundPosition:center
        //     backgroundRepeat:noRepeat
    }
    return (
        <div className={s.projectsBlock}>
            <div className={styleContainer.container + " " + s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.projects}>
                    <SlickSlide/>
                    <img className={s.dotsImage} src="https://demo.themecon.net/onlyme/html/images/dot-texture.png"
                         alt="dots"/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
