import React from "react";
import { Input } from "./form/input";
import "./search_bar.css"

export class SearchBar extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="seach_bar_div">
                <img className="search_bar_loupe_icon" src="/images/icon_component/loupe.png" alt="search_bar_loupe_icon"></img>
                <Input placeholder="Rechercher..."/>
                <img className="search_bar_close_icon" src="/images/icon_component/croix.png" alt="search_bar_croix_icon"></img>
            </div>
        );
    }
}