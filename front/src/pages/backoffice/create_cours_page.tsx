import React from "react";
import { Title } from "../../components/title";
import { Input } from "../../components/form/input";
import "./create_cours_page.css"
import { TextArea } from "../../components/form/textarea";
import { OptionsList } from "../../components/form/optionsList";
import { TipsCourseType } from "../../model/Course_page_models/tipsCourseModel";
import { TipsCourseModifiable } from "../../components/course_page_components/course_page_modifiable/TipsCourseModifiable";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";

type CreateCoursPageState = {
    hasAnnotation: boolean,
    tipsCourseType : TipsCourseType,
}

export class CreateCoursPage extends React.Component<any, CreateCoursPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasAnnotation: false,
            tipsCourseType: TipsCourseType.CORRECT,
        }
    }

    changeState(): void {
        let optionslist : any= document.getElementsByName("annotationType")[0];
        let value: string = optionslist.options[optionslist.selectedIndex].value;
        let type: TipsCourseType | undefined = undefined;
        switch(value) {
            case "TIPS": type = TipsCourseType.TIPS; break;
            case "CORRECT": type = TipsCourseType.CORRECT; break;
            case "WARNING": type = TipsCourseType.WARNING; break;
            case "ERROR": type = TipsCourseType.ERROR; break;
        }

        if(type !== undefined) {            
            this.setState({
                hasAnnotation: true,
                tipsCourseType: type,
            });
        }
        else {            
            this.setState({
                hasAnnotation: false,
                tipsCourseType: TipsCourseType.CORRECT,
            });
        }
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
                    <div className="create_cours_paragraph_inputs">
                        <TextArea label="Contenu du cours : " cols={150} rows={6}/>
                        <OptionsList name="annotationType" 
                            options={[
                                {content: "NONE",    value: "NONE"},
                                {content: "TIPS",    value: "TIPS"},                                
                                {content: "CORRECT", value: "CORRECT"},
                                {content: "WARNING", value: "WARNING"},
                                {content: "ERROR",   value: "ERROR"},
                            ]}
                            func={() => { this.changeState() }}
                        />
                        {this.state.hasAnnotation && <TipsCourseModifiable type={this.state.tipsCourseType} content="zdzd"/>   }                     
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}