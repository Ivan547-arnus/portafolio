import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import HomeIcon from '../images/icons/home.png'
import InfoIcon from '../images/icons/info.png'
import ProjectIcon from '../images/icons/maletin.png'
import Instagram from "../images/icons/instagram.png"
import Linkedin from "../images/icons/linkedin.png"
import Github from "../images/icons/github.png"

const Navbar = (props) => {

    return(
        <div className="Navbar">
            <div className="Navbar__item">
                <Link to="/">
                    <img src={HomeIcon} className="iconMenu" alt="Home Icon" />
                    <span className="info">Home</span>
                </Link>
            </div>
            <div className="Navbar__item">
                <Link to="/about">
                    <img src={InfoIcon} className="iconMenu" alt="Proyectos en los que he trabajado" />
                    <span className="info">About</span>
                </Link>
            </div>
            <div className="Navbar__item">
                <Link to="/projects">
                    <img src={ProjectIcon} className="iconMenu" alt="Mis habilidades" />
                    <span className="info">Portafolio</span>
                </Link>
            </div>
            <div className="Navbar__item md-none">
                
            </div>
            <div className="Navbar__item md-none">
                <div className="border">
                    <a href="https://www.instagram.com/ivan.villegas547/?hl=es-la">
                        <img src={Instagram} className="icon" alt="Instagram icon"/>
                    </a>
                </div>
            </div>
            <div className="Navbar__item md-none">
                <div className="border">
                    <a href="https://www.instagram.com/ivan.villegas547/?hl=es-la">
                        <img src={Linkedin} className="icon" alt="Instagram icon"/>
                    </a>
                </div>
            </div>
            <div className="Navbar__item md-none">
                <div className="border">
                    <a href="https://www.instagram.com/ivan.villegas547/?hl=es-la">
                        <img src={Github} className="icon" alt="Instagram icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar