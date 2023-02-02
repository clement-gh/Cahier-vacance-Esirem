import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./annee.css";

// La page année affiche une liste de rubriques et de cours correspondant à l'année et à la matière sélectionnée
interface IStateAnnee {
  names : {id:number, nom:string}[]
   rubrik: {idRubrique:number,idExoLong:number, titreExolong:string, idCours:number, titreCours:string,idQuizz:number,titreQuizz:string}[]
}
export class Annee extends React.Component<any,IStateAnnee> {
    constructor(props: any) {
        super(props);
       
        this.state = {    
            rubrik : [],
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
        this.setState({names: rubriquesList});
        
        let JSON_Rubrik : {idRubrique:number,idExoLong:number, titreExolong:string, idCours:number, titreCours:string,idQuizz:number,titreQuizz:string}[] = [];
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
        let rubriks:{idRubrique:number,idExoLong:number, titreExolong:string, idCours:number, titreCours:string,idQuizz:number,titreQuizz:string}[] = JSON_Rubrik.map((value: any) => {
            return{ idRubrique:value.idRubrique,idExoLong:value.idExoLong, titreExolong:value.titreExolong, idCours:value.idCours, titreCours:value.titreCours,idQuizz:value.idQuizz,titreQuizz:value.titreQuizz};
        });
      
      
        this.setState({rubrik: rubriks});
        

        
       
    }

    render(): React.ReactNode {
    console.log(this.state.rubrik);
        return (
            <main>
                <NavBar/>
                <div>
                <ul className="bloc_matiere_list">
              
                {
                    this.state.names.map((name) => {
                        let filteredYears = this.state.rubrik.filter(rub => rub.idRubrique === name.id);

                        return (
                            <li key={name.nom} className="bloc_matiere_list_item">
                                <BlocMatiere niveau = { name.nom } 

                                />
                            </li>
                        )
                    })
                }
                </ul>

                </div>

                <Footer/>
            </main>
        );
    }
}