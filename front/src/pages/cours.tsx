import React from "react";
import { ParagraphCourse } from "../components/course_page_components/paragraphCourse";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { TipsCourseType } from "../model/Course_page_models/tipsCourseModel";
import { Course, loadCourse } from "../model/CourseLoader";

const idCourseToLoad = [4, 2];

type CoursProps = {
    courses: Course[],
}

export class Cours extends React.Component<any, CoursProps>{
    constructor(props: any) {
        super(props);
        this.state ={courses: []};
    }

    async componentDidMount() {  
        let c: Course[] = [];
        for(let i = 0; i < idCourseToLoad.length; i++) {
            let course: Course = await loadCourse(idCourseToLoad[i]);
            c.push(course);
        }
        this.setState({courses: [...c]});
    }

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Cours"/>
                {
                    this.state.courses.map((value) => {
                        return <ParagraphCourse tipsType={TipsCourseType.TIPS} tipsContent={value.annotation} 
                                 title={value.title} secondaryTitle={value.subTitle} 
                                 content={value.content}/>
                    })
                }
                <Footer/>
            </main>
        );
    }
}