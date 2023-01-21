import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";


//Page d'une Matiere qui affichera les cours correspondants
//Doit chargé la liste des cours via l'API
interface IStateMatiere {
    matiere: string[],
    //data: { idAnneeEsirem: number; nom: string }[];
}  

const years = [ 
    {idAnneeEsirem:1, nom:"1A"},             
    {idAnneeEsirem:2, nom:"2A"}, 
    {idAnneeEsirem:3, nom:"3A"}, 
    {idAnneeEsirem:4, nom:"4A"}, 
    {idAnneeEsirem:5, nom:"5A"}, 
]

export class Matiere extends React.Component  {
    state: IStateMatiere = {    
        matiere : [
            "Electronique",
            "Mathématiques",
            "Informatique",
        ],
    };
   

    componentDidMount(): void {        
        //TODO : FAIRE LE LIEN AVEC LE BACK
        
        // fetch('http://[::1]:4000/annee').then(response => response.json())
        // .then((data) => {
        //     this.setState({  data });
           
        // }, error => {
        //     console.log(error);
        // }
        // );
    }
   
   
    render(): React.ReactNode {
        console.log(years);
        return (
            <main className="page_matiere">
                <NavBar/>
                <Title content="Titre principale"/>
                <div>
                <ul className="bloc_matiere_list">
                {
                    this.state.matiere.map((name) => (
                        <li key={name} className="bloc_matiere_list_item">
                            <BlocMatiere niveau = { name } links={
                                years.map((year) => (
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