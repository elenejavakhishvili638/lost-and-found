import React from 'react'
import { inputProps, textareaProps } from '../../types/propsTypes'

const Textarea: React.FC<textareaProps> = ({ title, name, value, className, rows, cols }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <textarea rows={rows} cols={cols} />
        </div>
    )
}

export default Textarea