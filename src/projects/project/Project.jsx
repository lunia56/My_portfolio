import style from "./Project.module.scss"
import s from "../../projects/project/Project.module.scss";
import React from "react";

function Project({titleProject, title, description}) {
    return (<>
            <span className={s.portfolioType}>{titleProject}</span>
            <h2 className={s.contentTitle}>{title}</h2>
            <p>{description}</p>
            <div className={s.linkDefault}>
                <a href="#">View Live</a>
                <span className={s.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                </span>
            </div>
        </>
//
//     <div className={style.project}>
//         // <div className={style.imgContainer}>
//         // <button className={style.button}><a href="#">Смотреть</a></button>
//         // </div>
//         // <div className={style.container}><h3 className={style.title}>{props.title}</h3>
//         // <span className={style.description}>{props.description}</span></div>
//         // </div>
    );
}

export default Project;
