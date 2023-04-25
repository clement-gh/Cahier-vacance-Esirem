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
import { PostApi } from "../../model/api_caller";

type CreateCoursPageState = {
    years: Year[];
    nomMatieres: string[],
};

export class CreateCoursPage extends React.Component<any, CreateCoursPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            years: [],
            nomMatieres: [],
        }
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

        let dz: FormData = new FormData();        
        dz.append('titreCours', title);
        let html = "";
        let editor = getEditor();
        if(editor) {
            html = editor.getHTML();
            dz.append('contenu', html); 
        } else {
            dz.append('contenu', "");
        }

        let coursToPost = {        
            titreCours: title, 
            contenu: html,            
        }

        console.log(coursToPost);
        let b = await PostApi('cours/post/', coursToPost);
        console.log(b);
    }

    render(): React.ReactNode {
        return (
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
        );
    }
}