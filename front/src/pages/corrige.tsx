import React from "react";
import { Footer } from "../components/footer";
import { ParagraphExercice } from "../components/course_page_components/paragraphExercice"; 
import { TipsCourseType } from "../model/Course_page_models/tipsCourseModel";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { Corriger, loadCorriger } from "../model/CorrigeLoader";
import "./exerciceL.css";


type CorrigeProps = {
    corriger: Corriger,
}

export class Corrige extends React.Component<any, CorrigeProps> {
    constructor(props: any) {
        super(props);
        this.state = { corriger: {
            id: 0,
            title: "loading",
            content: [],
        } };
    }

    async componentDidMount() { 
        let id =  window.location.pathname.split("/")[2]; //get id of the page. probably a bad idea of doing it like that.   
        let corriger: Corriger = await loadCorriger(id);
        this.setState({corriger});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content={this.state.corriger.title}/>
                {
                    this.state.corriger.content.map((value) => {
                        return <ParagraphExercice tipsType={TipsCourseType.TIPS} 
                            tipsContent={value.annotation} 
                            title={value.title} secondaryTitle={value.subTitle} 
                            content={value.content}
                            question={value.question}
                            image={value.image}/>
                    })
                }
                <Footer/>
            </main>
        );
    }    
}