import { TipsCourseType } from "../Course_page_models/tipsCourseModel"

export type CreateCoursPageState = {
    paragraphs: ParagraphModel[],
}

export type ParagraphModel = {
    content: string,
    annotation?: Annotation,
}

export type Annotation = {
    content: string,
    tipsCourseType: TipsCourseType,
}