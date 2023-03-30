import style from "./Project.module.scss"
import s from "../../projects/project/Project.module.scss";
import React from "react";

function Project({titleProject, title, description,stack,image,id,linkCode,linkView}) {
    return (<div className={s.slickContainer}>
            <img className={s.slickImage} src={image} alt="projectImage"/>
            <div className={s.slickInfo}><span className={s.portfolioType}>{titleProject}</span>
                <h2 className={s.contentTitle}>{title}</h2>
                <p className={s.contentDescription}>{description}</p>
                <p className={s.contentDescription}>{stack}</p>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div className={s.linkDefault}>
                        <a href={linkView?linkView:'#'} target={'_blank'}>View Live
                        <span className={s.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                </span></a>
                    </div>
                    <div className={s.linkDefault}>
                        <a href={linkCode} target={'_blank'}>View Code
                        <span className={s.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                </span></a>
                        <h3 className={s.count}>{id}/3</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
