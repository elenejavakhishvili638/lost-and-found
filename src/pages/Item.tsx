import React, { useState } from 'react'
import { useParams, useLocation, Link, useNavigate } from "react-router-dom"
import MapModal from '../components/MapModal'
import Button from '../components/shared/Button'
import "./item.css"

const Item = () => {
    const itemId = useParams()
    const locations = useLocation()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const { image, title, description, other, address, location, lost_date } = locations.state
    console.log(other)
    return (
        <div className='item' >
            <div className='item-page-title'>
                <h1>Lost Item</h1>
                {/* <button onClick={() => navigate(-1)} >Back to items</button> */}
                <Button text='Back to items' to='/items' className='home-page-button ' />
            </div>
            <div className='item-big-screen'>
                <div>
                    <div className='each-item-image'>
                        <img src={image} alt="pic" />
                    </div>
                    <div className='each-item-wrapper'>
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
                                <p>See on the map <span onClick={() => setOpenModal(!openModal)}>{location}</span></p>
                            </div>
                        </div>
                        <p>{other}</p>
                    </div>
                </div>
                {openModal && (
                    <div className='map-wrapper'>

                        <MapModal center={address} zoom={18} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Item