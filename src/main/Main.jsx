import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import {SocialIcons} from "../common/components/SocialIcons";
import {Link} from "react-scroll";
import ButtonToTop from "../common/components/ScrollBatton/BattonToTop";
import {useEffect, useState} from "react";
import CV from '../common/files/LuninIlyaCV.pdf'

function Main() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };


    return (
        <div className={style.mainBlock} id='mainBlock'>
            <div className={style.socialIconsBlock}><SocialIcons/></div>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.contentWrapper}>
                    <span className={style.verticalLogo}>
                        <img src="https://demo.themecon.net/onlyme/html/images/vertical-logo.png" alt="verticalLogo"/>
                    </span>
                    <div className={style.heroContent}>
                        <h1 className={style.title}>Hi! I'm Ilya</h1>
                        <h2 className={style.description}>Front-end Developer</h2>
                        <div className={style.linkDefault}>
                            <a style={{position: 'absolute', zIndex: '998'}} target={'_blank'} href={CV}>Download CV
                                <span className={style.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                            </span>
                            </a>
                        </div>

                        <div className={style.linkDefault}>
                            <Link to="contacts" smooth={true} duration={1000}>Hire me
                                <span className={style.linkSpan}>
                    <img src="https://demo.themecon.net/onlyme/html/images/arrow-right-white.png" alt="arrow"/>
                            </span>
                            </Link>
                        </div>

                    </div>
                    <span className={style.photo}/>
                    <img className={style.texture} src="https://demo.themecon.net/onlyme/html/images/dot-texture.png"
                         alt="texture"/>

                </div>
            </div>
            <ButtonToTop showButton={showButton}/>

        </div>
    );
}

export default Main;
