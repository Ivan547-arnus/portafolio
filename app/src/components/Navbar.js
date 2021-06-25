import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import HomeIcon from '../images/icons/home.png'
import InfoIcon from '../images/icons/info.png'
import ProjectIcon from '../images/icons/maletin.png'

const Navbar = (props) => {

    const handleClick = (el) => {
        alert(el);
    }

    return(
        <div className="Navbar">
            <div className="Navbar__item">
                <Link to="/">
                    <img src={HomeIcon} alt="Home Icon" />
                </Link>
            </div>
            <div className="Navbar__item">
                <Link to="/about">
                    <img src={InfoIcon} alt="Proyectos en los que he trabajado" />
                </Link>
            </div>
            <div className="Navbar__item">
                <img onClick={() => {handleClick("Projects")}} src={ProjectIcon} alt="Mis habilidades" />
            </div>
        </div>
    )
}

export default Navbar