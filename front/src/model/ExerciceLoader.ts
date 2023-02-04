import { Paragraph } from "./CourseLoader";
import { extractStringBetweenBorn } from "./CourseLoader";
import { extractStringsBetweenBorn } from "./CourseLoader";

export type Exercice = {
    id: number;
    idRubrique: number;
    idCorrection: number;
    diffuculty : number;
    title: string;
    content: Paragraph[]
}


//function to load a course with his id
export async function loadExercice(id: number | string): Promise<Exercice> {
    let response = await fetch('http://[::1]:4000/exoL/' + id);
    
    let principal = await response.json();
    let secondary = JSON.parse(principal.contenu);
    //parse each bloc tag
    let paragraphs: Paragraph[] = []
    let blocsContent = secondary.enonce.split("<bloc>");
    
    for(let i = 0; i < blocsContent.length; i++) {
        //extract sub string from the bloc
        let title = extractStringBetweenBorn(blocsContent[i], "<titre>", "</titre>");
        let subTitle = extractStringBetweenBorn(blocsContent[i], "<soustitre>", "</soustitre>");
        let content = extractStringBetweenBorn(blocsContent[i], "<contenu>", "</contenu>");
        let question = extractStringsBetweenBorn(blocsContent[i], "question");
        let image = extractStringBetweenBorn(blocsContent[i], "<image>", "</image>");

        paragraphs.push({
            title,
            subTitle,
            content,
            question,
            image,
        });
    }
    
    let exercice : Exercice = {
        id: principal.idExoLong,
        idRubrique: principal.idRubrique,
        idCorrection: principal.idCorrection,
        diffuculty : principal.difficulte,
        title: principal.titreExoLong,
        content: paragraphs,
    }
    return exercice;
}