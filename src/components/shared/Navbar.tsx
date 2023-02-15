import React, { useState } from 'react'
import Logo from "../../assets/images/download.png"
import "./navbar.css"
import { useAppSelector, useAppDispatch } from '../../store'
import { sidebar } from '../../store/NavbarSlice'

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
        </div>
    )
}

export default Navbar