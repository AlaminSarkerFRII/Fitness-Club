import React from 'react';
import Header from '../Header/Header';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>
            </div>
            <div className="right-h">
                <h1>right side hero</h1>
            </div>
        </div>
    );
};

export default Hero;