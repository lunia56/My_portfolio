import style from "./Project.module.css"

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <button className={style.button}><a href="#">Смотреть</a></button>
            </div>
            <div className={style.container}><h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span></div>
        </div>
    );
}

export default Project;
