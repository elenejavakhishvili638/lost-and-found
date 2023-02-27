import React from 'react'
import "./button.css"
import { buttonProps } from '../../types/propsTypes'
import { useNavigate } from "react-router-dom"

const Button: React.FC<buttonProps> = ({ text, to, className }) => {
    const navigate = useNavigate()
    return (
        <button className={className} onClick={() => navigate(`${to}`)}>{text}</button>
    )
}

export default Button