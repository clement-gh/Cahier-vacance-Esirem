import React from "react";
import { BlocQuiz } from "../components/blocQuiz";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { QuizProps } from "../model/blocQuizProps";
import { PropositionsType } from "../model/Quiz_page_models/propositionsModel";

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
        let path = window.location.pathname.split("/");
        let id = path[path.length - 1];
        let response = await fetch("http://[::1]:4000/quizz/" + id);
        let quizJson = await response.json();
        let contenu = JSON.parse(quizJson.contenu);
        let proposition: { nom: string, details: string }[] = contenu.proposition;
        console.log(contenu);
        console.log(proposition);

        let answers = proposition.map((value) => {
            return {
                type: PropositionsType.ONE_RIGHT_ANSWER,
                content: value.details,
                name: contenu.question,
            }
        });
        let props: QuizProps = {blocs: [{
            question: {content: contenu.question},
            answers: answers,
        }]};
        console.log(props);
        this.setState(props);        
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