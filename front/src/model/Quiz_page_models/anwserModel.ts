export type AnwserProps = {
    type: AnwserType,
    content: string,
}

export enum AnwserType {
    WITH_GRAPHICS, WITHOUT_GRAPHICS
}