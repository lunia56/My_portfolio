import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import styler from "./Skills.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styler.skillsBlock}>
            <div className={styleContainer.container + " " + styler.skillsContainer}>
                <h2 className={styler.title}>Skills</h2>
                <div className={styler.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>
                    <Skill title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt di"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
