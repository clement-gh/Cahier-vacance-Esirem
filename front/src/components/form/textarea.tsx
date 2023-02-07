import React from "react";
import "./textarea.css"

type TextAreaProps = {
    label?: string,
    placeholder?: string,
    rows?: number,
    cols?: number,
}

export class TextArea extends React.Component<TextAreaProps> {

    render(): React.ReactNode { 
        return (
            <div className="textarea_div">
                {this.props.label && <label className="textarea_label">{this.props.label}</label>}
                <textarea className="textarea_input" 
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}