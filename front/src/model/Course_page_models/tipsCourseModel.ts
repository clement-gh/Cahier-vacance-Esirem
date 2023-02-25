export type TipsCourseProps = {
    type: TipsCourseType,
    content: string,
}

export enum TipsCourseType {
    TIPS, WARNING, ERROR, CORRECT,
}

export type TipsCourseModifiableProps = {
    id: number,
    type: TipsCourseType,
    content: string,
};

export function stringToTipsCourseType(s: string) : TipsCourseType | undefined {
    let type: TipsCourseType | undefined = undefined;
    switch(s) {
        case "TIPS": type = TipsCourseType.TIPS; break;
        case "CORRECT": type = TipsCourseType.CORRECT; break;
        case "WARNING": type = TipsCourseType.WARNING; break;
        case "ERROR": type = TipsCourseType.ERROR; break;
    }
    return type;
}
export function tipsCourseTypeToString(t: TipsCourseType) : string {
    let str: string = "";
    switch(t) {
        case TipsCourseType.TIPS: str = "TIPS"; break;
        case TipsCourseType.CORRECT: str = "CORRECT"; break;
        case TipsCourseType.ERROR: str = "ERROR"; break;
        case TipsCourseType.WARNING: str = "WARNING"; break;
    }
    return str;
}