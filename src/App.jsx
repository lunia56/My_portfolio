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


function App() {
    return (

        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <CallToAction/>
            <Contacts/>
            <Footer/>

        </div>

    );
}

export default App;
