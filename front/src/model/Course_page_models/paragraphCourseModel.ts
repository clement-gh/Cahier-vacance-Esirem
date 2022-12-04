import { TipsCourseType } from "./tipsCourseModel"

export type ParagraphCourseProps = {
    title: string,
    secondaryTitle?: string,

    content: string,

    tipsContent?: string,
    tipsType?: TipsCourseType,
}