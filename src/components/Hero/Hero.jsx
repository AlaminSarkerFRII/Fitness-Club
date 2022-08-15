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
                    <div>
                        <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+940</span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>+100</span>
                        <span>fitness programs</span>
                    </div>

                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">See More </button>
                </div>
            </div>
            <div className="right-h">
                <h1>right side hero</h1>
            </div>
        </div>
    );
};

export default Hero;