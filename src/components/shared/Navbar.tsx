import React, { useState } from 'react'
import Logo from "../../assets/images/download.png"
import "./navbar.css"
import { useAppSelector, useAppDispatch } from '../../store'
import { sidebar } from '../../store/NavbarSlice'
import { categories } from "../../assets/data/categories"
import { Link, useMatch } from 'react-router-dom'

const Navbar: React.FC = () => {

    const categoryType = useAppSelector((state) => state.navbar.value);
    const sideBarstate = useAppSelector((state) => state.navbar.open);
    const dispatch = useAppDispatch()

    // const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    return (
        <div className='navbar'>
            <div className='navbar-logo-container' onClick={() => dispatch(sidebar(true))}>
                <img className='navbar-logo' src={Logo} alt="logo" />
            </div>
            <h1 className='navbar-title'>Lost and Found</h1>

            <div className="category-list-navbar">
                {/* <Link to="/" className='category-list-item active-link'><div>HOME</div></Link> */}
                {categories.map(category => {
                    const match = useMatch(category.to)
                    return (
                        <Link to={category.to} className={`${match ? "category-list-item-navbar active-link-navbar" : "category-list-item-navbar"}`}><div>{category.title}</div></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar