import React from "react";
import { ParagraphCourse } from "../components/course_page_components/paragraphCourse";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import { TipsCourseType } from "../model/Course_page_models/tipsCourseModel";

export class Cours extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Cours Fictif"/>
                <ParagraphCourse tipsType={TipsCourseType.WARNING} tipsContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet." 
                                 title="Titre principale" secondaryTitle="Titre secondaire" 
                                 content="Page fictive des cours en attendant l'API backend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet."/>
                <ParagraphCourse title="Titre principale" secondaryTitle="Titre secondaire" 
                content="Page fictive des cours en attendant l'API backend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet."
                tipsContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet."/>

                <Footer/>
            </main>
        );
    }
}