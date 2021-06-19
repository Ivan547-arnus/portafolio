import React from 'react'
import './styles/Navbar.css'
import HomeIcon from '../images/icons/home.png'
import InfoIcon from '../images/icons/info.png'
import ProjectIcon from '../images/icons/maletin.png'

function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar__item">
                <img src={HomeIcon} alt="Home Icon" />
            </div>
            <div className="Navbar__item">
                <img src={InfoIcon} alt="Proyectos en los que he trabajado" />
            </div>
            <div className="Navbar__item">
                <img src={ProjectIcon} alt="Mis habilidades" />
            </div>
        </div>
    )
}

export default Navbar