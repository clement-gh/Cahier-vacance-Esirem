import React from "react";
import "./optionsList.css"

type OptionsListProps = {
    id?: number,
    name?: string,
    placeholder?: string,
    options: OptionsProps[],
    func?: (a: any) => void,
}

type OptionsProps = {
    content: string,
    value?: string,
}


export class OptionsList extends React.Component<OptionsListProps> {
    
    render(): React.ReactNode {
        return (
            <select className="optionlist_select" name={this.props.name} placeholder="Anneee" id={"OptionsListID" + this.props.id} onChange={this.props.func}>
                {this.props.placeholder && <option value={this.props.placeholder}>{this.props.placeholder}</option>}
                {                    
                    this.props.options.map((option) => {
                        return <option value={option.value}>{option.content}</option>;
                    })
                }
            </select>
        );
    }

}