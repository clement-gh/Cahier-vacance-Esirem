import React from "react";
import { TextArea } from "../../form/textarea";
import { OptionsList } from "../../form/optionsList";
import { ParagraphModel } from "../../../model/backoffice/create_cours_page_models";
import { TipsCourseModifiable } from "./TipsCourseModifiable";
import { TipsCourseType } from "../../../model/Course_page_models/tipsCourseModel";
import "./paragraph.css"


type ParagraphProps = {
    id: number,
    funcGetId?: (id: number) => void,
}

export class Paragraph extends React.Component<ParagraphProps, ParagraphModel> {   
    constructor(props: ParagraphProps) {
        super(props);
        this.state = {
            content: "",
            annotation: undefined,
        }
    }

    changeState(): void {
        let optionslist : any= document.getElementsByName("annotationType" + this.props.id)[0];
        let value: string = optionslist.options[optionslist.selectedIndex].value;
        let type: TipsCourseType | undefined = undefined;
        switch(value) {
            case "TIPS": type = TipsCourseType.TIPS; break;
            case "CORRECT": type = TipsCourseType.CORRECT; break;
            case "WARNING": type = TipsCourseType.WARNING; break;
            case "ERROR": type = TipsCourseType.ERROR; break;
        }
        console.log(type);

        this.setState({
            content: this.state.content,
            annotation: (type !== undefined) ? {
                content: "",
                tipsCourseType: type
            } : undefined,
        })
    }

    render(): React.ReactNode {
        return (
            <div className="create_cours_paragraph">
                <div className="create_cours_paragraph_delete">
                    <span className="create_cours_paragraph_delete_char" onClick={() => { this.props.funcGetId && this.props.funcGetId(this.props.id);}}>x</span>
                </div>
                <div className="create_cours_paragraph_inputs">
                    <TextArea label="Contenu du cours : " cols={150} rows={6}/>
                    <OptionsList name={"annotationType" + this.props.id}
                        options={[
                            {content: "NONE",    value: "NONE"},
                            {content: "TIPS",    value: "TIPS"},                                
                            {content: "CORRECT", value: "CORRECT"},
                            {content: "WARNING", value: "WARNING"},
                            {content: "ERROR",   value: "ERROR"},
                        ]}
                        func={() => { this.changeState() }}
                    />
                    {this.state.annotation && <TipsCourseModifiable type={this.state.annotation.tipsCourseType} content="zdzd"/>   }                     
                </div>
            </div>
        );
    }
}