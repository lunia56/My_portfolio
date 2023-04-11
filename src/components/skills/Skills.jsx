import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Title} from '../../common/components/Title';
import React from 'react';
import ReactIcon from '../../common/IconsSkills/ReactIcon'
import ReduxIcon from '../../common/IconsSkills/ReduxIcon'
import JavaScriptIcon from '../../common/IconsSkills/JavaScriptIcon'
import TypeScriptIcon from '../../common/IconsSkills/TypeScriptIcon'
import APIIcon from '../../common/IconsSkills/APIIcon'
import SassIcon from '../../common/IconsSkills/SassIcon'
import AxiosIcon from '../../common/IconsSkills/AxiosIcon'
import JestIcon from '../../common/IconsSkills/JestIcon'
import AntdIcon from '../../common/IconsSkills/AntdIcon';
import Skill from './skill/Skill';
import {Fade} from 'react-awesome-reveal';
import NextIcon from '../../common/IconsSkills/Next';
import reactQueryIcon from './../../common/image/react-query-seeklogo.com.svg'
import ChakraUI from '../../common/IconsSkills/ChackraUI';

const skills = [
    {
        icon: <ReactIcon/>,
        title: 'React',
        description: 'JavaScript-based UI development library.'
    },
    {
        icon: <ReduxIcon/>,
        title: 'Redux',
        description: 'JavaScript library for managing and centralizing application state.'
    },
    {
        icon: <JavaScriptIcon/>,
        title: 'JavaScript',
        description: 'The Programming Language for the Web that conforms to the ECMAScript specification. '
    },
    {
        icon: <TypeScriptIcon/>,
        title: 'TypeScript',
        description: 'A syntactic superset of JavaScript which adds static typing.'
    },
    {
        icon: <APIIcon/>,
        title: 'Rest API',
        description: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.'
    },
    {
        icon: <AxiosIcon/>,
        title: 'Axios',
        description: 'Promise-based library used with Node.js and make asynchronous HTTP requests.'
    },
    {
        icon: <AntdIcon/>,
        title: 'Ant Design',
        description: ' UI library based on React, providing modular and customizable components with accessibility and inter-nationalization support.'
    },
    {
        icon: <ChakraUI/>,
        title: 'Chakra UI',
        description: 'A React component library for building accessible and responsive user interfaces quickly.'
    },
    {
        icon: <SassIcon/>,
        title: 'SASS',
        description: 'Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.'
    },

    {
        icon: <JestIcon/>,
        title: 'Jest',
        description: 'JavaScript library for creating, running, and structuring tests.'
    },
    {
        icon: <NextIcon/>,
        title: 'Next',
        description: 'A React framework that provides server-side rendering, automatic code splitting, and optimized performance.'
    },
    {
        icon: <img src={reactQueryIcon} alt={'image'} width={'70px'} height={'70px'}/>,
        title: 'ReactQuery',
        description: 'A React library for fetching, caching and updating server state and caching data in the client.'
    },

]


function Skills() {

    return (
        <div className={s.skillsBlock} id="skillsBlock">
            <div className={styleContainer.container + ' ' + s.skillsContainer}>
                <Title title={'Skills'}/>
                <div className={s.skills}>

                    {skills.map((el, index) => {
                        return <Fade cascade duration={3000} key={index}>
                            <Skill key={index} title={el.title}
                                   description={el.description} icon={el.icon}/>
                        </Fade>
                    })}

                </div>
            </div>
        </div>
    );
}

export default Skills;





