import React from 'react'
import { useParams, useLocation, Link } from "react-router-dom"
import "./item.css"

const Item = () => {
    const itemId = useParams()
    const locations = useLocation()
    console.log(locations.state)
    const { image, title, description, others, address, location, lost_date } = locations.state
    return (
        <div className='item'>
            <div className='item-page-title'>
                <h1>Lost Item</h1>
                <Link to="/items">Back to items</Link>
            </div>
            <div className='each-item-image'>
                <img src={image} alt="pic" />
            </div>
            <div className='each-item-description'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='each-item-info'>
                <div className='each-item-date'>
                    <h3>it was lost:</h3>
                    <p>{lost_date}</p>
                </div>
                <div className='each-item-location'>
                    <h3>Location:</h3>
                    <p>See on the map {location}</p>
                </div>
            </div>
            <p>{others}</p>
        </div>
    )
}

export default Item