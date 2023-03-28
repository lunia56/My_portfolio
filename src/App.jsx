import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import CallToAction from "./callToAction/callToAction";
import ContactsWithFooter from "./contacts/ContactsWithFooter";
import Footer from "./footer/Footer";
import React, {useEffect, useState} from "react";
import {MyModal} from "./common/components/Modal/Modal";
import ButtonToTop from "./common/components/ScrollBatton/ScrollBatton";


function App() {


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
                    <ButtonToTop showButton={showButton} />

                    {/*<Footer/>*/}
                </>
            )}

        </div>

    );
}

export default App;

