import React from 'react'
import "./loading.css"
const Loading = () => {
    return (
        <div className='items-near-you' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading