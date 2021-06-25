import React from 'react';
import './styles/Profile.css';
import "../styles/index.css";
import ProfilePhoto from "../images/profile.jpg";
import Instagram from "../images/icons/instagram.png"
import Linkedin from "../images/icons/linkedin.png"
import Github from "../images/icons/github.png"

const Profile = (props) => {
    return(
        <div className="container bg Profile__container">
            <div className="Profile__ellipse">
                <img src={ProfilePhoto} className="Profile__user" alt="Profile"/>
            </div>
            <div className="Profile__info">
                <h1>Hi</h1>
                <p>
                    I'am Ivan <br />
                    <strong>Full Stack Developer</strong>
                </p>
            </div>
            <div className="Profile__social_networks">
                <div className="border">
                    <a href="https://www.instagram.com/ivan.villegas547/?hl=es-la">
                        <img src={Instagram} className="icon" alt="Instagram icon"/>
                    </a>
                </div>
                <div className="border">
                    <a href="https://github.com/Ivan547-arnus">
                        <img src={Linkedin} className="icon" alt="Linked in icon"/>
                    </a>
                </div>
                <div className="border">
                    <a href="https://github.com/Ivan547-arnus">
                        <img src={Github}  className="icon" alt="Github icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile