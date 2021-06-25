import React from 'react'
import './styles/Loader.css'

const Loader = (props) =>{
    return(
        <div className="loader">
            <div className="space-top"></div>
            <div className="pixel-loader">
                <div className="first-shape">
                </div>
                <div className="second-shape">
                </div>
                <div className="third-shape">
                </div>
                <div className="fourth-shape">
                </div>
            </div>
            <div className="text">
                <p><strong>{props.label}</strong></p>
            </div>
            <div className="space-bot"></div>
        </div>
    )
}

export default Loader