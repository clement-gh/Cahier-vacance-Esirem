import React from "react";

type OptionsListProps = {
    id: number,
    name?: string,
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
            <select name={this.props.name} id={"OptionsListID" + this.props.id} onChange={this.props.func}>
                {
                    this.props.options.map((option) => {
                        return <option value={option.value}>{option.content}</option>;
                    })
                }
            </select>
        );
    }

}