import React from "react";
import { QuestionProps } from "../../model/Quiz_page_models/questionModel";
import "./question.css"

export class Question extends React.Component<QuestionProps> {
    render(): React.ReactNode {
        return (
            <p className="question">{this.props.content}</p>
        );
    }
}