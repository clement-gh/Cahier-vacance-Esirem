export type TableModel = {
    row_titles: String[],
    rows: Row[],
    doubleClick?: (row: Row) => void;
}

export type Row = {
    idRow?: Number,
    content: String[],
}