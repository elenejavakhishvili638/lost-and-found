import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store'
import "./nearYouitems.css"
import map from "../../assets/images/lost-and-found-map.png"
import { nearYouProps } from '../../types/propsTypes'

const NearYouItems: React.FC<nearYouProps> = ({ filteredItems }) => {
    // const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    return (
        <div className='items-near-you'>
            <div className='items-near-you-title'>
                <span>Items near you</span>
                <Link to="/filtered-items">See more</Link>
            </div>
            {filteredItems.length === 0 ? <p className='items-near-you-text'>There is nothing near you</p> : (
                <div className='item-wrapper-small'>
                    {filteredItems && filteredItems[0] &&
                        (
                            <div key={filteredItems[0].id} className="item-container-small">
                                <div className='item-box small-near'>
                                    <div className='item-box-image'>
                                        <img src={filteredItems[0].image} />
                                    </div>
                                    <div className='item-box-description'>
                                        <h3>{filteredItems[0].title}</h3>
                                        <h4>{filteredItems[0].lost_date}</h4>
                                        <div className='vital-properties-box'>
                                            {/* <p>Color - {filteredItems[0].vital_properties.color}</p>
                                            <p>Size - {filteredItems[0].vital_properties.size}</p>
                                            <p>Shape - {filteredItems[0].vital_properties.shape}</p> */}
                                            <p> {filteredItems[0].description}</p>
                                        </div>
                                        <h3>{filteredItems[0].location}</h3>
                                        <p>{filteredItems[0].other}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    {/* <img src={map} alt="map" className='near-you-image' /> */}
                </div>
            )}
        </div>
    )
}

export default NearYouItems