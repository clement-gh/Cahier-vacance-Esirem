import React from "react";
import "./blocQuiz.css"
import { BlocQuizProps } from "../model/blocQuizProps";
import { Propositions } from "./quiz_page_components/propositions";
import { PropositionsType } from "../model/Quiz_page_models/propositionsModel";
import { Question } from "./quiz_page_components/question";

export class BlocQuiz  extends React.Component <BlocQuizProps>  {
  
    render(): React.ReactNode {
      
        return (
            <div>
                <Question content = {this.props.question.content}></Question>
                {
                    this.props.answers.map((value)=>{
                        return <Propositions type={value.type} content={value.content} name={value.name}></Propositions>
                    })
                }
                
            </div>
        );
    }
}
