import s from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import {Title} from "../common/components/Title";
import {WaypointWrapper} from "./WaypointWrapper";
import React from "react";
import ReactIcon from '../common/IconsSkills/ReactIcon'
import ReduxIcon from '../common/IconsSkills/ReduxIcon'
import JavaScriptIcon from '../common/IconsSkills/JavaScriptIcon'
import TypeScriptIcon from '../common/IconsSkills/TypeScriptIcon'
import APIIcon from '../common/IconsSkills/APIIcon'
import StyledComponentsIcon from '../common/IconsSkills/StyledComponentsIcon'
import SassIcon from '../common/IconsSkills/SassIcon'
import AxiosIcon from '../common/IconsSkills/AxiosIcon'
import JestIcon from '../common/IconsSkills/JestIcon'
import AntdIcon from "../common/IconsSkills/AntdIcon";
import FormikIcon from "../common/IconsSkills/FormikIcon";

const skills1 = {
    block1:{
        icon: <ReactIcon/>,
        title: "React",
        description: "JavaScript-based UI development library."
    },
    block2:{
        icon: <ReduxIcon />,
        title: "Redux",
        description: "JavaScript library for managing and centralizing application state."
    },
    block3:{
        icon: <JavaScriptIcon />,
        title: "JavaScript",
        description: "The Programming Language for the Web that conforms to the ECMAScript specification. "
    },
}
const skills2 ={
    block1:{
        icon: <TypeScriptIcon />,
        title: "TypeScript",
        description: "A syntactic superset of JavaScript which adds static typing."
    },
    block2:{
        icon: <APIIcon />,
        title: "Rest API",
        description: "Architectural style for an application program interface (API) that uses HTTP requests to access and use data."
    },
    block3:{
        icon:<AntdIcon/>,
        title:"Ant Design",
        description:" UI library based on React, providing modular and customizable components with accessibility and internationalization support."
    },

}
const skills3 ={
    block1:{
        icon: <SassIcon />,
        title: "SASS",
        description: "Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS."
    },
    block2:{
        icon: <AxiosIcon />,
        title: "Axios",
        description: "Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests."
    },
    block3:{
        icon: <JestIcon />,
        title: "Jest",
        description: "JavaScript library for creating, running, and structuring tests."
    },
}


function Skills() {

    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container + " " + s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <WaypointWrapper data={skills1}/>
                    <WaypointWrapper data={skills2}/>
                    <WaypointWrapper data={skills3}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;





