import React from "react";
import "./menu.css"

export class Menu extends React.Component  {

    render(): React.ReactNode {
        return (
            <div className="menu">
                <ul className="menu_list">
                    <li className="menu_list_item"><a href="./">Home</a></li>
                    <li className="menu_list_item"><a href="./cours">Cours</a></li>
                    <li className="menu_list_item"><a href="./exercices">Exercices</a></li>
                </ul>
            </div>
        );
    }

}