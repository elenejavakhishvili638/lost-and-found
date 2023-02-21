import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { errorProps } from '../../types/propsTypes'

const ErrorComp: React.FC<errorProps> = ({ className, text }) => {
    return (
        <div className={className}>
            <TbError404 className="error-icon-date" />
            <p>Fill in!</p>
        </div>
    )
}

export default ErrorComp