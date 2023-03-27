import logo from '../logo.svg';
import style from "./Nav.module.scss"
import telegramSvg from '../common/image/telegram.svg'
import linkedinSvg from '../common/image/linkedIn.svg'
import githubSvg from '../common/image/githubSvg.svg'
import codewarsSvg from '../common/image/codewars.svg'

function SocialIcons() {
    return <ul style={{color: "red", display: 'flex'}}>
        <li className={style.socialIcon} >
            <a href={'https://www.codewars.com/users/lunia56'} target="_blank"><img className={style.codewars} alt="svgImg"
                    src={codewarsSvg}/></a>
        </li>
        <li className={style.socialIcon}>
            <a href={'https://t.me/gradient56'} target="_blank"><img alt="svgImg"
                    src={telegramSvg}/></a>
        </li>
        <li className={style.socialIcon}>
            <a href={'https://www.linkedin.com/in/ilya-lunin/'} target="_blank" ><img alt="svgImg"
                                                                     src={linkedinSvg}/></a>
        </li>
        <li className={style.socialIcon}>
            <a href={'https://github.com/lunia56'} target="_blank"><img alt="svgImg"
                    src={githubSvg}/></a>
        </li>
    </ul>;
}

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
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Follow me:</span>
                        <SocialIcons/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Nav;


