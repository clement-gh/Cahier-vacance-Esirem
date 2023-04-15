import React from "react";
import "./button.css"

export enum ColorButton {
    BLUE_LINEAR_GRADIENT,
    BLUE,
    RED,
    YELLOW,
}

type ButtonProps = {
    content: string,
    onClick?: (a: any) => void,
    color?: ColorButton,
}

export class Button extends React.Component<ButtonProps> {    
    render(): React.ReactNode {
        let color: ColorButton = this.props.color ? this.props.color : ColorButton.BLUE_LINEAR_GRADIENT;
        let color_class_name: string = "";
        switch (color) {
            case ColorButton.BLUE_LINEAR_GRADIENT: color_class_name = "button_color_blue_linear_gradient"; break;
            case ColorButton.BLUE: color_class_name = "button_color_blue"; break;
            case ColorButton.RED: color_class_name = "button_color_red"; break;
            case ColorButton.YELLOW: color_class_name = "button_color_yellow"; break;
        }

        return (
            <button className={"button_component " + color_class_name} type="button" onClick={this.props.onClick}>{this.props.content}</button>
        );
    }
}