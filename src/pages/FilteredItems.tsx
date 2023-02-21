import React from 'react'
import { useAppSelector } from '../store'
import "./filteredItems.css"

const FilteredItems = () => {
    const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    return (
        <div className='items-near-you-container'>

            <div className='item-wrapper'>
                {filteredItems.length === 0 ? <p>Come back later, here is nothing</p> : (
                    <>
                        <button>Closer</button>
                        {filteredItems && filteredItems.map((item) => {
                            const { id, image, title, location, lost_date, other, description } = item
                            // const { color, size, shape, description } = vital_properties
                            return (
                                <div key={id} className="item-container">
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
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default FilteredItems