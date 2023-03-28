import style from "./Nav.module.scss"
import {SocialIcons} from "../common/components/SocialIcons";
import {Link} from "react-scroll";


function Nav({modalHandler}) {
    return (
        <div className={style.navBlock}>
            <div className={style.nav}>
                <Link  onClick={modalHandler} to="mainBlock" smooth={true} duration={1000} >About</Link>
                <Link  onClick={modalHandler} to="skillsBlock" smooth={true} duration={1000}>Skills</Link>
                <Link  onClick={modalHandler} to="portfolioBlock" smooth={true} duration={1000}>Portfolio</Link>
                <Link  onClick={modalHandler} to="contactsBlock" smooth={true} duration={1000}>Contacts</Link>

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


