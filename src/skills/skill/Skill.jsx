import style from "./Skill.module.scss"

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.skillIcon}>{props.icon}</div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.skillDescription}>{props.description}</span>
        </div>
    );
}

export default Skill;

