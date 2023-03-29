import {motion} from "framer-motion";
import React, {useState} from "react";
import s from './HumburgerButton.module.scss'


const HamburgerButton = ({modalHandler, isOpen}) => {

    const [hover, setHover] = useState(false)
    const toggleButton = () => modalHandler(!isOpen);
    console.log('hover',hover)
    const variants = {
        hover: {width: '24px'},
        initial: {width: '32px'},
    };
    return (
        <motion.div
            // whileHover="hover"
            onClick={toggleButton}
            className={s.hamburgerButton}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}

        >
            <motion.span
                // variants={variants}

                // whileHover="hover"
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : 16,
                    width: isOpen ? "40px" : "32px",
                }}
                className={s.hamburgerBar}
            />
            <motion.span
                // variants={variants}
                // whileHover={"hover"}
                animate={{
                    opacity: isOpen ? 0 : 1,
                    width: isOpen ? 0 : "32px",
                }}
                className={s.hamburgerBarMiddle}

            />
            <motion.span
                // whileHover="hover"
                // variants={variants}
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : -16,
                    width: isOpen ? "40px" : "32px",
                }}
                className={s.hamburgerBar}

            />
        </motion.div>
    );

};

export default HamburgerButton;