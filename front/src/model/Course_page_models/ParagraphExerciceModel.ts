import { TipsCourseType } from "./tipsCourseModel"

export type ParagraphExerciceProps = {
    title?: string,
    secondaryTitle?: string,

    content?: string,
    question?:string[],
    image?:string,

    tipsContent?: string,
    tipsType?: TipsCourseType,
}