import React from 'react'
import './styles/SportCloset.css'
import SportClosetLogo from '../images/projects/sportcloset.png'

const SportCloset = (props) => {

    return(
        <div className="container">
            <div className="Arvipace__container">
                <div className="SportCloset__header">
                    <img className="SportCloset__logo" src={SportClosetLogo} alt="SportCloset Logo"  />
                    <div className="SportCloset__titles">
                        <p className="SportCloset__subtitle quicksand">Ecommerce web site</p>
                        <h1 className="SportCloset__title">Sport Closet</h1>
                    </div>
                </div>
                <div className="SportCloset__content">
                    <p className="SportCloset__description">
                    This is a ecommerce web site to sell female sport wear using pay from stripe and using tracking shipment to clients.
                    </p>
                    <p className="SportCloset__description">
                    I create this as free lancer optimizating services and creating backend and front end with company image.
                    </p>
                </div>
                <div className="SportCloset__footer">
                    <p>You can see web site <a href="https://sportcloset.mx/">here</a></p>
                </div>
            </div>
        </div>
    )

}

export default SportCloset