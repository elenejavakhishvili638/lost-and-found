import React from 'react'
import "./sidebar.css"
import { categories } from "../../assets/data/categories"
import { useAppSelector, useAppDispatch } from '../../store'
import { IoMdClose } from "react-icons/io"
import { sidebar } from '../../store/NavbarSlice'
import { Link, useMatch } from 'react-router-dom'
import Footer from './Footer'


const Sidebar = () => {

    const sideBarstate = useAppSelector((state) => state.navbar.open);
    const dispatch = useAppDispatch()


    return (
        <div className={sideBarstate ? "sidebar-container open" : "sidebar-container"}>
            <div className='close-icon-container' onClick={() => { dispatch(sidebar(false)) }}>
                <IoMdClose className='close-icon' />
            </div>
            <div className="category-list">
                {/* <Link to="/" className='category-list-item active-link'><div>HOME</div></Link> */}
                {categories.map(category => {
                    const match = useMatch(category.to)
                    return (
                        <Link to={category.to} className={`${match ? "category-list-item active-link" : "category-list-item"}`}><div>{category.title}</div></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar