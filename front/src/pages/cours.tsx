import React from "react";
import { ParagraphCourse } from "../components/course_page_components/paragraphCourse";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { TipsCourseType } from "../model/Course_page_models/tipsCourseModel";
import { Course, loadCourse } from "../model/CourseLoader";

const idCourseToLoad = 4;

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
            paragraphs: [],
        } };
    }

    async componentDidMount() {  
        let course: Course = await loadCourse(idCourseToLoad);
        this.setState({course});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content={this.state.course.title}/>
                {
                    this.state.course.paragraphs.map((value) => {
                        return <ParagraphCourse tipsType={TipsCourseType.TIPS} 
                            tipsContent={value.annotation} 
                            title={value.title} secondaryTitle={value.subTitle} 
                            content={value.content}/>
                    })
                }
                <Footer/>
            </main>
        );
    }
}