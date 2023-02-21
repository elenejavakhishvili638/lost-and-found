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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </div>
        </div>
    )
}

export default About