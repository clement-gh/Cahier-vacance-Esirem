import React from "react";
import "./blocCourse.css"
import { BlocCourseProps } from "../model/blocCourseProps";

export class BlocCourse  extends React.Component <BlocCourseProps>  {
  
    render(): React.ReactNode {
      
        return (
            <a href={this.props.link} className="bloc_course">
                <div className="bloc_course_icon">
                    <img className="bloc_course_icon_img" src= {this.props.iconAdd} alt={this.props.iconAlt} />
                </div>
                <img className="bloc_course_image" src= {this.props.imgAdd} alt={this.props.imgAlt}/>
                <span className="bloc_course_title">{this.props.title}</span>
            </a>
        );
    }
}
