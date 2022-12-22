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
                    <form>
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
                        
                    </form>
                        <input type="submit" value="S'inscrire" />
                </div>
            </div>
        </main>
        );
    }

}
