import React from "react";
import { BlocQuiz } from "../components/blocQuiz";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Propositions } from "../components/quiz_page_components/propositions";
import { Title } from "../components/title";
import { QuizProps } from "../model/blocQuizProps";
import { PropositionsType } from "../model/Quiz_page_models/propositionsModel";

const id = 1;

export class Quiz extends React.Component<any, QuizProps>{

    constructor(Props: any){
        super(Props);
        this.state = {blocs: [{
            question: {content: "En quelle année sommes-nous ?"},
            answers: [{type: PropositionsType.ONE_RIGHT_ANSWER,
                content: "string",
                name: "string"}]
        }]}
    }

    async componentDidMount(){
        let response = await fetch("http://[::1]:4000/quizz/" + id);
        let quizJson = await response.json();
        console.log(quizJson);
        let contenu = JSON.parse(quizJson.contenu);
        console.log(contenu);

        let props: QuizProps = {blocs: [{
            answers: [],
            question: contenu.question
        }]}

        // contenu.proposition.map((value)=>{
        //     return value.
        // })

        // for(let i = 0; i < ((PropositionsProps[])contenu.proposition).length; i++)
        // {
        //     props.blocs[0].answers = contenu.proposition[i];
        // }
        // console.log(props)
    }
   
   
    render(): React.ReactNode {
     
        return (
            <main className="quiz">
                <NavBar/>
                <Title content="Quiz"/>
                    <div>
                        {
                            this.state.blocs.map((value)=>{
                                return <BlocQuiz question={value.question} answers={value.answers}></BlocQuiz>
                            })
                        }
                    </div>      
                <Footer/>
            </main>
        );
    }
}