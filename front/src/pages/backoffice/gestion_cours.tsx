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
import { Course, deleteACourse, loadAllCourses } from "../../model/CourseLoader";
import { Row } from "../../model/tableModel";

type GestionCoursState = {
    courses: Course[],
    years: Year[];
    nomMatieres: string[],
    selectedCours: number[],
};

export class GestionCours extends React.Component<any, GestionCoursState> {
    constructor(props: any) {
        super(props);
        this.state = {
            courses: [],
            years: [],
            nomMatieres: [],
            selectedCours: [],
        };
        console.log(this.state);
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

    funcDoubleClickTr(row: Row) {
        window.open("./update_cours/" + row.idRow);
    }

    funcModifyButton(): void {
        if(this.state.selectedCours.length <= 0) {
            return;
        }
        window.open("./update_cours/" + this.state.selectedCours[0]);
    }

    funcCreateButton(): void {
        window.open("./creation_cours");
    }
    
    checkCours(row: Row): void {
        if(!row.idRow) {
            return;
        }
        let selected = this.state.selectedCours;
        const indexCourse = selected.indexOf(row.idRow as number);

        if(indexCourse > -1) { //remove if find
            selected.splice(indexCourse, 1); 
        } else { //else add it
            selected.push(row.idRow as number);
        }

            
        this.setState({
            selectedCours: [...selected],
        });
    }

    async funcDeleteCours() {
        for(let i = 0; i < this.state.selectedCours.length; i++) {
            let res = await deleteACourse(this.state.selectedCours[i]);
            if(!res.success) {
                console.log("Erreur dans la suppression du cours n°" + this.state.selectedCours[i]);
            }
        }
        window.location.reload();
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
                                let date: String = course.dateCreation? course.dateCreation.toLocaleDateString() : " - ";
                                let row = {
                                    idRow: course.id,
                                    content: [date, course.title, "-", "Cours", course.annee, course.nomMatiere ],
                                }
                                return row;
                            })
                        }
                        doubleClick={this.funcDoubleClickTr}
                        onChangeCallback={ (row: Row) => {this.checkCours(row); } }
                    />

                    <p className="paragraph_nb_result">{this.state.courses.length} résultats obtenus</p>

                    <div className="gestion_cours_buttons_div">
                        <Button content="Créer un cours" color={ColorButton.BLUE} onClick={this.funcCreateButton}/>
                        <Button content="Modifier un cours" color={ColorButton.YELLOW} onClick={() => {this.funcModifyButton(); }}/>
                        <Button content="Supprimer la selection" color={ColorButton.RED} onClick={() => { this.funcDeleteCours(); }}/>
                    </div>

                </section>
                <Footer/>
            </main>
        );
    }
}