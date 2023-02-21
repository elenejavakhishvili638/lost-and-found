import React from 'react'
import "./sidebar.css"
import { pages } from "../../assets/data/pages"
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
                {pages.map((page, index) => {
                    const match = useMatch(page.to)
                    return (
                        <Link key={index} to={page.to} onClick={() => { dispatch(sidebar(false)) }} className={`${match ? "category-list-item active-link" : "category-list-item"}`}><div>{page.title}</div></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar