import s from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import {FaCopyright} from "react-icons/fa";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {SocialIcons} from "../common/components/SocialIcons";
import {Link} from "react-scroll";
import codewarsSvg from "../common/image/codewars.svg";
import style from "../nav/Nav.module.scss";
import telegramSvg from "../common/image/telegram.svg";
import linkedinSvg from "../common/image/linkedIn.svg";
import githubSvg from "../common/image/githubSvg.svg";

function Footer() {
    return (
        <div className={ s.footerBlock}>
            <div className={styleContainer.container + " " +s.footerContainer}>

                    <h3 className={s.title}>  <AiOutlineCopyrightCircle /> 2023 Developed By
                        <Link to="mainBlock" smooth={true} duration={1000} > Ilya Lunin</Link>. All Right Reserved</h3>

                <div className={s.socialIconsBlock}>
                    <a href={'https://www.codewars.com/users/lunia56'} target="_blank"><img alt="svgImg"
                                                                                            src={codewarsSvg}/></a>
                    <a href={'https://t.me/gradient56'} target="_blank"><img alt="svgImg"
                                                                             src={telegramSvg}/></a>
                    <a href={'https://www.linkedin.com/in/ilya-lunin/'} target="_blank"><img alt="svgImg"
                                                                                             src={linkedinSvg}/></a>
                    <a href={'https://github.com/lunia56'} target="_blank"><img alt="svgImg"
                                                                                src={githubSvg}/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
