import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./annee.css";

interface IStateAnnee {
    rubiks: string[],
    years: {idAnneeEsirem: number, nom: string}[]
}

export class Annee extends React.Component<any,IStateAnnee> {
    constructor(props: any) {
        super(props);
        this.state = {    
            rubiks : [],
            years: [],
        };
    }
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
              
                <Footer/>
            </main>
        );
    }
}