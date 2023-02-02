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
}

//function to load a course with his id
export async function loadCourse(id: number | string): Promise<Course> {
    let response = await fetch('http://[::1]:4000/cours/' + id);
    let principal = await response.json();
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
function extractStringBetweenBorn(origin: string, born1: string, born2: string) : string | undefined {
    let extractedString = origin.split(born1)[1]?.split(born2);    
    return extractedString ? extractedString[0] : undefined;
}