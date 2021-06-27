import React from 'react'
import './styles/Arvis.css'
import ArvisLogo from '../images/projects/Arvis.png'
import PlayStore from '../images/icons/playstore.png'
import AppStore from '../images/icons/appstore.png'

const Arvis = (props) => {

    return(
        <div className="container"><div className="Arvis__container">
                <div className="Arvis__header">
                    <img className="Arvis__logo" src={ArvisLogo} alt="Arvis Logo"  />
                    <div className="Arvis__titles">
                        <p className="Arvis__subtitle quicksand">Augmented Reality App</p>
                        <h1 className="Arvis__title">Arvis</h1>
                    </div>
                </div>
                <div className="Arvis__content">
                    <p className="Arvis__description">
                        This is a app developed in Unity3D with Artificial Intelligence and surface tracking to show diferents games, filters or intereaction on device.
                    </p>
                    <p className="Arvis__description">
                        This app was developed as entertaiment with AR experiencies to more devices.
                    </p>
                </div>
                <div className="Arvis__footer">
                    <div className="Arvipace__playstore">
                        <a href="https://Arvis.com" className="">
                            <img className="" src={PlayStore} alt="" />
                        </a>
                    </div>
                    <div className="Arvis__appstore">
                        <a href="https://Arvis.com" className="">
                            <img className="" src={AppStore} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Arvis