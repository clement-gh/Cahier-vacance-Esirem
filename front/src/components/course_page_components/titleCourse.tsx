import React from "react";
import { TitleCourseProps } from "../../model/Course_page_models/titleCourseModel";
import "./paragraphCourse.css"

export class TitleCourse extends React.Component<TitleCourseProps> {
    render(): React.ReactNode {
        return (
            <h2 className="paragraph_course_title">{this.props.content}</h2>
        );
    }
}