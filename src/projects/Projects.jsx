import s from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import {Title} from "../common/components/Title";
import {SlickSlide} from "../common/components/slick-slide";
import React from "react";

function Projects() {

    return (
        <div className={s.projectsBlock} id='portfolioBlock'>
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
