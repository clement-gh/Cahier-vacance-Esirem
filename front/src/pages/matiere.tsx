import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";


//Page d'une Matiere qui affichera les cours correspondants
//Doit chargé la liste des cours via l'API
interface IStateMatiere {
    matieres: string[],
    years: {idAnneeEsirem: number, nom: string}[]
}  



export class Matiere extends React.Component<any, IStateMatiere>  {
    constructor(props: any) {
        super(props);
        this.state = {    
            matieres : [],
            years: [],
        };
    }

    async componentDidMount() {        
        let JSON_Matieres : string[] = [];
        let response = await fetch('http://[::1]:4000/matiere');
    
        if(response.status === 200) {
            try {
                JSON_Matieres = await response.json();
            } catch {
                console.log("PARSE ERROR");
            }
        } else {
            console.log("FETCH ERROR");
        }
        let matieresList : string[] = JSON_Matieres.map((value: any) => {
            return value.nom;
        });
        
        this.setState({matieres: matieresList});
        let JSON_Annees : {idAnneeEsirem: number, nom: string}[] = [];
        response = await fetch('http://[::1]:4000/annee');
        if(response.status === 200) {
            try {
                JSON_Annees = await response.json();
            } catch {
                console.log("PARSE ERROR");
            }
        } else {
            console.log("FETCH ERROR");
        }
        let anneesList : {idAnneeEsirem: number, nom: string}[] = JSON_Annees.map((value: any) => {
            return {idAnneeEsirem: value.idAnneeEsirem, nom: value.nom};
        });
        this.setState({years: anneesList});

    }
   
   
    render(): React.ReactNode {
        return (
            <main className="page_matiere">
                <NavBar/>
                <Title content="Titre principale"/>
                <div>
                <ul className="bloc_matiere_list">
                {
                    this.state.matieres.map((name) => (
                        <li key={name} className="bloc_matiere_list_item">
                            <BlocMatiere niveau = { name } links={
                                this.state.years.map((year) => (
                                    {link: ("./Matiere/" + name + "/" + year.idAnneeEsirem),
                                    title: (name + " " + year.nom)}            
                                ))                     
                            }
                            />
                        </li>
                    ))
                }
                </ul>

                </div>
                <Footer/>
            </main>
        );
    }
}