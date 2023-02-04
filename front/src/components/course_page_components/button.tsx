import React from "react";
import "./button.css"

type buttonProps = {
    text: string;
    link: string;
}

export class Button extends React.Component<buttonProps, {}> {
    render(): React.ReactNode {
        return (
            <a className="Button" href={window.location.href.split('/').slice(0,-3).join('/') + this.props.link}>{this.props.text}</a>  
        );
    }
}