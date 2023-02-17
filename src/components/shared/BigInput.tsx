import React from 'react'
import { inputProps } from '../../types/propsTypes'

const BigInput: React.FC<inputProps> = ({ value, name, title, type, className, onChanges }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} name={name} value={value} onChange={onChanges} />
        </div>
    )
}

export default BigInput