import React from "react";
import { BlocMatiereLink, BlocMatiereProps, BlocMatiereState } from "../model/blocMatiereModel";
import "./blocMatiere.css";


export class BlocMatiere extends React.Component<BlocMatiereProps, BlocMatiereState> {
    state: BlocMatiereState;

    constructor(props: BlocMatiereProps) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    private openClose() : void {
        this.setState({
            isOpen: !this.state.isOpen,
        }); 
    }

    render(): React.ReactNode {
        let divClass = "bloc_matiere";
        let charIcon = '+';        
        let links : React.ReactNode = undefined;
        if (this.state.isOpen) {
            charIcon = '-';
            divClass = "bloc_matiere bloc_matiere_dark"
            links = <div className="block_matiere_list_link">{
                this.props.links?.map((link: BlocMatiereLink, _index: number) => {
                    return <div className="block_matiere_item_link">
                        <div className="block_matiere_item_link_polygon"></div>
                        <span>{link.title}</span>
                        </div>
                }
            )}
            </div>
        }

        return (
            <div className="bloc_matiere_container">
                <div className={divClass}>
                    <span className="bloc_matiere_text">{this.props.niveau}</span>
                    <span className="bloc_matiere_icon" onClick={() => { this.openClose() }}>{charIcon}</span>
                </div>
                {links}
            </div>
        );
    }
}