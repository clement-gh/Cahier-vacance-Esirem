import React from "react";
import { ParagraphCourseProps } from "../../model/Course_page_models/paragraphCourseModel";
import { SecondaryTitleCourse } from "./secondaryTitleCourse";
import { TitleCourse } from "./titleCourse";
import { TipsCourse } from "./TipsCourse";
import { TipsCourseType } from "../../model/Course_page_models/tipsCourseModel";
import "./paragraphCourse.css"

export class ParagraphCourse extends React.Component<ParagraphCourseProps> {
    render(): React.ReactNode {
        let tipsType : TipsCourseType | undefined = this.props.tipsType;
        if(!tipsType) {
            tipsType = TipsCourseType.TIPS;
        }

        return (
            <div className="paragraph_course">
                {this.props.title &&
                <TitleCourse content={this.props.title}/>}
                {this.props.secondaryTitle && //check if secondaryTitle is defined
                <SecondaryTitleCourse content={this.props.secondaryTitle}/>}
                <p className="paragraph_course_text">{this.props.content}</p>
                {this.props.tipsContent && <TipsCourse type={tipsType} content={this.props.tipsContent}/>}
            </div>
        );
    }
}