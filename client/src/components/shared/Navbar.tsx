import React from 'react'
import Logo from "../../assets/images/error-404.png"
import "./navbar.css"
import { useAppDispatch } from '../../store'
import { sidebar } from '../../store/NavbarSlice'
import { pages } from "../../assets/data/pages"
import { Link, useMatch, useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()



    return (
        <div className='navbar'>
            <div className='navbar-logo-container' onClick={() => dispatch(sidebar(true))}>
                <img className='navbar-logo' src={Logo} alt="logo" />
            </div>
            <h1 className='navbar-title' onClick={() => navigate("/")}>Lost and Found</h1>
            <div className="category-list-navbar">
                {pages.map((page, index) => {
                    const match = useMatch(page.to)
                    return (
                        <Link key={index} to={page.to} className={`${match ? "category-list-item-navbar active-link-navbar" : "category-list-item-navbar"}`}><div>{page.title}</div></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar