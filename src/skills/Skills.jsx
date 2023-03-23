import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import styler from "./Skills.module.scss"
import Skill from "./skill/Skill";
import {Title} from "../common/components/Title";


function Skills() {
    return (
        <div className={styler.skillsBlock}>
            <div className={styleContainer.container + " " + styler.skillsContainer}>
                <Title title={'Skills'}/>
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
