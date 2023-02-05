import React from "react";
import { BlocQuizProps } from "../model/blocQuizProps";
import { Propositions } from "./quiz_page_components/propositions";
import { Question } from "./quiz_page_components/question";

export class BlocQuiz  extends React.Component <BlocQuizProps>  {
  
    render(): React.ReactNode {
      
        return (
            <div className="bloc_quiz_div">
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
