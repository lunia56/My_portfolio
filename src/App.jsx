import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import CallToAction from "./callToAction/callToAction";
import ContactsWithFooter from "./contacts/ContactsWithFooter";
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
                    {/*<CallToAction/>*/}
                    <ContactsWithFooter/>
                </>
            )}

        </div>

    );
}

export default App;

