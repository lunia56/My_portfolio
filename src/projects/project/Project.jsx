import style from "./Project.module.scss"
import s from "../../projects/project/Project.module.scss";
import React from "react";

function Project({titleProject, title, description,image,id}) {
    return (<div className={s.slickContainer}>
            <img className={s.slickImage} src={image} alt="projectImage"/>
            <div className={s.slickInfo}><span className={s.portfolioType}>{titleProject}</span>
                <h2 className={s.contentTitle}>{title}</h2>
                <p className={s.contentDescription}>{description}</p>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div className={s.linkDefault}>
                        <a href="#">View Live</a>
                        <span className={s.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                </span>
                    </div>
                    <div className={s.linkDefault}>
                        <a href="#">View Code</a>
                        <span className={s.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                </span>
                        <h3 className={s.count}>{id}/3</h3>
                    </div>
                </div>

            </div>
        </div>
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
