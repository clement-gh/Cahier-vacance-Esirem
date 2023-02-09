import React from "react";
import "./plus.css"

type PlusProps = {
    func?: (a: any) => void,
}

export class Plus extends React.Component<PlusProps> {

    render(): React.ReactNode {
        return (
            <div className="Plus_div">
                 <span className="Plus_char" onClick={this.props.func}>+</span>
            </div>
        );
    }
}