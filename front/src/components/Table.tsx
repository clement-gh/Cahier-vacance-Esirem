import React from "react";
import "./Table.css"
import { TableModel } from "../model/tableModel";
import { Input } from "./form/input";

export class Table extends React.Component<TableModel> {
    constructor(props: any) {
        super(props);
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
                this.props.rows.map((row: String[], index: number)=>{
                    index %=2;
                    return <tr className={"table_row_data " + "table_row_data" + index}>
                        <td className="table_row_titles_title"><Input type="checkbox"/></td>
                        {
                            row.map((value) => {
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