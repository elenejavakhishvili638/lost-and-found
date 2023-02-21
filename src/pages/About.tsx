import React from 'react'
import Pic from "../assets/images/6858068.png"
import "./about.css"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-container-wrap'>
                <img src={Pic} alt="about" />
                <div className='about-wrap'>
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default About