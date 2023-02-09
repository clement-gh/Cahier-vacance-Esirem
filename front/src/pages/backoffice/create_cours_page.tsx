import React from "react";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./create_cours_page.css"
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Plus } from "../../components/plus";
import { CreateCoursPageState } from "../../model/backoffice/create_cours_page_models";
import { Paragraph } from "../../components/course_page_components/course_page_modifiable/paragraph";

export class CreateCoursPage extends React.Component<any, CreateCoursPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            paragraphs: [
                {
                    content: "",
                    annotation: undefined,
                },
            ]
        };
    }

    addParagraph() {
        let paragraphs = [...this.state.paragraphs];

        paragraphs.push({
            content:"",
            annotation: undefined,
        });

        this.setState({paragraphs});
    }

    deleteParagraph(id: number) {
        let paragraphs = [...this.state.paragraphs];
        paragraphs.splice(id, 1);
        this.setState({paragraphs});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Création d'un cours"/>                       
                <div className="create_cours_inputs">   
                <div className="create_cours_titre_cours">     
                <Input label="Titre du cours"/>
                <p className="create_cours_p">Ajouter les paragraphes du cours : </p>
                </div>
                {
                    this.state.paragraphs.map((paragraph, index) => {
                        return <Paragraph id={index} funcGetId={ (id: number) => {this.deleteParagraph(id);} }/>;
                    })
                }
                    <Plus func={()=>{ this.addParagraph();}}/>
                </div>
                <Footer/>
            </main>
        );
    }
}