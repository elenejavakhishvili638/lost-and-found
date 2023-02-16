import React from 'react'
import { inputProps } from '../../types/propsTypes'

const SmallInput: React.FC<inputProps> = ({ title, type, className, name, value }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} />
        </div>
    )
}

export default SmallInput