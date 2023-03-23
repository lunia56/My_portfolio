import s from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import {FaCopyright} from "react-icons/fa";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

function Footer() {
    return (
        <div className={ s.footerBlock}>
            <div className={styleContainer.container + " " +s.footerContainer}>
                <h3 className={s.title}>Илья Лунин</h3>
                <div className={s.blocks}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>

                    <h3 className={s.title}>  <AiOutlineCopyrightCircle /> 2022 Все права защищены</h3>

            </div>
        </div>
    );
}

export default Footer;
