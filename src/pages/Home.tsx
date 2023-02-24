import { useEffect, useState } from 'react'
import NearYouItems from '../components/product/NearYouItems'
import UploadProduct from '../components/product/UploadProduct'
import Reviews from '../components/Reviews'
import "./home.css"
import { useAppSelector, useAppDispatch } from '../store'
import { setLatitude, setLongitude, calculateDistances } from "../store/NearYouItems"
import { items } from '../assets/data/items'
import Loading from '../components/shared/Loading'
import Button from '../components/shared/Button'

const Home = () => {

    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const longitude = useAppSelector((state) => state.nearYouItem.address.longitude)
    const latitude = useAppSelector((state) => state.nearYouItem.address.latitude)
    const filteredItems = useAppSelector((state) => state.nearYouItem.filteredItems)
    const [threshold, setThreshold] = useState<number>(1000)
    //  const [val, setVal] = useState<string>("1000")
    // let threshold = useAppSelector((state) => state.nearYouItem.threshold)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch(setLatitude(position.coords.latitude))
            dispatch(setLongitude(position.coords.longitude))
            dispatch(calculateDistances({ items: items, threshold, location: { address: { latitude, longitude } } }))
            // dispatch(handleClick({handleClick: handleClicks}))
            setIsLoading(false)
        })
    }, [isLoading, threshold])

    const handleClick = (data: number) => {
        setThreshold(data)
    }

    return (
        <div className='home-page'>
            <div className="main-wrapper-first">
                <div className='lost-and-found-container'>
                    <h3>Whould you like to find things you have lost?</h3>
                    <h3>Or help the ones who have lost ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Button text='See the items' className='home-page-button' to="/items" />
                </div>
                <div className='your-products'>
                    <UploadProduct />
                </div>
            </div>
            <div className="main-wrapper-second">

                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        {/* <div className='filter-by-distance'>
                            <label>Select the distance</label>
                            <input type="text" value={threshold} onChange={(event) => {
                                setThreshold(Number(event.target.value))
                            }} />
                        </div> */}
                        <NearYouItems filteredItems={filteredItems} threshold={threshold} handleClick={handleClick} />
                    </>
                )}
                <Reviews />

            </div>
        </div >
    )
}

export default Home



        // const fetchGeoLocation = async () => {
        //     try {
        //         console.log(isLoading)
        //         const position: GeolocationPosition = await new Promise((resolve, reject) => {
        //             navigator.geolocation.getCurrentPosition(resolve, reject)
        //         })
        //         dispatch(setLatitude(position.coords.latitude))
        //         dispatch(setLongitude(position.coords.longitude))
        //         dispatch(calculateDistances({ items: items, threshold, location: { address: { latitude, longitude } } }))
        //         setIsLoading(false)
        //         console.log(isLoading)
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }
        // console.log(isLoading)

             // fetchGeoLocation()