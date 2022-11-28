import React from "react";
import "./navbar.css"

export class NavBar extends React.Component  {

    render(): React.ReactNode {
        return (
            <div className="navbar">
                <div className="navbar_logo_emplacement">
                    <a href="./">
                        <img className="navbar_esirem_logo" src="./images/esirem_logo.png" alt="logo_esirem"/>
                    </a>
                </div>
                <ul className="navbar_list">  
                    <li className="navbar_list_item"><a href="./connexion">Connexion</a></li>                  
                    <li className="navbar_list_item"><a href="./matieres">Matières</a></li>
                    <li className="navbar_list_item"><a href="./cours">Cours</a></li>
                    <li className="navbar_list_item"><a href="./exercices">Exercices</a></li>
                    <li className="navbar_list_item"><a href="./about">A propos</a></li>
                </ul>
            </div>
        );
    }

}