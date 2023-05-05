import React from "react";
import { TextEditor, getEditor } from "../../components/text_editor/text_editor";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { OptionsList } from "../../components/form/optionsList";
import { Title } from "../../components/title";
import { NavBar } from "../../components/navbar";
import { Input } from "../../components/form/input";
import { Year, loadAllYears } from "../../model/yearLoader";
import { loadNomMatiere } from "../../model/MatiereLoader";
import { Course, loadCourse, modifyACourse } from "../../model/CourseLoader";


type UpdateCoursPageState = {
    cours?: Course,
    years: Year[],
    nomMatieres: string[],
}

export class UpdateCoursPage extends React.Component<any, UpdateCoursPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            years: [],
            nomMatieres: [],
        };
    }

    async componentDidMount() {
        let id =  window.location.pathname.split("/")[3]; //get id of the page. probably a bad idea of doing it like that.   
        let course: Course = await loadCourse(id);
        
        let years = await loadAllYears();
        let matieres = await loadNomMatiere();

        this.setState({
            cours: course,
            years: years,
            nomMatieres: matieres,
        });
    }


    async update() {
        let inputTitle = document.querySelector("#inputTitleCours") as any;        
        let title: string = inputTitle.value ? inputTitle.value : "";

        let html: string = "";
        let editor = getEditor();
        if(editor) {
            html = editor.getHTML();
        } 

        let course: Course = this.state.cours as Course;
        course.title = title;
        course.contenu = html;

        let res = await modifyACourse(course);
        console.log(res);
        if(res) {
            this.setState({
                cours: course,
                years: [],
                nomMatieres: [],
            });
        }
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Mise à jour du cours"/>  

                <div className="create_cours_titre_cours">     
                    <Input id="inputTitleCours" placeholder="Titre" value={this.state.cours?.title}/>
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
                    {this.state.cours &&<TextEditor content={this.state.cours?.contenu}/>}
                </section>

                <div className="buttons_div">
                    <div><Button onClick={() => { this.update(); }} content="Enregistrer"/></div>
                    <div><Button content="Annulez"/></div>
                </div>

                <Footer/>
            </main>
        );
    }
}