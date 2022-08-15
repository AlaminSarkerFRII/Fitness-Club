import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import Heroimage from "../../assets/hero_image.png"
import Heroimageback from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import heart from "../../assets/heart.png"



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
                <button className='btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={heart} alt="heart-rate" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                {/* hero images */}
                <img src={Heroimage} alt="" className='hero-image' />
                <img src={Heroimageback} alt="" className='hero-image-back' />
                {/* calories */}
                <div className="calories">
                    <img src={calories} alt="calories-imgs" className='calories-imgs' />
                    <div><span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;