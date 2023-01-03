import React from "react";
import "./inscription.css";

import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
export class Inscription extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
     
        this.handleInputChange = this.handleInputChange.bind(this);
    
    }
    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const userName = target.userName;
        const password = target.password;
        const confirmPassword = target.confirmPassword;
        const mail = target.mail;
        const confirmMail = target.confirmMail;
        this.setState({
            userName: userName,
            password: password,
            confirmPassword: confirmPassword,
            mail: mail,
            confirmMail: confirmMail
        });
    }

    render(){
        return (
         <main>
            <div className="inscription">
                <NavBar/>
                <Title content="Inscription"/>
                <div className="inscription_form">
                    <form
                    onSubmit={(e: React.SyntheticEvent) => {
                        e.preventDefault();
                        const target = e.target as typeof e.target & {
                          email: { value: string };
                          password: { value: string };
                        };
                        const email = target.email.value; // typechecks!
                        const password = target.password.value; // typechecks!
                        
                      }}
                    >
                        <label>
                            <input type="text" name="userName" placeholder="Nom d'utilisateur" />
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Mot de passe" />
                        </label>
                        <label>
                            <input type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" />
                        </label>
                        <label>
                            <input type="text" name="mail" placeholder="Adresse mail" />
                        </label>
                        <label>
                            <input type="text" name="confirmMail" placeholder="Confirmer l'adresse mail" />
                        </label>
                       
                        
                        <label className="custom-checkbox-button_provenance">
                            <h2>Je viens de:</h2> 
                            <input type="checkbox" className="custom-checkbox-button_iut" />
                            <span className="custom-checkbox-button__label">IUT</span>
                            <input type="checkbox" className="custom-checkbox-button_prepa" />
                            <span className="custom-checkbox-button__label">Prépa</span>
                            <input type="checkbox" className="custom-checkbox-button_prepa_integree" />
                            <span className="custom-checkbox-button__label">Prépa intégrée</span>
                            <input type="checkbox" className="custom-checkbox-button_licence" />
                            <span className="custom-checkbox-button__label">Licence</span>
                            <input type="checkbox" className="custom-checkbox-button_autre" />
                            <span className="custom-checkbox-button__label">Autre</span>
                        </label>

                        <label className="custom-checkbox-button_niveau">
                            <h2>Je rentre en:</h2>
                            <input type="checkbox" className="custom-checkbox-button_1A" />
                            <span className="custom-checkbox-button__label">1A</span>
                            <input type="checkbox" className="custom-checkbox-button_3A" />
                            <span className="custom-checkbox-button__label">3A</span>
                        </label>
                        
                    </form>
                        <input type="submit" value="S'inscrire" />
                </div>
            </div>
        </main>
        );
    }

}
