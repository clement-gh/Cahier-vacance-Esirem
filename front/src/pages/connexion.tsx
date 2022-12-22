import React from "react";
import "./connexion.css";

import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
export class Connexion extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <div className="connexion"> 
                    <NavBar/>
                    <Title content="Connexion"/>    
                    <div className="connexion_form">
                        <form>
                            <label>
                                <input type="text" name="name" placeholder="Nom d'utilisateur" />
                            </label>    
                            <label>
                                <input type="password" name="password" placeholder="Mot de passe" />
                            </label>
                            <input type="submit" value="Se connecter" />
                        </form>
                    </div>

                    <div className="goToInscription">
                    
                        <a href="./inscription">Pas encore inscrit ?</a>
                    </div>
                </div>
            </main>
        );
    }
}