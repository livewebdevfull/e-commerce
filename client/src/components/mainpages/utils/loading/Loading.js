import React from 'react'
import './loading.css'
import Loader from './loader.gif'

function Loading() {
    return (
        <div className="load-page">
            <img src={Loader} alt="loading..." />
        </div>
    )
}

export default Loading
