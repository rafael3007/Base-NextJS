import React, { useState } from "react";
import { NavBar } from "../styles/components/Navbar";
import rafaelLogo from '../assets/Logo_Rafael.png'
import menuImg from '../assets/menu.png'

const Navbar: React.FC = () => {
    const [atualizar,setAtualizar] = useState(0)
    const [left,setLeft] = useState('0')
    module.exports = atualizar;

    const click = ()=>{
        var temp = atualizar + 1
        setAtualizar(temp)
        console.log(atualizar)
        if((atualizar%2 )==0){
            //falso
            setLeft('0')
        }else{
            //verdadeiro
            setLeft('-100%')
        }
    }
    return (
        <NavBar>
            <nav>
                <div>
                    <img className="logo" src={rafaelLogo} alt="logo" />
                </div>
                <ul style={{
                    left: left
                }}>
                    <li>
                        <div className="menu">
                            <span>Menu</span>
                            <a href="#"></a>
                        </div>
                    </li>
                    <li>
                        <div className="menu">
                            <span>Portifolio</span>
                            <a href="#"></a>
                        </div>
                    </li>
                    <li>
                        <div className="menu">
                            <span>Tecnologias</span>
                            <a href="#"></a>
                        </div>
                    </li>
                    <li>
                        <div className="menu">
                            <span>sobre</span>
                            <a href="#"></a>
                        </div>
                    </li>


                </ul>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <img src={menuImg} alt="menu" onClick={click}/>
                </label>
            </nav>
        </NavBar>
    )
}

export default Navbar

