import { Paragraph } from "./CourseLoader";
import { extractStringBetweenBorn } from "./CourseLoader";
import { extractStringsBetweenBorn } from "./CourseLoader";

export type Corriger = {
    id: number;
    title: string;
    content: Paragraph[]
}


//function to load a course with his id
export async function loadCorriger(id: number | string): Promise<Corriger> {
    let response = await fetch('http://[::1]:4000/correction/' + id);
    
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
        let question = extractStringsBetweenBorn(blocsContent[i], "reponse");
        let image = extractStringBetweenBorn(blocsContent[i], "<image>", "</image>");
        let annotation = extractStringBetweenBorn(blocsContent[i], "<annotation>", "</annotation>");

        paragraphs.push({
            title,
            subTitle,
            content,
            question,
            image,
            annotation,
        });
    }
    
    let corriger : Corriger = {
        id: principal.idCorrection,
        title: principal.titreCorrection,
        content: paragraphs,
    }
    return corriger;
}
