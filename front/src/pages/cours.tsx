import React from "react";
import { Menu } from "../components/menu";

export class Cours extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <Menu></Menu>
                <h1>Cours</h1>
            </main>
        );
    }
}