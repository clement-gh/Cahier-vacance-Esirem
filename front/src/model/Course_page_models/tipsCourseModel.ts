export type TipsCourseProps = {
    type: TipsCourseType,
    content: string,
}

export enum TipsCourseType {
    TIPS, WARNING, ERROR, CORRECT,
}