import React from "react";
import "./Table.css"
import { Row, TableModel } from "../model/tableModel";
import { Input } from "./form/input";

export class Table extends React.Component<TableModel> {
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
                        <td className="table_row_titles_title"><Input type="checkbox"/></td>
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