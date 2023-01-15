import React from "react";
import { BlocCourse } from "../components/blocCourse";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./home.css";
import { BlocCourseProps } from "../model/blocCourseProps";
//import  { bloctype} from "../model/blocCourseProps";

export class Home extends React.Component  {

     
    render(): React.ReactNode {
        
        return (
            <main id="home_page">
                <NavBar/>
                <Title content="Titre Principale"/>
                <p className="home_page_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mi nulla. Etiam euismod tortor quis lorem porttitor dignissim. In et quam ipsum. Nulla facilisi. Morbi commodo tortor non urna consequat, in ullamcorper nunc aliquet.</p>
                
                <section className="home_page_blocs_courses">
                    <BlocCourse title="Informatique" imgAdd="./images/pexels-photo-459653.jpeg" imgAlt="background_bloc_informatique" iconAdd="./images/computer.png"iconAlt="computer_icon"/>
                    <BlocCourse title="Mathématique" imgAdd="./images/background_maths.png" imgAlt="background_bloc_maths" iconAdd="./images/logoMaths.png"iconAlt="maths_icon"/>
                    <BlocCourse title="Électronique" imgAdd="./images/background_elec.png" imgAlt="background_bloc_informatique" iconAdd="./images/logoElectronique.png"iconAlt="elec_icon"/>
                </section>
                <Footer/>
            </main>
        );
    }
}