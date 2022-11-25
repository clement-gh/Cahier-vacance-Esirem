import React from "react";
import "./blocCourse.css"

export class BlocCourse extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="bloc_course">
                <div className="bloc_course_icon"></div>
                <img className="bloc_course_image" src="./images/pexels-photo-459653.jpeg"/>
            </div>
        );
    }
}