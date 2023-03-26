import style from "./Header.module.scss"
import Nav from "../nav/Nav";
import {Modal} from "../common/components/Modal/Modal";
import {useState} from "react";

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(!isOpen);
        props.hideElement(!props.isVisible)
    };

    return (
        <div className={style.header}>

            <button onClick={modalHandler}>{isOpen?'Закрыть':'Открыть'}</button>
            {isOpen && (
                <Modal >
                    <Nav/>
                </Modal>
            )}
        </div>
    );
}

export default Header;
