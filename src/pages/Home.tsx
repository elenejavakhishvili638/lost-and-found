import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import NearYouItems from '../components/product/NearYouItems'
import UploadProduct from '../components/product/UploadProduct'
import Reviews from '../components/Reviews'
import "./home.css"
import { useAppSelector, useAppDispatch } from '../store'
import { setLatitude, setLongitude, calculateDistances } from "../store/NearYouItems"
import { items } from '../assets/data/items'


const Home = () => {

    const dispatch = useAppDispatch()
    const longitude = useAppSelector((state) => state.nearYouItem.address.longitude)
    const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    const latitude = useAppSelector((state) => state.nearYouItem.address.latitude)
    // const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    const threshold: number = 100

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch(setLatitude(position.coords.latitude))
            dispatch(setLongitude(position.coords.longitude))
        })
    }, [])


    useEffect(() => {
        dispatch(calculateDistances({ items: items, threshold, location: { address: { latitude, longitude } } }))
    }, [])

    console.log(filteredItems, longitude, latitude, items[0].address)

    return (
        <div className='home-page'>
            <div className="main-wrapper-first">
                <div className='lost-and-found-container'>
                    <h3>Whould you like to find things you have lost?</h3>
                    <h3>Or help the ones who have lost ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link to="/items">
                        See the items
                    </Link>
                </div>
                <div className='your-products'>
                    <UploadProduct />
                </div>
            </div>
            <div className="main-wrapper-second">
                {/* <div className='near-your-place'></div> */}
                <NearYouItems />

                {/* <div className="reviews"> </div> */}
                <Reviews />

            </div>
        </div>
    )
}

export default Home