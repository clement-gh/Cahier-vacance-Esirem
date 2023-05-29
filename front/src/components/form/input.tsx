import React from "react";
import "./input.css"

type InputProps = {
    label?: string,
    labelSideRight?: boolean,
    type?: string,
    value?: string,
    placeholder?: string,
    id?: string,
    onChangeCallback?: (id?: string) => void,
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
                <input id={this.props.id} className="input_input" type={this.props.type} defaultValue={this.props.value} placeholder={this.props.placeholder} 
                onClick={ () => { if(this.props.onChangeCallback) this.props.onChangeCallback(this.props.id); } }/>
            </div>
        );
    }
}