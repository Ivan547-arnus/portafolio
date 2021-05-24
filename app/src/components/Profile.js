import React from 'react'
import './styles/Profile.css'
import Bg from '../images/bg.svg'
import Balls from '../images/balls.svg'

function Profile(){
    return(
        <div className="Profile__container">
            <div className="Profile__bg">
                <img className="Profile__ellipse" src={Bg} alt="fondo" />
                <img className="Profile__balls" src={Balls} alt="Balls acompañando el fondo" />
            </div>
            Hello bro ya soy un componente hecho y derecho
        </div>
    )
}

export default Profile