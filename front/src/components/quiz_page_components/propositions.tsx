import React from "react";
import { PropositionsProps, PropositionsType } from "../../model/Quiz_page_models/propositionsModel";
import "./propositions.css"

export class Propositions extends React.Component<PropositionsProps> {
    render(): React.ReactNode {
        let nbRightAnwser;
        //let classNameBackgroundColor : string = "tips_course_bordercolor_"; 
        switch(this.props.type) {
            case PropositionsType.ONE_RIGHT_ANSWER: nbRightAnwser = "1"; break;
            default: console.log("unimplemented TipsCourseType")
        }

        return (
            <div className="propositions">
                <input type="radio" name={this.props.name}/>
                <span className="radiobox_span">{this.props.content}</span>
            </div>
        );
    }
}