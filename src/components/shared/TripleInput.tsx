import React from 'react'
import { inputProps } from '../../types/propsTypes'

const TripleInput: React.FC<inputProps> = ({ title, className, type, name, value }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <input type={type} />
        </div>
    )
}

export default TripleInput