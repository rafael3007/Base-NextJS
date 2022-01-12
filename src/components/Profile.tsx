import React, { useState } from "react";

import logoProfile from '../assets/profile.jpeg'
import { Content } from "../styles/components/Profile";

const Profile: React.FC = () => {
    const [work,setWork]=useState('EcoElétrica Engenharia')
    return(
        <Content>
            <section className="profile">
                <img src={logoProfile} alt="logo" />
                <h1>Rafael Brito Sampaio</h1>
                <div className="describe">
                   <p>Texto falando um pouco sobre mim breve</p>
                </div>
                <ul>
                    <li>work:{work}</li>
                    <li>From:</li>
                    <li>tell:</li>
                    <li>contact:</li>
                </ul>
            </section>
            <section className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing el.</p>
            </section>

        </Content>

    )
}

export default Profile
