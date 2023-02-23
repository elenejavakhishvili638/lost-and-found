import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import "./nearYouitems.css"
import map from "../../assets/images/lost-and-found-map.png"
import { nearYouProps } from '../../types/propsTypes'
import { calculateDistances } from '../../store/NearYouItems'
import { items } from '../../assets/data/items'

const NearYouItems: React.FC<nearYouProps> = ({ filteredItems }) => {


    return (
        <div className='items-near-you'>
            <div className='items-near-you-title'>
                <span>Items near you</span>
                <Link to="/filtered-items" state={{ filteredItems: filteredItems }}>See more</Link>
            </div>
            {filteredItems.length === 0 ? <p className='items-near-you-text'>There is nothing near you</p> : (
                <div className='item-wrapper-small'>
                    {filteredItems && filteredItems[0] &&
                        (
                            <Link key={filteredItems[0].id} className="item-container-small" to={`/item/${filteredItems[0].id}`} state={{ image: filteredItems[0].image, title: filteredItems[0].title, location: filteredItems[0].location, lost_date: filteredItems[0].lost_date, other: filteredItems[0].other, description: filteredItems[0].description, address: filteredItems[0].address }}>
                                <div className='item-box small-near'>
                                    <div className='item-box-image'>
                                        <img src={filteredItems[0].image} />
                                    </div>
                                    <div className='item-box-description'>
                                        <h3>{filteredItems[0].title}</h3>
                                        <h4>{filteredItems[0].lost_date}</h4>
                                        <div className='vital-properties-box'>
                                            <p> {filteredItems[0].description}</p>
                                        </div>
                                        <h3>{filteredItems[0].location}</h3>
                                        <p>{filteredItems[0].other}</p>
                                    </div>

                                </div>
                            </Link>
                        )
                    }
                    {/* <img src={map} alt="map" className='near-you-image' /> */}
                </div>
            )}
        </div>
    )
}

export default NearYouItems