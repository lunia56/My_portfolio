import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import CallToAction from "./callToAction/callToAction";
import ContactsWithFooter from "./contacts/ContactsWithFooter";
import Footer from "./footer/Footer";
import React, {useState} from "react";
import {MyModal} from "./common/components/Modal/Modal";


function App() {

    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(!isOpen);
        setIsVisible(isVisible);
    };

    return (

        <div className="App">


            <MyModal modalHandler={modalHandler} isOpen={isOpen}/>
            <Header modalHandler={modalHandler} isOpen={isOpen}/>
            {isVisible && (
                <>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <CallToAction/>
                    <ContactsWithFooter/>
                    {/*<Footer/>*/}
                </>
            )}

        </div>

    );
}

export default App;
