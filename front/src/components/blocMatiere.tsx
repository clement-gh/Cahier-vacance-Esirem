import React from "react";
import "./blocMatiere.css";

export class BlocMatiere extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="bloc_matiere">
                <span className="bloc_matiere_text">Niveau / Année</span>

                <span className="bloc_matiere_icon">+</span>
            </div>
        );
    }
}