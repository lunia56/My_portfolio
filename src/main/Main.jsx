import style from "./Main.module.css"
import styleContainer from "./../common/styles/Container.module.css"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I'm Lunin Ilya</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
