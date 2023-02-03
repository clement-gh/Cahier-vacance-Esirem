import React from "react";
import { Footer } from "../components/footer";
import { ParagraphExercice } from "../components/course_page_components/paragraphExercice"; 
import { TipsCourseType } from "../model/Course_page_models/tipsCourseModel";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { Exercice, loadExercice } from "../model/ExerciceLoader";
import { Button } from "../components/course_page_components/button";
import "./exerciceL.css";


type ExerciceProps = {
    exercice: Exercice,
}

export class ExerciceL extends React.Component<any, ExerciceProps> {
    constructor(props: any) {
        super(props);
        this.state = { exercice: {
            id: 0,
            idRubrique: 0,
            idCorrection: 0,
            diffuculty : 0,
            title: "loading",
            content: [],
        } };
    }

    async componentDidMount() { 
        let id =  window.location.pathname.split("/")[2]; //get id of the page. probably a bad idea of doing it like that.   
        let exercice: Exercice = await loadExercice(id);
        this.setState({exercice});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content={this.state.exercice.title}/>
                {
                    this.state.exercice.content.map((value) => {
                        return <ParagraphExercice tipsType={TipsCourseType.TIPS} 
                            tipsContent={value.annotation} 
                            title={value.title} secondaryTitle={value.subTitle} 
                            content={value.content}
                            question={value.question}
                            image={value.image}/>
                    })
                }
                <div className="button">
                <Button link={"corrige/"+ this.state.exercice.idCorrection} text="Voir le corrigé"/>
                </div>
                <Footer/>
            </main>
        );
    }
}