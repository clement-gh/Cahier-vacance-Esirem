import React from "react";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./create_cours_page.css"
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TextEditor, getEditor } from "../../components/text_editor/text_editor";
import { OptionsList } from "../../components/form/optionsList";
import { Year, loadAllYears } from "../../model/yearLoader";
import { loadNomMatiere } from "../../model/MatiereLoader";
import { PostApi, StatusMessage } from "../../model/api_caller";
import { ErrorPopUp } from "../../components/error_pop_up";

type CreateCoursPageState = {
    years: Year[];
    nomMatieres: string[],
    statusMessage: {
        displayed: boolean,
        title: string,
        content: string,
    },
};

export class CreateCoursPage extends React.Component<any, CreateCoursPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            years: [],
            nomMatieres: [],
            statusMessage: {
                displayed: false,
                title: "",
                content: "",
            },
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

    async save() {
        let inputTitle = document.querySelector("#inputTitleCours") as any;        
        let title: string = inputTitle.value ? inputTitle.value : "";

        let html: string = "";
        let editor = getEditor();
        if(editor) {
            html = editor.getHTML();
        } 

        let coursToPost = {        
            titreCours: title, 
            contenu: html,            
        }
        let result:StatusMessage = await PostApi('cours/post/', coursToPost);
        let statusMessage;
        if(result.success) {
            statusMessage = {
                displayed: true,
                title: "Succes !",
                content: "La création s'est bien passé ! \nVous pouvez retournez au menu",
            }
        }
        else {
            statusMessage = {
                displayed: true,
                title: "Une erreur est survenu !",
                content: result.errorMessage? result.errorMessage : "",
            }
        }

        this.setState({
            statusMessage: statusMessage,
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <main>
                    <NavBar/>
                    <Title content="Création d'un cours"/>  

                    <div className="create_cours_titre_cours">     
                        <Input id="inputTitleCours" placeholder="Titre"/>
                    </div>         
                    <div className="create_cours_info_generale">
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

                    <section className="create_course_text_editor">
                        <TextEditor/>
                    </section>

                    <div className="buttons_div">
                        <div><Button onClick={() => { this.save(); }} content="Enregistrer"/></div>
                        <div><Button content="Annulez"/></div>
                    </div>

                    <Footer/>
                </main>
                <ErrorPopUp title={this.state.statusMessage.title}
                            message={this.state.statusMessage.content}
                            isDisplayed={this.state.statusMessage.displayed}
                            link="./gestion_cours"
                />
            </>
        );
    }
}