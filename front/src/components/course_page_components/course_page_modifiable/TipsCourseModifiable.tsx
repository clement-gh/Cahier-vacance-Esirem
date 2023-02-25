import React from "react";
import { TipsCourseModifiableProps, TipsCourseType } from "../../../model/Course_page_models/tipsCourseModel";
import "../tipsCourse.css"
import "./TipsCourseModifiable.css"


export class TipsCourseModifiable extends React.Component<TipsCourseModifiableProps> {
    render(): React.ReactNode {
        let title: string = "";
        let classNameBackgroundColor : string = "tips_course_bordercolor_"; 
        switch(this.props.type) {
            case TipsCourseType.TIPS:    title = "Annecdote / Conseil"; classNameBackgroundColor+="blue"; break;
            case TipsCourseType.WARNING: title = "Attention !"; classNameBackgroundColor+="yellow";       break;
            case TipsCourseType.ERROR:   title = "Pas exactement..."; classNameBackgroundColor+="red";    break;
            case TipsCourseType.CORRECT:   title = "Correct ! "; classNameBackgroundColor+="green";    break;
            default: console.log("unimplemented TipsCourseType")
        }

        return (
            <div className="tips_course">
                <p className="tips_course_title : ">{title}</p>
                <div className="tips_course_emplacement">
                    <div className={"tips_course_circle " + classNameBackgroundColor}>
                        <img className="tips_course_icon" alt="tips_icon" src="/images/course_page_icon/undraw_Notify_re_65on.png"></img>
                    </div>                    
                    <div className={"tips_course_rectangle " + classNameBackgroundColor}>
                        <textarea id={"tips_textareaID" + this.props.id} name="tips_textarea" className="tips_course_textarea"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}