import React from "react";
import { TipsCourseProps, TipsCourseType } from "../../model/Course_page_models/tipsCourseModel";
import "./tipsCourse.css"

export class TipsCourse extends React.Component<TipsCourseProps> {
    render(): React.ReactNode {
        let title: string = "";
        let classNameBackgroundColor : string = "tips_course_bordercolor_"; 
        switch(this.props.type) {
            case TipsCourseType.TIPS:    title = "Annecdote / Conseil"; classNameBackgroundColor+="blue"; break;
            case TipsCourseType.WARNING: title = "Attention !"; classNameBackgroundColor+="yellow";       break;
            case TipsCourseType.ERROR:   title = "Pas exactement..."; classNameBackgroundColor+="red";    break;
            default: console.log("unimplemented TipsCourseType")
        }

        return (
            <div className="tips_course">
                <p className="tips_course_title">{title}</p>
                <div className="tips_course_emplacement">
                    <div className={"tips_course_circle " + classNameBackgroundColor}>
                        <img className="tips_course_icon" alt="tips_icon" src="./images/course_page_icon/undraw_Notify_re_65on.png"></img>
                    </div>                    
                    <div className={"tips_course_rectangle " + classNameBackgroundColor}>
                        <p className="tips_course_text">{this.props.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}