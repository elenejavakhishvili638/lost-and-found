import React from 'react'
import "./footer.css"
import Bag from '../../assets/images/lost-and-found-bag.png'
import Map from "../../assets/images/lost-and-found-map.png"
import Lost from "../../assets/images/lost.png"
import Logo from "../../assets/images/lost-and-found.png"

const Footer = () => {
    return (
        <>
            <div className='design-logos'>
                {/* <img src={Bag} />
                <img src={Map} />
                <img src={Lost} />
                <img src={Logo} alt="" /> */}
            </div>
            <div className='footer'>
                <span>2023</span>
                <a href='#'>Contact us</a>
            </div>
        </>
    )
}

export default Footer