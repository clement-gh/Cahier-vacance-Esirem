import React from "react";
import { ParagraphCourseProps } from "../../model/Course_page_models/paragraphCourseModel";
import { SecondaryTitleCourse } from "./secondaryTitleCourse";
import { TitleCourse } from "./titleCourse";
import "./paragraphCourse.css"
import { TipsCourse } from "./TipsCourse";

export class ParagraphCourse extends React.Component<ParagraphCourseProps> {
    render(): React.ReactNode {
        return (
            <div className="paragraph_course">
                <TitleCourse content={this.props.title}/>
                {this.props.secondaryTitle && //check if secondaryTitle is defined
                <SecondaryTitleCourse content={this.props.secondaryTitle}/>}
                <p className="paragraph_course_text">{this.props.content}</p>
                <TipsCourse/>
            </div>
        );
    }
}