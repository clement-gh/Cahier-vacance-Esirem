import React from "react";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export class Home extends React.Component {
    
    render(): React.ReactNode {
        return (
            <main>
                <NavBar/>
                <p>Hello</p>
                <Footer/>
            </main>
        );
    }
}