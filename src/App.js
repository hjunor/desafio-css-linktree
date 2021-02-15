import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Canva from './Canva';

function App() {
    return (
        <div className="app">
            <Particles options={particlesOptions}/>
            <Canva/>
        </div>
    );
}

export default App;
