import React, { useState } from "react";

import logoProfile from '../assets/profile.jpeg'
import { Content } from "../styles/components/Profile";

const Profile: React.FC = () => {
    const [work,setWork]=useState('EcoElétrica Engenharia')
    const [from,setFrom]=useState('Vitória Da Conquista - Bahia')
    const [tell,setTell]=useState('(77) 98825-7032')
    const [email,setEmail]=useState('rafael.brito.1422@gmail.com')
    return(
        <Content>
            <section className="profile">
                <img src={logoProfile} alt="logo" />
                <h1>Rafael Brito Sampaio</h1>
                <div className="obs">
                    <div className="describe">
                    <p>Sou muito curioso e gosto de resolver problemas, enquanto não encontro a solução eu não sossego, essa é uma das coisas que me faz querer aprender coisas novas constantemente.</p>
                    </div>
                    <ul>
                        <li>{work}</li>
                        <li>{from}</li>
                        <li>{tell}</li>
                        <li>{email}</li>
                    </ul>
                </div>
            </section>
            <section className="description">
                <div className="experience">
                    <div className="header">
                        <h1>{'Ambev'}</h1>
                        <span>- {'Aprendiz'}</span>
                    </div>
                    <div className="time">
                        <p>03/2022 até 11/2022</p>
                    </div>
                    <span className="description">
                        atividades realizadas bla bla bla bla bla. É um texto giganteee.
                    </span>
                </div>
                <div className="experience">
                    <div className="header">
                        <h1>{'Ambev'}</h1>
                        <span>- {'Aprendiz'}</span>
                    </div>
                    <div className="time">
                        <p>03/2022 até 11/2022</p>
                    </div>
                    <span className="description">
                        atividades realizadas bla bla bla bla bla. É um texto giganteee.
                    </span>
                </div>
                <div className="experience">
                    <div className="header">
                        <h1>{'Ambev'}</h1>
                        <span>- {'Aprendiz'}</span>
                    </div>
                    <div className="time">
                        <p>03/2022 até 11/2022</p>
                    </div>
                    <span className="description">
                        atividades realizadas bla bla bla bla bla. É um texto giganteee.
                    </span>
                </div>

            </section>

        </Content>

    )
}

export default Profile
