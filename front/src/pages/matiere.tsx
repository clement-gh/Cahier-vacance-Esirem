import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";


export class Matiere extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Titre principale"/>

                <ul className="bloc_matiere_list">
                    <li className="bloc_matiere_list_item"><BlocMatiere/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere/></li>
                </ul>

                <Footer/>
            </main>
        );
    }
}