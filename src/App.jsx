import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import CallToAction from "./callToAction/callToAction";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import React, {useRef, useState} from "react";
import {Modal} from "./common/components/Modal/Modal";


function App() {

    const [isVisible, setIsVisible] = useState(true);

    const hideElements = (isVisible) => {
        setIsVisible(isVisible);
    };
    return (

        <div className="App">


            <Modal/>
            <Header hideElement={hideElements} isVisible={isVisible}/>
            {isVisible && (
                <>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <CallToAction/>
                    <Contacts/>
                    <Footer/>
                </>
            )}

        </div>

    );
}

export default App;
