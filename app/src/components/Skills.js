import React from 'react'
import './styles/Skills.css'
import "../styles/index.css";
import PixelImage from '../images/background.svg'
import Skill from './Skill'
import Images from './SkillsImages.js'

 
const Skills = () => {
    return(
        <div className="container">
            <img src={PixelImage} className="Skills__pixelimage" alt="" />
            <div className="Skills__container">
                <p className="Skills__subtitle quicksand">About</p>
                <h1 className="Skills__title">Read more about me</h1>
                <p className="Skills__description descA">
                I am a software developer with 4 years experience build new projects, i have experience as leader project in Augmented Reality and build eccomerce projects as free lancer. Always looking for the best possible solution.
                </p>
                <p className="Skills__description descB">
                I am passionate for front end however I have more experience in back end on different languages of programming such as C #, PHP, JS and Java with dessign patterns as Singleton, MVC, Factory and SOLID.
                </p>
                <div className="Skills__elements-container">
                    <Skill url={Images.vue} alt="Vue icon" percent="70%"/>
                    <Skill url={Images.react} alt="React icon" percent="60%"/>
                    <Skill url={Images.unity} alt="Unity icon" percent="80%"/>
                    <Skill url={Images.cgato} alt="C# icon" percent="80%"/>
                    <Skill url={Images.js} alt="Js icon" percent="80%"/>
                    <Skill url={Images.php} alt="PHP icon" percent="70%"/>
                    <Skill url={Images.html} alt="Html icon" percent="90%"/>
                    <Skill url={Images.css} alt="Css icon" percent="90%"/>
                    <Skill url={Images.sql} alt="Sql icon" percent="90%"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;