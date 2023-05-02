import React from "react";
import { NavBar } from "../../components/navbar";
import { Table } from "../../components/Table";
import { Button, ColorButton } from "../../components/button";
import { Footer } from "../../components/footer";
import { Title } from "../../components/title";
import { OptionsList } from "../../components/form/optionsList";
import { Year, loadAllYears } from "../../model/yearLoader";
import { loadNomMatiere } from "../../model/MatiereLoader";
import { SearchBar } from "../../components/search_bar";
import "./gestion_cours.css"
import { Course, loadAllCourses } from "../../model/CourseLoader";

type GestionCoursState = {
    courses: Course[],
    years: Year[];
    nomMatieres: string[],
};

export class GestionCours extends React.Component<any, GestionCoursState> {
    constructor(props: any) {
        super(props);
        this.state = {
            courses: [],
            years: [],
            nomMatieres: [],
        };
    }

    async componentDidMount() {
        let years = await loadAllYears();
        let matieres = await loadNomMatiere();
        let courses = await loadAllCourses();

        this.setState({
            courses: courses,
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

                    <SearchBar/>
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
                            this.state.courses.map((course) => {
                                return ["-", course.title, "-", "Cours", "-", "-" ];
                            })
                        }
                    />

                    <p className="paragraph_nb_result">{this.state.courses.length} résultats obtenus</p>

                    <div className="gestion_cours_buttons_div">
                        <Button content="Créer un cours" color={ColorButton.BLUE}/>
                        <Button content="Modifier un cours" color={ColorButton.YELLOW}/>
                        <Button content="Supprimer la selection" color={ColorButton.RED}/>
                    </div>

                </section>
                <Footer/>
            </main>
        );
    }
}