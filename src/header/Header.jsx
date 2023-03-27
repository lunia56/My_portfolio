import style from "./Header.module.scss"
import HamburgerButton from "../common/components/HumburgerButton/HamburgerButton";

function Header({modalHandler,isOpen}) {

    return (
        <div className={style.header}>

            <HamburgerButton modalHandler={modalHandler}isOpen={isOpen}/>
        </div>
    );
}

export default Header;
