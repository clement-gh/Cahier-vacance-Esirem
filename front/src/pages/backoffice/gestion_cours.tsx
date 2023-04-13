import React from "react";
import { NavBar } from "../../components/navbar";
import { Table } from "../../components/Table";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Input } from "../../components/form/input";
import { Title } from "../../components/title";
import "./gestion_cours.css"
import { OptionsList } from "../../components/form/optionsList";
import { Year, loadAllYears } from "../../model/yearLoader";
import { loadNomMatiere } from "../../model/MatiereLoader";


type GestionCoursState = {

    years: Year[];
    nomMatieres: string[],
};

export class GestionCours extends React.Component<any, GestionCoursState> {
    constructor(props: any) {
        super(props);
        this.state = {
            years: [],
            nomMatieres: [],
        };
    }

    async componentDidMount() {
        let years = await loadAllYears();
        let matieres = await loadNomMatiere();

        this.setState({
            years: years,
            nomMatieres: matieres,
        });
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>

                <Title content="Gestion des cours"/>

                <section  className="gestion_cours_section">

                    <Input placeholder="Recherche..."/>
                    <div className="gestion_cours_options_div">      
                        <OptionsList placeholder="Années" options={
                            this.state.years.map((year: Year) => {
                                return {content: year.nom, value: year.nom}
                            })} />
                        <OptionsList placeholder="Matières" options={
                            this.state.nomMatieres.map((matiere: string) => {
                                return {content: matiere, value: matiere}
                            })} />
                        <OptionsList placeholder="Type" options={[
                            {content: "Cours"},
                            {content: "Exercice"},
                            {content: "Quizz"},
                        ]} />
                    </div>

                    <Table row_titles={["Création", "Titre", "Auteur", "Type", "Année", "Matiere"]} 
                        rows={
                            [["10/01/2022", "Titre1", "Prenom1", "Etudiant", "3ème", "Info"],
                             ["10/05/2022", "Titre2", "Prenom2", "Professeur", "4ème", "Elec"],
                             ["10/01/2022", "Titre3", "Prenom3", "Admin", "-", "Maths"]]
                        }
                    />

                    <p className="paragraph_nb_result">4 résultats obtenus</p>

                    <div className="gestion_cours_buttons_div">
                        <Button content="Créer un cours"/>
                        <Button content="Modifier un cours"/>
                        <Button content="Supprimer la selection"/>
                    </div>

                </section>
                <Footer/>
            </main>
        );
    }
}