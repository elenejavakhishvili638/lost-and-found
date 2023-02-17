import React from 'react'
import { inputProps } from '../../types/propsTypes'

const SmallInput: React.FC<inputProps> = ({ title, type, className, name, value, onChanges }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} onChange={onChanges} name={name} value={value} />
        </div>
    )
}

export default SmallInput