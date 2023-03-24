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
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);







    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container + " " + s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    {/*<div  class="block" className={s.skillSection}>*/}
                    {/*    Hello World*/}
                    {/*</div>*/}
                    {/*<Skill title={"JS"}*/}
                    {/*       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>*/}
                    {/*<Skill title={"TypeScript"}*/}
                    {/*       description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>*/}
                    {/*<Skill title={"React"}*/}
                    {/*       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt di"}/>*/}


                    <div>
                        <Waypoint onEnter={() => setIsVisible1(true)}
                                  fireOnRapidScroll={false}
                                  bottomOffset='20%'
                                  // topOffset="10%"
                        />
                        {isVisible1 && (
                            <div className={s.block}>
                                <Skill title={"JS"}
                                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt dicta harum reprehenderit sequi, vitae."}/>
                                <Waypoint onEnter={() => setIsVisible2(true)}
                                          fireOnRapidScroll={false}
                                          bottomOffset='20%'
                                          // topOffset="10%"
                                />
                            </div>
                        )}
                        {isVisible2 && (
                            <div className={s.block}>
                                <Skill title={"TypeScript"}
                                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing "}/>
                                <Waypoint onEnter={() => setIsVisible3(true)}
                                          fireOnRapidScroll={false}
                                          bottomOffset='20%'
                                          // topOffset="10%"
                                />
                            </div>
                        )}
                        {isVisible3 && (
                            <div className={s.block}>
                                <Skill title={"React"}
                                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt di"}/>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Skills;



