import { callAPI } from "./api_caller";

export type Course = {
    id: number;
    idRubrique: number;
    title: string;
    contenu: string,
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
    
    let course : Course = {
        id: principal.idCours,
        idRubrique: principal.idRubrique,
        title: principal.titreCours,
        contenu: principal.contenu,
    }
    return course;
}

export async function loadAllCourses(): Promise<Course[]> {
    let json = await callAPI("cours");
    let courses: Course[] = [];

    for(let i = 0; i < json.length; i++) {
        let course : Course = {
            id: json[i].idCours,
            idRubrique: json[i].idRubrique,
            title: json[i].titreCours,
            contenu: json[i].contenu,
        }
        courses.push(course);
    }

    console.log(courses);
    return courses;
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