import React from "react";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export class Cours extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <h1>Cours</h1>
                <Footer/>
            </main>
        );
    }
}