import React, { useRef } from 'react'
import './styles/Skills.css'

const Skill = (props) => {
    let markerPercent = useRef(null)
    const showMarkerPercent = () => {
        markerPercent.current.style.width = props.percent
    }
    return(
        <div className="Skill__container" onLoad={()=>showMarkerPercent()}>
            <img className="Skill_image" src={props.url} alt={props.alt} />
            <div className="Skills__button-range">
                <div className="bg">
                    <div ref={markerPercent} className="marker">
                    </div>
                </div>
            </div>
            <p className="percent">{props.percent}</p>
        </div>
    )
}

export default Skill