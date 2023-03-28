import { animateScroll as scroll } from 'react-scroll';
import s from './ScrollBatton.module.scss'
function ButtonToTop({ showButton }) {
    const handleClick = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            {showButton && (
                <button className={s.scrollButton} onClick={handleClick}>
                    Вверх
                </button>
            )}
        </>
    );
}

export default ButtonToTop;