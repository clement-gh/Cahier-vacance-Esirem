import React from "react";
import { NavBar } from "../components/navbar";

export class Cours extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <NavBar></NavBar>
                <h1>Cours</h1>
            </main>
        );
    }
}