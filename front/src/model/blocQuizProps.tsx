import { Propositions } from "../components/quiz_page_components/propositions"
import { PropositionsProps } from "./Quiz_page_models/propositionsModel"
import { QuestionProps } from "./Quiz_page_models/questionModel"

export type QuizProps = {
    title: string,
    blocs: BlocQuizProps[]
}

export type BlocQuizProps = {
    question: QuestionProps,
    answers: PropositionsProps[],
}
