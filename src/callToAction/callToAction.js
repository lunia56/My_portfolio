import s from "./callToAction.module.css"
import styleContainer from "../common/styles/Container.module.css";

function CallToAction() {
    return (
        <div className={ s.callToActionBlock}>
            <div className={styleContainer.container + " " +s.container}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={s.button}><a href="#">Нанять меня</a> </button>
            </div>
        </div>
    );
}

export default CallToAction;
