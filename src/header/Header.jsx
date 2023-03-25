import style from "./Header.module.scss"
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.hamburger}>
                <span></span><span></span><span></span>
            </div>
            <Nav/>
        </div>
    );
}

export default Header;
