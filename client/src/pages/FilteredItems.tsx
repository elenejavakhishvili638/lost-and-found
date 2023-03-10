import React, { useEffect, useState } from 'react'
import { items } from '../assets/data/items'
import { useAppSelector, useAppDispatch } from '../store'
// import { setThreshold } from '../store/NearYouItems'
import { nearYouProps } from '../types/propsTypes'
import { Link, useLocation } from "react-router-dom"
import "./filteredItems.css"
import { Items } from '../types/itemsTypes'


const FilteredItems = () => {

    const location = useLocation()
    // const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    // const threshold = useAppSelector((state) => state.nearYouItem.threshold)
    // const dispatch = useAppDispatch()

    const { filteredItems } = location.state

    // const [val, setVal] = useState<string>("1000")

    // console.log(val, threshold)

    // const handle = () => {
    //     console.log("clicked")
    //     // navigator.geolocation.getCurrentPosition((position) => {   })
    //     dispatch(calculateDistances({ items: items, threshold, location: { address: { latitude, longitude } } }))
    //     // dispatch(handleClick({handleClick: handleClicks}))

    // }

    return (
        <div className='items-near-you-container'>
            <Link className='home-page-button' to="/">Go Back</Link>
            <div className='item-wrapper'>
                {/* <div className='filter-by-distance'>
                    <label>Select the distance</label>
                    <input type="number" value={val} onChange={(event) => {
                        setVal(event.target.value)
                    }} />
                    <button onClick={() => handle()}>Filter Closer</button>
                </div> */}
                {filteredItems && filteredItems.length === 0 ? <p className='empty-page-text'>Come back later, here is nothing!</p> : (
                    <>
                        {filteredItems && filteredItems.map((item: Items) => {
                            const { id, image, title, location, lost_date, other, description, address } = item
                            // const { color, size, shape, description } = vital_properties
                            return (
                                <Link key={id} className="item-container" to={`/item/${id}`} state={{ image, title, location, lost_date, other, description, address }}>
                                    <div className={`${filteredItems.length <= 2 ? "item-box small" : "item-box"}`}>
                                        <div className='item-box-image'>
                                            <img src={image} />
                                        </div>
                                        <div className='item-box-description'>
                                            <h3>{title}</h3>
                                            <h4>{lost_date}</h4>
                                            <div className='vital-properties-box'>
                                                <p> {description}</p>
                                            </div>
                                            <h3>{location}</h3>
                                            <p>{other}</p>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default FilteredItems
