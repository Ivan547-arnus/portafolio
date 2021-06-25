import React from 'react'
import './styles/Skills.css'
import "../styles/index.css";
import PixelImage from '../images/background.svg'

const Skills = () => {
    return(
        <div className="container">
            <img src={PixelImage} className="Skills__pixelimage" alt="" />
            <div className="Skills__container">
                <p className="Skills__subtitle">About</p>
                <h1 className="Skills__title">Read more about me</h1>
                <p className="Skills__description">
                I am a software developer with 4 years experience build new projects, i have experience as leader project in Augmented Reality and build eccomerce projects as free lancer. Always looking for the best possible solution.
                </p>
                <p className="Skills__description">
                I am passionate for front end however I have more experience in back end on different languages of programming such as C #, PHP, JS and Java with dessign patterns as Singleton, MVC, Factory and SOLID.
                </p>
            </div>
        </div>
    )
}

export default Skills;