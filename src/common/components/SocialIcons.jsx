import style from "../../nav/Nav.module.scss";
import codewarsSvg from "../image/codewars.svg";
import telegramSvg from "../image/telegram.svg";
import linkedinSvg from "../image/linkedIn.svg";
import githubSvg from "../image/githubSvg.svg";

export const SocialIcons = () => {
    return (
            <ul style={{display: 'flex'}}>
                <li className={style.socialIcon}>
                    <a href={'https://www.linkedin.com/in/ilya-lunin/'} target="_blank"><img alt="svgImg"
                                                                                             src={linkedinSvg}/></a>
                </li>
                <li className={style.socialIcon}>
                    <a href={'https://t.me/gradient56'} target="_blank"><img alt="svgImg"
                                                                             src={telegramSvg}/></a>
                </li>

                <li className={style.socialIcon}>
                    <a href={'https://www.codewars.com/users/lunia56'} target="_blank"><img alt="svgImg"
                                                                                            src={codewarsSvg}/></a>
                </li>
                <li className={style.socialIcon}>
                    <a href={'https://github.com/lunia56'} target="_blank"><img alt="svgImg"
                                                                                src={githubSvg}/></a>
                </li>
            </ul>
    );
}