import React from 'react'
import { Link } from "react-router-dom"
import UploadProduct from '../components/product/UploadProduct'
import "./home.css"

const Home = () => {
    return (
        <div className='home-page'>
            <div className='lost-and-found-container'>
                <h3>Whould you like to find things you have lost?</h3>
                <h3>Or help the ones who have lost ?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="products">
                    See the products
                </Link>
            </div>
            <div className='your-products'>
                <UploadProduct />
            </div>
            <div className='near-your-place'>

            </div>
            <div className="reviews">

            </div>
        </div>
    )
}

export default Home