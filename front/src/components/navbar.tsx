import React from "react";
import "./navbar.css"

export class NavBar extends React.Component  {
/**<li className="navbar_list_item"><a href="/cours">Cours</a></li>
<li className="navbar_list_item"><a href="/exercices">Exercices</a></li> 
                    <a href="/cours">Cours</a>
                    <a href="/exercices">Exercices</a>*/
    render(): React.ReactNode {
        return (
            <div className="navbar">
                <div className="navbar_logo_emplacement">
                    <a href="/">
                        <img className="navbar_esirem_logo" src="/images/home.png" alt="logo_esirem"width="50" height="50"/>
                    </a>
                </div>

                <ul className="navbar_list" >  
                    <li className="navbar_list_item"><a href="/matieres">Matières</a></li>
                    <li className="navbar_list_item"><a href="/connexion">Connexion</a></li>                 
                    <li className="navbar_list_item"><a href="/about">A propos</a></li>
                </ul>
                <div className="dropdown">
                
                    
                    <img src="./images/menu.png" alt="menu" width="50" height="50"></img>
                        <div className="dropdown-content">

                            <a href="/matieres">Matières</a>
                            <a href="/connexion">Connexion</a>
                          
                            <a href="/about">A propos</a>
            
                        </div>
                   
                </div>


             </div>

        );
    }

}