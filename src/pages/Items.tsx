import { Link } from 'react-router-dom'
import { useAppSelector } from '../store'
import "./items.css"
import Button from '../components/shared/Button'


const Items = () => {
    const items = useAppSelector((state) => state.form.itemsList)
    return (
        <div className='item-big-wrapper'>
            <div className='item-title'>
                <div>
                    <h1>Lost items</h1>
                    <p>Can you see anything that is yours?</p>
                </div>
                <Button text="Go Back" className="home-page-button2" to="/" />
            </div>
            <div className='item-wrapper'>
                {items && items.map((item) => {
                    const { id, image, title, location, lost_date, other, description, address } = item
                    return (
                        <div key={id} className="item-container">
                            <Link to={`/item/${id}`} state={{ image, title, location, lost_date, other, description, address }}>
                                <div className={`${items.length <= 2 ? "item-box small" : "item-box"}`}>
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Items