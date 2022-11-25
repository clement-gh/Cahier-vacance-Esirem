import React from "react";
import { BlocCourse } from "../components/blocCourse";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import "./home.css";

export class Home extends React.Component {
    
    render(): React.ReactNode {
        return (
            <main id="home_page">
                <NavBar/>
                <h1 className="home_page_title">Titre Principale</h1>
                <p className="home_page_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.</p>
                
                <section className="home_page_blocs_courses">
                    <BlocCourse/>
                    <BlocCourse/>
                    <BlocCourse/>
                    <BlocCourse/>
                    <BlocCourse/>
                </section>
                <Footer/>
            </main>
        );
    }
}