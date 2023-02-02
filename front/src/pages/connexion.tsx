import React from "react";
import "./connexion.css";

import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Input } from "../components/form/input";
import { Button } from "../components/button";
export class Connexion extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <div className="connexion"> 
                    <NavBar/>
                    <Title content="Connexion"/>    
                    <div className="connexion_div">
                        <form className="connexion_form">
                            <Input label="Nom"/>
                            <Input label="mot de passe" type="password"/>
                            <Button content="Se connecter"/>
                        </form>
                    </div>

                    <div className="goToInscription">
                    
                        <a href="./inscription">Pas encore inscrit ?</a>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}