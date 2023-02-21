import React from 'react'
// import { items } from "../assets/data/items"
import { useAppSelector } from '../store'
import "./items.css"


const Items = () => {

    const items = useAppSelector((state) => state.form.itemsList)
    console.log(items)
    return (
        <div className='item-big-wrapper'>
            <div className='item-title'>
                <h1>Lost items</h1>
                <p>Can you see anything that is yours?</p>
            </div>
            <div className='item-wrapper'>
                {items && items.map((item) => {
                    const { id, image, title, location, lost_date, other, description } = item
                    // const { color, size, shape, description } = vital_properties
                    return (
                        <div key={id} className="item-container">
                            <div className={`${items.length <= 2 ? "item-box small" : "item-box"}`}>
                                <div className='item-box-image'>
                                    <img src={image} />
                                </div>
                                <div className='item-box-description'>
                                    <h3>{title}</h3>
                                    <h4>{lost_date}</h4>
                                    <div className='vital-properties-box'>
                                        {/* <p>Color - {color}</p>
                                        <p>Size - {size}</p>
                                        <p>Shape - {shape}</p> */}
                                        <p> {description}</p>
                                    </div>
                                    <h3>{location}</h3>
                                    <p>{other}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Items