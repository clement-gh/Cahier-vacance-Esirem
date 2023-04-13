import React from "react";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./create_cours_page.css"
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { TextEditor, getEditor } from "../../components/text_editor/text_editor";

export class CreateCoursPage extends React.Component {

    save() {
        let editor = getEditor();
        if(editor) {
            let html = editor.getHTML();
            console.log(html);
        }
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Création d'un cours"/>  

                <div className="create_cours_titre_cours">     
                    <Input placeholder="Titre"/>
                </div>         
                <div className="create_cours_info_generale">
                    <Input placeholder="Année"/>
                    <Input placeholder="Matières"/>
                    <Input placeholder="Type"/>
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