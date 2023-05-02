import React from "react";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { Course, loadCourse } from "../model/CourseLoader";
import "../components/text_editor/text_editor.css";
import "./cours.css";

type CoursProps = {
    course: Course,
}

export class Cours extends React.Component<any, CoursProps>{
    constructor(props: any) {
        super(props);
        this.state = { course: {
            id: 0,
            idRubrique: 0,
            title: "loading",
            nomMatiere: "",
            annee: "",
            contenu: "",
        } };
    }

    async componentDidMount() { 
        let id =  window.location.pathname.split("/")[2]; //get id of the page. probably a bad idea of doing it like that.   
        let course: Course = await loadCourse(id);
        this.setState({course});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content={this.state.course.title}/>
                <div className="ProseMirror cours_div_content"  dangerouslySetInnerHTML={{__html: this.state.course.contenu}} />
                <Footer/>
            </main>
        );
    }
}