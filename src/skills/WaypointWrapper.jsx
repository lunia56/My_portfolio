import {useState} from "react";
import {Waypoint} from "react-waypoint";
import s from "./Skills.module.scss";
import Skill from "./skill/Skill";

export const WaypointWrapper = ({title1,title2,title3,description1,description2,description3}) => {
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

