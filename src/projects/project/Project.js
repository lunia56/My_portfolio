import style from "./Project.module.css"

function Project(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.container}><h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span></div>
        </div>
    );
}

export default Project;
