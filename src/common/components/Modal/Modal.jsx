
import React from "react";
import s from './Modal.module.scss'
import {useState} from "react";
import Nav from "../../../nav/Nav";


export const MyModal =({isOpen,modalHandler})=>{

return(
    <div>
    {isOpen && (
        <div className={s.modal}>
            <Modal>
                <Nav modalHandler={modalHandler}/>
            </Modal>
        </div>
    )}
    </div>
)
}
export const Modal = ({ children }) => {
    return (
        <div
            className={s.modalContent}
        >
            {children}
        </div>
    );
};
