import React from "react";
import "./Table.css"
import { Row, TableModel } from "../model/tableModel";
import { Input } from "./form/input";

export class Table extends React.Component<TableModel> {

    onChangeInternCallback(id?: string) {
        const idInt = parseInt(id as any);
        if(!this.props.onChangeCallback || !id || !idInt) {
            return;
        }
        for(let i = 0; i < this.props.rows.length; i++) {
            const row = this.props.rows[i];
            if(row.idRow === idInt) {
                this.props.onChangeCallback(row);
                return;
            }
        }
    }

    render(): React.ReactNode {
        return (
            <table className="table_table">
                <tr className="table_row_titles">
                    <th className="table_row_titles_title"><Input type="checkbox"/></th>
                {
                    this.props.row_titles.map((value)=>{
                        return <th className="table_row_titles_title">{value}</th>;
                    })
                }
                </tr>
                {
                this.props.rows.map((row: Row, index: number)=>{
                    index %=2;
                    return <tr id={"table_tr" + row.idRow} onDoubleClick={() =>{ if(this.props.doubleClick) this.props.doubleClick(row);}} className={"table_row_data table_row_data" + index}>
                        <td className="table_row_titles_title"><Input id={row.idRow + ""} type="checkbox" onChangeCallback={(id?: string) => { this.onChangeInternCallback(id); }}/></td>
                        {
                            row.content.map((value) => {
                                return <td className="table_row_data_column">{value}</td>
                            })
                        }
                    </tr>
                })
                }
            </table> 
        );
    }
}