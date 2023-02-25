import React from "react";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./create_cours_page.css"
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Plus } from "../../components/plus";
import { CreateCoursPageState, ParagraphModel } from "../../model/backoffice/create_cours_page_models";
import { Paragraph } from "../../components/course_page_components/course_page_modifiable/paragraph";
import { text } from "stream/consumers";
import { TipsCourseType, stringToTipsCourseType } from "../../model/Course_page_models/tipsCourseModel";

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
        let paragraphs = this.saveAllParagraphs(this.state.paragraphs.length);

        paragraphs.push({
            content:"",
            annotation: undefined,
        });
        console.log(paragraphs)
        this.setState({paragraphs});
    }

    deleteParagraph(id: number) {
        let paragraphs = [...this.state.paragraphs];
        paragraphs.splice(id, 1);
        this.setState({paragraphs});
    }

    //function to save paragrahs
    saveAllParagraphs(length: number) : ParagraphModel[]{
        let paragraphs: ParagraphModel[] = [];
        for(let i = 0; i < length; i++) {
            let tipsArea = document.getElementById("tips_textareaID"+i) as (HTMLTextAreaElement | undefined);
            let optionsList = document.getElementById("OptionsListID"+i) as (HTMLSelectElement | undefined);
            let textArea = document.getElementById("textareaID"+i) as (HTMLTextAreaElement | undefined);

            let content: string= textArea? textArea.value : "";
            let contentTips: string= tipsArea? tipsArea.value : "";
            let value = optionsList? optionsList.options[optionsList.selectedIndex].value : "undefined";

            let type: TipsCourseType | undefined = stringToTipsCourseType(value);
            
            paragraphs.push({
                content: content,
                annotation: (type != undefined) ? {
                    content: contentTips,
                    tipsCourseType: type,
                } : undefined,
            })
        }
        return paragraphs;
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