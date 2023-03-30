import React from "react";
import s from './ModalContacts.module.scss'
import {AnimatePresence, motion} from "framer-motion";


export const ModalContacts = ({isOpen, modalHandler}) => {

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={s.modal}
                        initial={{x: "-100vh"}}
                        animate={{x: 5}}
                        exit={{x: "-100vh"}}
                        transition={{duration: 0.3}}
                    >
                        <MyModal>
                            <div>
                                <h3 color={'red'}>Thank you for your interest in my person, I will definitely contact you!</h3>
                                <button  onClick={modalHandler}>Ок</button>
                            </div>
                        </MyModal>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
export const MyModal = ({children}) => {
    return (
        <div className={s.modalContent}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}>
                {children}
            </motion.div>
        </div>
    );
};
