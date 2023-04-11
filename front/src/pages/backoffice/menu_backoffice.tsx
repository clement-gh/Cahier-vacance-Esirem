import React from "react";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Title } from "../../components/title";
import { BlocCourse } from "../../components/blocCourse";
import "./menu_backoffice.css";

export class MenuBackOffice extends React.Component {

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                    <Title content="Bonjour <Pseudo>"/>
                    <p className="menu_backoffice_page_text">Que souhaitez-vous faire ?</p>

                    <section className="menu_backoffice_blocs_courses">
                        <BlocCourse title="Gestion des utilisateurs" link="/backoffice/Gestion_utilisateur" imgAdd="./images/pexels-photo-459653.jpeg" imgAlt="background_bloc_informatique" iconAdd="./images/computer.png"iconAlt="computer_icon"/>
                        <BlocCourse title="Gestion Cours/Exercices" link="/backoffice/Gestion_cours" imgAdd="./images/background_maths.png" imgAlt="background_bloc_maths" iconAdd="./images/logoMaths.png"iconAlt="maths_icon"/>
                        <BlocCourse title="Création d'un cours" link="/backoffice/creation_cours" imgAdd="./images/background_elec.png" imgAlt="background_bloc_informatique" iconAdd="./images/logoElectronique.png"iconAlt="elec_icon"/>
                        <BlocCourse title="Création d'un exercice" link="/backoffice/creation_exercice" imgAdd="./images/pexels-photo-459653.jpeg" imgAlt="background_bloc_informatique" iconAdd="./images/computer.png"iconAlt="computer_icon"/>
                        <BlocCourse title="Création d'un quizz" link="/backoffice/creation_quizz" imgAdd="./images/background_maths.png" imgAlt="background_bloc_maths" iconAdd="./images/logoMaths.png"iconAlt="maths_icon"/>
                    </section>


                <Footer/>
            </main>
        );
    }

}