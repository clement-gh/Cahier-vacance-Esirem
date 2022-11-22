import React from "react";
import { Menu } from "../components/menu";

export class Home extends React.Component {
    
    render(): React.ReactNode {
        return (
            <main>
                <Menu></Menu>
                <p>Hello</p>
            </main>
        );
    }
}