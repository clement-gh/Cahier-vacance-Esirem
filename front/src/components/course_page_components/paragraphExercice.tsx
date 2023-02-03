import React from "react";
import { ParagraphExerciceProps } from "../../model/Course_page_models/ParagraphExerciceModel";
import { SecondaryTitleCourse } from "./secondaryTitleCourse";
import { TitleCourse } from "./titleCourse";
import { TipsCourse } from "./TipsCourse";
import { TipsCourseType } from "../../model/Course_page_models/tipsCourseModel";
import "./paragraphExercice.css"

export class ParagraphExercice extends React.Component<ParagraphExerciceProps> {
    render(): React.ReactNode {
        let tipsType : TipsCourseType | undefined = this.props.tipsType;
        if(!tipsType) {
            tipsType = TipsCourseType.TIPS;
        }

        return (
            <div className="paragraph_Exercice">
                
               
                <div className="Enonce">
                    {this.props.title &&
                    <TitleCourse content={this.props.title}/>}
                    {this.props.secondaryTitle && //check if secondaryTitle is defined
                    <SecondaryTitleCourse content={this.props.secondaryTitle}/>}
                    <p className="paragraph_Exercice_text">{this.props.content}</p>
                    <ul>
                        {this.props.question?.map((value, index) => {
                            return <li className="paragraph_question_text"key={index}>{value}</li>
                        })}
                    </ul>
                </div>
                {this.props.image && //check if image is defined
                <img src={this.props.image} className="image_Exercice"/>}
                
                {this.props.tipsContent && <TipsCourse type={tipsType} content={this.props.tipsContent}/>}
            </div>
        );
    }
}