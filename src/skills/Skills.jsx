import s from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import {Title} from "../common/components/Title";
import {WaypointWrapper} from "./WaypointWrapper";


function Skills() {

    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container + " " + s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <WaypointWrapper title1={'JavaScript'} title2={'TypeScript'} title3={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                    <WaypointWrapper title1={'Redux'} title2={'MaterialIU'} title3={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                    <WaypointWrapper title1={'AXIOS'} title2={'TypeScript2'} title3={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;



