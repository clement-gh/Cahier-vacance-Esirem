import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./annee.css";

interface IStateAnnee {
  names : string[],
   rubiks: {idRubrique:number,idCours:number, idMatiere: number}[]
}
const years = [ 
    {idAnneeEsirem:1, nom:"1A"},             
    {idAnneeEsirem:2, nom:"2A"}, 
    {idAnneeEsirem:3, nom:"3A"}, 
    {idAnneeEsirem:4, nom:"4A"}, 
    {idAnneeEsirem:5, nom:"5A"}, 
]
export class Annee extends React.Component<any,IStateAnnee> {
    constructor(props: any) {
        super(props);
       
        this.state = {    
            rubiks : [],
            names: [],
        };
    }


   

    async componentDidMount() { 
        let dir : string = window.location.pathname;    
         dir = dir.split("/")[2];

        console.log(dir);   
        let JSON_NomRubrique : string[] = [];
        let response = await fetch('http://[::1]:4000/listRubrique/'+dir);
    
        if(response.status === 200) {
            try {
                JSON_NomRubrique = await response.json();
            } catch {
                console.log("PARSE ERROR");
            }
        } else {
            console.log("FETCH ERROR");
        }
        let rubriqueList : string[] = JSON_NomRubrique.map((value: any) => {
            return value.nom;
        });
        
        this.setState({names: rubriqueList});
       
    }
    render(): React.ReactNode {
     
        return (
            <main>
                <NavBar/>
                <div>
                <ul className="bloc_matiere_list">
                {
                    this.state.names.map((name) => (
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