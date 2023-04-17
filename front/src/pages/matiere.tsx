import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";
import { loadNomMatiere } from "../model/MatiereLoader";
import { callAPI } from "../model/api_caller";


type annee = {
    nomAnnee: string,
     nomMatiere: string,
      idMatiere : number
};

//Page d'une Matiere qui affichera les cours correspondants
//Doit chargé la liste des cours via l'API
interface IStateMatiere {
    matieres: string[],
    years: annee[]
}  



export class Matiere extends React.Component<any, IStateMatiere>  {
    constructor(props: any) {
        super(props);
        this.state = {    
            matieres : [],

            years : [],
        };
    }

    async componentDidMount() {      
        let matieresList : string[] = await loadNomMatiere();

        let JSON_Annees = await callAPI("matiere");

        let anneesList : annee[] = JSON_Annees.map((value: any) => {
            return {
                nomAnnee: value.nomAnnee,
                nomMatiere: value.nomMatiere,
                idMatiere : value.idMatiere,
            };
        });

        this.setState({
            matieres: matieresList,
            years: anneesList,
        });
    }
 
 
   
    render(): React.ReactNode {
        return (
            <main className="page_matiere">
                <NavBar/>
                <Title content="Matières"/>
                <div>
                <ul className="bloc_matiere_list">
                {
                    this.state.matieres.map((name) => {
                        let filteredYears = this.state.years.filter(year => year.nomMatiere === name);
                        return (
                            <li key={name} className="bloc_matiere_list_item">
                                <BlocMatiere niveau = { name } links={
                                    
                                    filteredYears.map((year) => (
                                        {link: ("/" + year.nomMatiere + year.nomAnnee + "/" + year.idMatiere),
                                        title: (year.nomMatiere + " " + year.nomAnnee)}            
                                    ))                     
                                }
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