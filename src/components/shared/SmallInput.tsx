import React from 'react'
import "./smallInput.css"
import { inputProps } from '../../types/propsTypes'
import { TbError404, TbSquareCheck } from "react-icons/tb"


const SmallInput: React.FC<inputProps> = ({ title, type, className, name, value, onChanges }) => {

    // const errorStyle = error?.length !== 0 ? '' : "error-icon"
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} onChange={onChanges} name={name} value={value} />
        </div>
    )
}

export default SmallInput