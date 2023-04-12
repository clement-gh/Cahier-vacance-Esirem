import React from "react";
import "./input.css"

type InputProps = {
    label?: string,
    labelSideRight?: boolean,
    type?: string,
    value?: string,
    placeholder?: string,
};

export class Input extends React.Component<InputProps> {
    render(): React.ReactNode {
        let classInputDiv = "input_div ";
        if(this.props.labelSideRight) {
            classInputDiv += "input_display_reverse_row";            
        } else {
            classInputDiv += "input_display_row";
        }
        return (
            <div className={classInputDiv}>
                {this.props.label && <label className="input_label">{this.props.label}</label>}
                <input className="input_input" type={this.props.type} value={this.props.value} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}