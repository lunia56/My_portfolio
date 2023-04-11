import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ContactsWithFooter from "./components/contacts/ContactsWithFooter";
import React, {useState} from "react";
import {ModalNavBar} from "./common/components/Modals/ModalNavbar";


function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(!isOpen);
        setIsVisible(isVisible);
    };

    return (

        <div className="App">


            <ModalNavBar modalHandler={modalHandler} isOpen={isOpen}/>
            <Header modalHandler={modalHandler} isOpen={isOpen}/>
            {isVisible && (
                <>
                    <Main/>
                    <Projects/>
                    <Skills/>
                    <ContactsWithFooter/>
                </>
            )}

        </div>

    );
}

export default App;

