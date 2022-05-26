import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './Logo.png'


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner"> <img src={logo} alt='logo' /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;
