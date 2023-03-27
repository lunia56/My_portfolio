import style from "./Nav.module.scss"
import {SocialIcons} from "../common/components/SocialIcons";


function Nav(props) {
    return (
        <div className={style.navBlock}>
            <div className={style.nav}>
                <a onClick={props.modalHandler} href="#mainBlock">About</a>
                <a onClick={props.modalHandler} href="#skillsBlock">Skills</a>
                <a onClick={props.modalHandler} href="#portfolioBlock">Portfolio</a>
                <a onClick={props.modalHandler} href="#contactsBlock">Contacts</a>
                <div className={style.followMe}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Want to talk?</span>
                        <span className={style.email}>lunia199426@gmail.com</span>
                    </div>
                    <div style={{
                        display: 'flex', flexDirection: 'column'}}>
                        <span>Follow me:</span>
                        <SocialIcons/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Nav;


