import React from "react";
import { TitleCourseProps } from "../../model/Course_page_models/titleCourseModel";
import "./paragraphCourse.css"

export class SecondaryTitleCourse extends React.Component<TitleCourseProps> {
    constructor(props: TitleCourseProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <h3 className="paragraph_course_secondary_title">{this.props.content}</h3>
        );
    }
}