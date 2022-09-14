import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import s from "./Projects.module.css"
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={styleContainer.container + " " + s.projectsContainer}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.skills}>
                    <Project title={"Project 1"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>
                    <Project title={"Project 2"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
