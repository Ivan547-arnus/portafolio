import React from 'react'
import './styles/Arvispace.css'
import ArvispaceLogo from '../images/projects/arvispace.png'
import PixelImage from '../images/background.svg'
import Oracle from '../images/icons/oracle.png'
import PlayStore from '../images/icons/playstore.png'
import AppStore from '../images/icons/appstore.png'

const Arvispace = (props) => {

    return(
        <div className="container">
            <img src={PixelImage} className="Arvispace__pixelimage" alt="Imagen de pixel art" />
            <img src={PixelImage} className="Arvispace__pixelimage-left" alt="Imagen de pixel art" />
            <div className="Arvipace__container">
                <div className="Arvispace__header">
                    <img className="Arvispace__logo" src={ArvispaceLogo} alt="Arvispace Logo"  />
                    <div className="Arvispace__titles">
                        <p className="Arvispace__subtitle quicksand">Augmented Reality App</p>
                        <h1 className="Arvispace__title">Arvispace</h1>
                    </div>
                </div>
                <div className="Arvispace__content">
                    <p className="Arvispace__description">
                        This is a app developed in Unity3D as augmented reality eccomerce with inventory connection to update data and create order and pay in app.
                    </p>
                    <p className="Arvispace__description">
                        This app have connection with any ERP system also this is Oracle Gold Partner.
                    </p>
                </div>
                <div className="Arvispace__footer">
                    <div className="Arvipace__playstore">
                        <a href="https://arvispace.com" className="">
                            <img className="" src={PlayStore} alt="" />
                        </a>
                    </div>
                    <div className="Arvipace__appstore">
                        <a href="https://arvispace.com" className="">
                            <img className="" src={AppStore} alt="" />
                        </a>
                    </div>
                    <div className="Arvipace__oracle">
                        <a href="https://arvispace.com" className="">
                            <img className="" src={Oracle} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Arvispace