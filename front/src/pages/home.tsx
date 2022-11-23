import React from "react";
import { NavBar } from "../components/navbar";

export class Home extends React.Component {
    
    render(): React.ReactNode {
        return (
            <main>
                <NavBar></NavBar>
                <p>Hello</p>
            </main>
        );
    }
}