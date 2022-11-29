import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";

//Page d'une Matiere qui affichera les cours correspondants
//Doit chargé la liste des cours via l'API
export class Matiere extends React.Component {

    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <Title content="Titre principale"/>

                <ul className="bloc_matiere_list">
                    <li className="bloc_matiere_list_item"><BlocMatiere niveau="1A"/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere niveau="2A"/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere niveau="3A"/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere niveau="4A"/></li>
                    <li className="bloc_matiere_list_item"><BlocMatiere niveau="5A"/></li>
                </ul>

                <Footer/>
            </main>
        );
    }
}