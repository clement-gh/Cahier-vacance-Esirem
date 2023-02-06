import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./annee.css";

type Rubrik = {
    idRubrique:number,
    idExoLong:number, 
    titreExolong:string, 
    idCours:number, 
    titreCours:string, 
    idQuizz:number, 
    titreQuizz:string
}

// La page année affiche une liste de rubriques et de cours correspondant à l'année et à la matière sélectionnée
interface IStateAnnee {
    names : {id:number, nom:string}[]
    rubriks: Rubrik[],
    
}
export class Annee extends React.Component<any,IStateAnnee> {
    constructor(props: any) {
        super(props);
       
        this.state = {    
            rubriks : [],
            names: [],
         
        };
    }

    async componentDidMount() { 
        let dir : string = window.location.pathname;    
        dir = dir.split("/")[2];
        
        let JSON_Rubriques : {id:number, nom:string}[] = [];

        let response = await fetch('http://[::1]:4000/listRubrique/'+dir);
        if(response.status === 200) {
            try {
                JSON_Rubriques = await response.json();
               
            } catch {
                console.log("PARSE ERROR");
            }
        }
        else {
            console.log("FETCH ERROR");
        }
    
        let rubriquesList : {id: number, nom: string}[] = JSON_Rubriques.map((value: any) => {
            return {id: value.id, nom: value.nom};
        });
        
        let JSON_Rubrik : Rubrik[] = [];
        let response2 = await fetch('http://[::1]:4000/rubrique/'+dir);
        if(response2.status === 200) {
            try {
                JSON_Rubrik = await response2.json();
               
            } catch {
                console.log("PARSE ERROR");
            }
        }
        else {
            console.log("FETCH ERROR");
        }
        let rubriks: Rubrik[] = JSON_Rubrik.map((value: any) => {
            return{ 
                idRubrique:     value.idRubrique,
                idExoLong:      value.idExoLong, 
                titreExolong:   value.titreExoLong,
                idCours:        value.idCours, 
                titreCours:     value.titreCours,
                idQuizz:        value.idQuizz,
                titreQuizz:     value.titreQuizz
                };
        });
      
      
        this.setState({
            names: rubriquesList,
            rubriks: rubriks
        });       
    }

    render(): React.ReactNode {
       
        return (
            <main>
                <NavBar/>
                <Title content="Rubriques"/>
                <div>
                    <ul className="bloc_matiere_list">              
                    {
                        this.state.rubriks.map((rubrik, index) => {
                            
                            let links = [];
                            if (rubrik.idCours) {
                              links.push({
                                title: rubrik.titreCours,
                                link: "/Cours/" + rubrik.idCours
                              });
                            }
                            if (rubrik.idExoLong) {
                              links.push({
                                title: rubrik.titreExolong,
                                link: "/ExoLong/" + rubrik.idExoLong
                              });
                            }
                            if (rubrik.idQuizz) {
                              links.push({
                                title: rubrik.titreQuizz,
                                link: "/Quiz/" + rubrik.idQuizz
                              });
                            }
                            return (
                              <li key={rubrik.idCours} className="bloc_matiere_list_item">
                                <BlocMatiere
                                  niveau={this.state.names[index].nom}
                                  links={links}
                                />
                              </li>
                            );

                          
                        })
                    }
                    </ul>
                </div>
                <Footer/>
            </main>
        );
    }
}