import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import s from "./Projects.module.scss"
import Project from "./project/Project";
import {Title} from "../common/components/Title";
import {SlickSlide} from "../common/components/slick-slide";



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

                    <SlickSlide />

                    {/*<Project title={"Project 1"}*/}
                    {/*         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>*/}
                    {/*<Project title={"Project 2"}*/}
                    {/*         description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>*/}

                </div>
            </div>
        </div>
    );
}

export default Projects;
