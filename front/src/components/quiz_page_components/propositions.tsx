import React from "react";
import { PropositionsProps, PropositionsType } from "../../model/Quiz_page_models/propositionsModel";
import "./propositions.css"

export class Propositions extends React.Component<PropositionsProps> {
    render(): React.ReactNode {
        //TODO : Implement multi answers quizz
        let nbRightAnwser;
        switch(this.props.type) {
            case PropositionsType.ONE_RIGHT_ANSWER: nbRightAnwser = "1"; break;
            default: console.log("unimplemented TipsCourseType")
        }

        return (
            <div className="propositions">
                <input className="propositions_radio_input" type="radio" name={this.props.name}/>
                <span className="propositions_radio_label">{this.props.content}</span>
            </div>
        );
    }
}