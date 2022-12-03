import React from "react";
import "./tipsCourse.css"

export class TipsCourse extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="tips_course">
                <p className="tips_course_title">Annecdote</p>
                <div className="tips_course_emplacement">
                    <div className="tips_course_circle"><img className="tips_course_icon" alt="tips_icon" src="./images/course_page_icon/undraw_Notify_re_65on.png"></img></div>                    
                    <div className="tips_course_rectangle">
                        <p className="tips_course_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.</p>
                    </div>
                </div>
            </div>
        );
    }
}