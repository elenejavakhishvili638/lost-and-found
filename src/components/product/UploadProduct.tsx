import React from 'react'
import { Link } from 'react-router-dom'
import "./uploadProduct.css"

const UploadProduct = () => {
    return (
        <div className='upload-product-container'>
            <div className='upload-product-wrapper'>
                <h3>Did you lose something? <br />
                    <Link to="/upload-product">Click here  </Link> to fill out the form
                    and find where it is.
                </h3>
            </div>
        </div>
    )
}

export default UploadProduct