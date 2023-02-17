import React from 'react'
import { inputProps, textareaProps } from '../../types/propsTypes'

const Textarea: React.FC<textareaProps> = ({ title, name, value, className, rows, cols, onChanges }) => {
    return (
        <div className={className}>
            <label>{title}</label>
            <textarea rows={rows} cols={cols} name={name} value={value} onChange={onChanges} />
        </div>
    )
}

export default Textarea