import React from "react";
import s from './ModalNavbar.module.scss'
import Nav from "../../../components/nav/Nav";
import {AnimatePresence, motion} from "framer-motion";


export const ModalNavBar = ({isOpen, modalHandler}) => {

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={s.modal}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                    >
                        <Modal>
                            <Nav modalHandler={modalHandler}/>
                        </Modal>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
export const Modal = ({children}) => {
    return (
        <div className={s.modalContent}>
            <motion.div
                style={{height: '100%', marginTop: '30px'}}
                initial={{y: "-100vh"}}
                animate={{y: 5}}
                exit={{y: "-100vh"}}
                transition={{duration: 0.2}}>
                {children}
            </motion.div>
        </div>
    );
};
