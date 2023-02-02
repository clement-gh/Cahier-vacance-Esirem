import React from "react";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { Input } from "../components/form/input";
import { RadioBoxList } from "../components/form/radioBoxList";
import { Button } from "../components/button";
import "./inscription.css";

export class Inscription extends React.Component {
      
    render(){
        return (
         <main>
            <div className="inscription">
                <NavBar/>
                <Title content="Inscription"/>
                <div className="inscription_div">
                    <form className="form_signup">
                        <Input label="Nom"/>
                        <Input label="Prénom"/>
                        <Input label="Mail"/>
                        <Input label="Mot de passe" type="password"/>
                        <Input label="Confirmer le mot de passe" type="password"/>
                        
                        <RadioBoxList label="Je rentre en :" radioBoxOptions={[
                            {name: "1ère année prépa intégrée"},
                            {name: "1ère année cycle ingénieur"},
                        ]}/>

                        <RadioBoxList label="Je viens de :" radioBoxOptions={[
                            {name: "IUT"},
                            {name: "Prépa"},
                            {name: "GEIPI"},
                            {name: "Licence"},
                            {name: "Autre"},
                        ]}/>
                        <Button content="Envoyer"/>
                    </form>                        
                </div>
            </div>
            <Footer/>
        </main>
        );
    }

}
