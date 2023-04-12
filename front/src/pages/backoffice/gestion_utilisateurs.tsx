import React from "react";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./gestion_utilisateurs.css"
import { Table } from "../../components/Table";
import { Button } from "../../components/button";

export class GestionUtilisateurs extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>

                <Title content="Gestion des utilisateurs"/>

                <section  className="gestion_utilisateurs_section">

                    <Input placeholder="Recherche..."/>
                    <div className="gestion_utilisateurs_checkbox_div">                    
                        <Input label="Etudiant" type="checkbox" labelSideRight={true}/>
                        <Input label="Professeur" type="checkbox" labelSideRight={true}/>
                        <Input label="Administrateur" type="checkbox" labelSideRight={true}/>
                    </div>

                    <Table row_titles={["Inscription", "Nom", "Prenom", "Statut", "Année"]} 
                        rows={
                            [["10/01/2022", "Nom1", "Prenom1", "Etudiant", "3ème"],
                             ["10/05/2022", "Nom2", "Prenom2", "Professeur", "-"],
                             ["10/01/2022", "Nom3", "Prenom3", "Admin", "-"]]
                        }
                    />

                    <p className="paragraph_nb_result">4 résultats obtenus</p>

                    <div className="gestion_utilisateurs_buttons_div">
                        <Button content="Créer un utilisateur"/>
                        <Button content="Modifier un utilisateur"/>
                        <Button content="Supprimer la selection"/>
                    </div>

                </section>
                <Footer/>
            </main>
        );
    }
}