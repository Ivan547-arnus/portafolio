import React from 'react'
import './styles/Navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar__item">
                Inicio
            </div>
            <div className="Navbar__item">
                Proyectos
            </div>
            <div className="Navbar__item">
                Habilidades
            </div>
        </div>
    )
}

export default Navbar