import React from "react";
import "./button.css"

type ButtonProps = {
    content: string,
    onClick?: (a: any) => void,
}

export class Button extends React.Component<ButtonProps> {

    render(): React.ReactNode {
        return (
            <button className="button_component" type="button" onClick={this.props.onClick}>{this.props.content}</button>
        );
    }
}