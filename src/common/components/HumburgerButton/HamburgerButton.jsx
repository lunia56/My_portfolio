import { motion } from "framer-motion";
import React, { useState } from "react";
import s from './HumburgerButton.module.scss'



const HamburgerButton = ({modalHandler,isOpen}) => {

    const toggleButton = () => modalHandler(!isOpen);

    return (
        <button
            onClick={toggleButton}
            className={s.hamburgerButton}

        >
            <motion.span
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : 16,
                    backgroundColor: "#ffffff",
                    width: isOpen ? "40px" : "32px",
                }}
                className={s.hamburgerBar}

            />
            <motion.span
                animate={{
                    opacity: isOpen ? 0 : 1,
                    backgroundColor: "#ffffff",
                    width: isOpen ? 0 : "32px",
                }}
                className={s.hamburgerBarMiddle}

            />
            <motion.span
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : -16,
                    backgroundColor: "#ffffff",
                    width: isOpen ? "40px" : "32px",
                }}
                className={s.hamburgerBar}

            />
        </button>
    );

};

export default HamburgerButton;