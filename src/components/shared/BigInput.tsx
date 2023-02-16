import React from 'react'
import { inputProps } from '../../types/propsTypes'

const BigInput: React.FC<inputProps> = ({ value, name, title, type, className }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} />
        </div>
    )
}

export default BigInput