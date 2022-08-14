import React from 'react';
import Header from '../Header/Header';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                <div className="the-best-add">
                    <div></div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/* hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                </div>
            </div>
            <div className="right-h">
                <h1>right side hero</h1>
            </div>
        </div>
    );
};

export default Hero;