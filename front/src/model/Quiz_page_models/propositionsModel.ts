export type PropositionsProps = {
    type: PropositionsType,
    content: string,
    name: string
}

export enum PropositionsType {
    ONE_RIGHT_ANSWER, MANY_RIGHT_ANWSERS
}