import React from "react";

type OptionsListProps = {
    name?: string,
    options: OptionsProps[],
}

type OptionsProps = {
    content: string,
    value?: string,
}


export class OptionsList extends React.Component<OptionsListProps> {
    
    render(): React.ReactNode {
        return (
            <select name={this.props.name}>
                {
                    this.props.options.map((option) => {
                        return <option value={option.value}>{option.content}</option>;
                    })
                }
            </select>
        );
    }

}