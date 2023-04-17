import { callAPI } from "./api_caller";

export type Course = {
    id: number;
    idRubrique: number;
    title: string;
    paragraphs: Paragraph[];
}

export type Paragraph = {
    title?: string;
    subTitle?: string;
    content?: string;
    annotation?: string;
    question?: string[];
    image?: string;
}

//function to load a course with his id
export async function loadCourse(id: number | string): Promise<Course> {
    let principal = await callAPI("cours/" + id);
    let secondary = JSON.parse(principal.contenu);

    //parse each bloc tag
    let paragraphs: Paragraph[] = []
    let blocsContent = secondary.texte.split("<bloc>");
    for(let i = 1; i < blocsContent.length; i++) {
        //extract sub string from the bloc
        let title = extractStringBetweenBorn(blocsContent[i], "<titre>", "</titre>");
        let subTitle = extractStringBetweenBorn(blocsContent[i], "<soustitre>", "</soustitre>");
        let content = extractStringBetweenBorn(blocsContent[i], "<contenu>", "</contenu>");
        let annotation = extractStringBetweenBorn(blocsContent[i], "<annotation>", "</annotation>");
        paragraphs.push({
            title,
            subTitle,
            content,
            annotation,
        });
    }
    
    let course : Course = {
        id: principal.idCours,
        idRubrique: principal.idRubrique,
        title: principal.titreCours,
        paragraphs: paragraphs,
    }
    return course;
}

//function who extract a substring between two born
export function extractStringBetweenBorn(origin: string, born1: string, born2: string) : string | undefined {
    let extractedString = origin.split(born1)[1]?.split(born2);    
    return extractedString ? extractedString[0] : undefined;
}

    //function who extract a multiple substring between two born
    export function extractStringsBetweenBorn(origin: string, born1: string) : string[] | undefined {
        let str = "<borne>(.*?)<\/borne>";
        str = str.replaceAll("borne", born1);
        const regex = new RegExp(str, 'g');
        const matches = [];
        let match;
    
        while ((match = regex.exec(origin)) !== null) {
            matches.push(match[1]);
        }
        return matches ? matches : undefined;
    
    } 