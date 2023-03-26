import style from "./Header.module.scss"
import s from '../common/components/Modal/Modal.module.scss'
import Nav from "../nav/Nav";
import {Modal} from "../common/components/Modal/Modal";
import {useState} from "react";

function Header(props) {

    return (
        <div className={style.header}>

            <button onClick={props.modalHandler}>{props.isOpen ? 'Закрыть' : 'Открыть'}</button>

        </div>
    );
}

export default Header;
