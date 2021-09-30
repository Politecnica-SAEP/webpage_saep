import React from "react";  
import logo from '../../assets/logo.png';


import './style.css';

export default function Header() {

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Icosaedro verde com um escrito embaixo que diz: Semana Acadêmica da Escola Politécnica" />
            </div>
        </header>
    )
}