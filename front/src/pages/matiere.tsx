import React from "react";
import { BlocMatiere } from "../components/blocMatiere";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { Title } from "../components/title";
import "./matiere.css";
import  { useState } from 'react';


//Page d'une Matiere qui affichera les cours correspondants
//Doit chargé la liste des cours via l'API
interface IState {
    data: { idAnneeEsirem: number; nom: string }[];
  }

export class Matiere extends React.Component  {
    
       
        state: IState = {
        
           data : []
        };
   

    componentDidMount(): void {
        fetch('http://[::1]:4000/annee').then(response => response.json())
        .then((data) => {
            this.setState({  data });
           
        }, error => {
            console.log(error);
        }
        );

    }
   
   
    render(): React.ReactNode {
     
        return (
            <main className="page_matiere">
                <NavBar/>
                <Title content="Titre principale"/>
                <div>
                <ul className="bloc_matiere_list">
          {this.state.data.map((year) => (
            <li  key={year.idAnneeEsirem} className="bloc_matiere_list_item"><BlocMatiere niveau = { year.nom}/></li>
          ))}
        </ul>
      </div>

                
                  

                <Footer/>
            </main>
        );
    }
}