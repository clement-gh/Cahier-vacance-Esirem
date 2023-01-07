import React, { createRef } from "react";
import "./inscription.css";

import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
type State = {
    text: string;
  };
export class Inscription extends React.Component {
    
    state = {
        text: "",
      };
    private txtMail = createRef<HTMLInputElement>();

    handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({text: e.currentTarget.value})
      }

    processForm()
    {
        console.log("Go !")
    }
      
    render(){
        return (
         <main>
            <div className="inscription">
                <NavBar/>
                <Title content="Inscription"/>
                <div className="inscription_form">
                    <form >
                        <label>
                            <input type="text" value={this.state.text} name="userName" placeholder="Nom d'utilisateur" />
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Mot de passe" />
                        </label>
                        <label>
                            <input type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" />
                        </label>
                        <label>
                            <input type="text" name="mail" placeholder="Adresse mail" ref={this.txtMail} />
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
                        <button type="button" onClick={()=>{this.processForm()}}>Envoyer</button>
                    </form>
                        
                </div>
            </div>
        </main>
        );
    }

}
