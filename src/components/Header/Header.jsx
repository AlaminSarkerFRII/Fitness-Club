import React from 'react';
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" className='logo' />
            <ul className='header-menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Programs</li>
                <li>Plan</li>
                <li>Testimonial</li>
            </ul>
        </div>
    );
};

export default Header;