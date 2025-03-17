import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="events"><Events /></div>
            <div id="contact"><Contact /></div>
        </>
    );
}

export default App;