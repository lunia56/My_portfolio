import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import s from "./Skills.module.scss"
import Skill from "./skill/Skill";
import {Waypoint} from 'react-waypoint';
import {Title} from "../common/components/Title";
import {useEffect, useState} from "react";
import {point2} from '../projects/Projects'
import {point1} from "../main/Main";


function Skills() {

    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container + " " + s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <WaypointContainer title1={'JavaScript'} title1={'TypeScript'} title1={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                    <WaypointContainer title1={'Redux'} title1={'MaterialIU'} title1={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                    <WaypointContainer title1={'AXIOS'} title1={'TypeScript'} title1={'React'} description1={'d1'}description2={'d1'} description3={'d3'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;



 const WaypointContainer = ({title1,title2,title3,description1,description2,description3}) => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);



    const onEnterHandler = (setIsVisible) => {
        setTimeout(() => {
            setIsVisible(true)
        }, 500);
    };

    function handlePositionChange(block, props) {

        if (block === 'isVisible3' && props.currentPosition === 'above') {
            setIsVisible1(false);
            setIsVisible2(false);
            setIsVisible3(false);
        }
        if (block === 'isVisible1' && props.currentPosition === 'below') {
            setIsVisible1(false);
            setIsVisible2(false);
            setIsVisible3(false);
        }

    }

    return (
        <div>
            <Waypoint onEnter={() => onEnterHandler(setIsVisible1)}
                      onPositionChange={(props) => handlePositionChange('isVisible1', props)}
                      fireOnRapidScroll={false}
                      bottomOffset='20%'
            />
            {isVisible1 && (
                <div className={s.block}>
                    <Skill title={title1}
                           description={description1}/>
                    <Waypoint onEnter={() => onEnterHandler(setIsVisible2)}
                              fireOnRapidScroll={false}
                              bottomOffset='20%'
                    />
                </div>
            )}
            {isVisible2 && (
                <div className={s.block}>
                    <Skill title={title2}
                           description={description2}/>
                    <Waypoint onEnter={() => onEnterHandler(setIsVisible3)}
                              fireOnRapidScroll={false}
                              onPositionChange={(props) => handlePositionChange('isVisible3', props)}
                              bottomOffset='20%'
                    />
                </div>
            )}
            {isVisible3 && (
                <div className={s.block}>
                    <Skill title={title3}
                           description={description3}/>
                </div>
            )}
        </div>
    );
};

